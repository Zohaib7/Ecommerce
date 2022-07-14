const express= require ("express")
const app=express();
const cors = require('cors')
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const cartRoute=require("./routes/cart");
const orderRoute=require("./routes/order");


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DBConnection Sucessful'))
.catch((error)=>{console.log(error)});

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/orders",orderRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend is running");
});