// @ts-nocheck
import NextAuth  from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/user"
import bcrypt from "bcryptjs";
import dbConnect from "config/dbConnect";
export default NextAuth({
    // Configure one or more authentication providers
    session :{
        strategy:'jwt'
    },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
        ,
        CredentialsProvider({
            async authorize(credentials,req) {
                dbConnect();

                const {email,password} = credentials;
                console.log(email,password);
                
                const user = await User.findOne({email});
                if(!user){
                    throw new Error("No user found");
                }
                const isValidPass = await bcrypt.compare(password,user.password); 
                if(!isValidPass){
                    throw new Error("Invalid password");
                }
                return user;

            }
        })

      ],
      secret: process.env.NEXTAUTH_SECRET,
      pages: {
        signIn: '/login',
        },

});