const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productname: {
        type:String,
        required: true,
    },
    userId:{
        type:String,
        required: true,
    },
    range:{
        type:Array,
        required: true,
    },
    images:{
        type:Array,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    category: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
    }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model("products", productSchema);