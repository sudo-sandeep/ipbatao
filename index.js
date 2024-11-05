import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.json({limit:"16kb"}))
app.use(cors());

app.get('/',(req,res)=>{
    const ip1 = req.ip;
    const ip2 = req.headers['x-forwarded-for'];
    const ip3 = req.connection.remoteAddress;
    console.log(ip1,ip2,ip3)
    res.status(200).json({message:"Working!",success:true,data:{
        working:"Testing"
    }})
})

app.get('*',(_,res)=>{
    res.status(404).json({message:"Page not found!",success:false,data:null})
})

app.listen(8080,()=>{
    console.log("server is up and running at : http://localhost:8080")
})
