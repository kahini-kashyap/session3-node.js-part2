const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/home.html");
});

app.get("/number/:num", function(req,res){
    let temp = parseInt(req.params.num);
    if(temp % 2 == 0){
        res.json({
            message:"The number " + temp + " is even"
        })
    }
    else{
        res.json({
            message:"The number " + temp + " is odd"
        })
    }
})

app.listen(3000, function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("Server is running");
        }
});
