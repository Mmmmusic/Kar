var  express=require("express");

var app=express();

app.get("/getData",(req,res)=>{
    res.send("hello");
})

app.use(express.static("static"));
app.listen(8009);