const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    soldproductId: {
        type:String,
        required: true,
    },
    tradedproductId: {
        type:String,
        required: true,
    },
    userOfSoldProductId:{
        type:String,
        required: true,
    },
    userOfTradedProductId:{
        type:String,
        required: true,
    },
    status:{
        type:String,
        default:"pending",
    }

},
{
    timestamps: true,
}
)

module.exports = mongoose.model("transaction", transactionSchema);