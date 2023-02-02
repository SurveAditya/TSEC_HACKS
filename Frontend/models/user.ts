import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name :String,
    email :{
        type:String,
        required:true,
        unique:true,
    },
    password :String,
    phoneNumber :String,
    city :String,
    
});
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = bcrypt.hash(this.password, 10);
    
});
// userSchema.methods.toJSON = function () {
//     const user = this;
//     const userObject = user.toObject();
//     delete userObject.password;
//     return userObject;
// };


// module.exports =mongoose.model('User', userSchema); 
export default mongoose.models.User || mongoose.model("User", userSchema);