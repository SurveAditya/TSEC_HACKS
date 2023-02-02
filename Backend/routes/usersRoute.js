const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware.js");
const Product = require("../models/productModel");
const Transaction = require("../models/transactionModel");
//register a new user
router.post("/register", async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.send({
          message: "User already exists",
          success: false,
          data: null,
        });
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
      const newUser = new User(req.body);
      await newUser.save();
      res.send({
        message: "User created successfully",
        success: true,
        data: null,
      });
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
  });

  // login user

router.post("/login", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      return res.send({
        message: "User does not exist",
        success: false,
        data: null,
      });
    }

    // if (userExists.isBlocked) {
    //   return res.send({
    //     message: "Your account is blocked , please contact admin",
    //     success: false,
    //     data: null,
    //   });
    // }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userExists.password
    );

    if (!passwordMatch) {
      return res.send({
        message: "Incorrect password",
        success: false,
        data: null,
      });
    }
    //here we are encrypting the userId and sending it as a token
    // const jwt_secret = 'w4AKsO1dihm0Cggi';
    // const token = jwt.sign({ userId: userExists._id }, jwt_secret, {
    //   expiresIn: "90d",
    // });

    res.send({
      message: "User logged in successfully",
      success: true,
      email: userExists.email,
      id: userExists._id,
      name: userExists.name,
      city:userExists.city,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

//add product
router.post("/addProduct", async (req, res) => {
  try {
    const product = new Product({
      productname: req.body.productname,
      userId:req.body.userId,
      range: req.body.range,
      images:req.body.images,
      description:req.body.description,
      category: req.body.category,
      price: req.body.price,
    });
    const result = await product.save();
    res.send({
      message: "Product added successfully",
      success: true,
      data:result,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

//get product by userid
router.post('/getProductsById', async (req, res) => {
  try {
   const products = await Product.find({ userId: req.body.userId });
    res.send({
      message: "Products Received",
      success: true,
      data:products,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
  });

  //delete product by id
  router.post("/deleteProductById", async (req, res) => {
    try{
    const result = await Product.deleteOne({ _id: req.body.productId });
    res.send({
      message: "Products Deleted Successfully",
      success: true,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

//filter by range and title
router.post("/filterProducts", async (req, res) => {
    try{
      minPrice = req.body.minPrice;
      maxPrice = req.body.maxPrice;
      searchTerm = req.body.searchTerm;
      Product.find({
        $and: [
          { price: { $gte: minPrice, $lte: maxPrice } },
          { productname: { $regex: searchTerm, $options: 'i' } }
        ]
      })
      .exec((err, products) => {
        if (err) return console.error(err);
        res.send({
          message: "Products Filtered Successfully",
          success: true,
          data: products,
        });
      });
    } catch (error) {
      res.send({
        message: error.message,
        success: false,
      });
    }
  });

  //get recently added posts
  router.get("/recentpost", async (req, res) => {
      Product.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .exec((error, products) => {
    if (error) {
      console.error(error);
    } else {
      res.send({
        message: "Recent product fetched successfully",
        success: true,
        data: products,
      });
    }
    
  });
});

//trade route
router.post("/trade", async (req, res) => {
  // try{
    soldproductId = req.body.soldproductId;
    tradedproductId = req.body.tradedproductId;
    const soldproduct = await Product.findOne({_id: soldproductId });
    const tradedproduct = await Product.findOne({_id: tradedproductId });
    const userOfSoldProduct = soldproduct.userId;
    console.log(userOfSoldProduct);
    const userOfTradedProduct = tradedproduct.userId;
    console.log(userOfTradedProduct);

    const transaction = new Transaction({
      soldproductId:soldproductId,
      tradedproductId:tradedproductId,
      userOfSoldProductId:userOfSoldProduct,
      userOfTradedProductId: userOfTradedProduct,
    });
    const result = await transaction.save();
    res.send({
      message: "Transaction added successfully",
      success: true,
      data:result,
    });
  // } catch (error) {
    // res.send({
    //   message: error.message,
    //   success: false,
    //   data: null,

    // })
  // }
  });

  //my trades route(my requests)
  router.post("/myTrades", async (req, res) => {
    try{
      const transactions = await Transaction.find({ userOfTradedProduct: req.body.userOfTradedProductId });
      res.send({
        message: "Transactions fetched successfully",
        success: true,
        data:transactions,
      });
    } catch (error) {

      res.send({
        message: error.message,
        success: false,
        data: null,
      });
    }
    });

    //to get all the pending products
    router.post("/pendingProducts", async (req, res) => {
      try{
        const transactions = await Transaction.find({ status: "pending", userOfSoldProduct: req.body.userOfSoldProductId });
        res.send({
          message: "Transactions fetched successfully",
          success: true,
          data:transactions,
        });
      }
      catch (error) {
        res.send({
          message: error.message,
          success: false,
          data: null,
        });
      }
      });







    //delete transaction
    router.post("/deleteTransaction", async (req, res) => {
      try{
          const transaction = await Transaction.deleteOne({_id:req.body.transactionId});
          res.send({
            message: "Transaction deleted successfully",
            success: true,
          });
        } catch (error) {
          res.send({
            message: error.message,
            success: false,
          });
        }
      });



    //change transaction status to approved
    router.post("/approveTransaction", async (req, res) => {
      try{
        const updatedTransaction = await Transaction.findOneAndUpdate({_id:req.body.transactionId}, {status:"approved"});
        res.send({
          message: "Transaction approved successfully",
          success: true,
        });
      } catch (error) {
        res.send({
          message: error.message,
          success: false,
        });
      }
    });

    //show approved transactions
    router.post("/transactiocomplete", async (req, res) => {
      try{
        const transactions = await Transaction.find({ status: "approved", userOfSoldProduct: req.body.userOfSoldProductId });
        res.send({
          message: "Transactions fetched successfully",
          success: true,
          data:transactions,
        });
      }
      catch (error) {
        res.send({
          message: error.message,
          success: false,
          data: null,
        });
      }
      });
    

//input find userid by email
router.post("/findUserByEmail", async (req, res) => {
  try{
    const user = await User.findOne({ email: req.body.userEmail });
    res.send({
      message: "User fetched successfully",
      success: true,
      data:user._id,
    });
  }
  catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
  });




    


  
module.exports = router;