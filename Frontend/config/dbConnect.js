import mongoose from "mongoose";

const dbConnect = ()=>{
    if(mongoose.connections[0].readyState){
        console.log("Already Connected");
        return;
    }

    mongoose.connect(process.env.DB_URI);

}

export default dbConnect;