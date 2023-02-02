const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const dbConfig = require('./config/dbConfig');
app.use(cors());
app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const authRoute = require("./routes/authRoute");



app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);


if(process.env.NODE_ENV === "production")
{
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    });
}


app.listen(port,() =>console.log(`Node server listening on port ${port}`));