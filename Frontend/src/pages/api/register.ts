import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";

export default async function handler(req:any,res:any){
    if(req.method == "POST"){
        dbConnect();
        const {name,email,password} = req.body;
        const user = await User.create({ name, email, password});
        console.log(user);
        res.status(201).json({success:true,data:user});
    }
}