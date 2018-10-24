var  express=require("express");

var app=express();

app.get("/",(req,res)=>{
    res.send("hi");
})

app.use(express.static("static"));
app.listen(8008);