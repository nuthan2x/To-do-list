const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const time =require(__dirname + "/time.js");




app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var newww = [];


app.get("/",function(req,res){

    var week = [ "sun","mon","tues","wednes","thurs","fri","satur"]
    var now = new Date();
    var rep = now.getDay();
    var today1 = week[rep];
    
    var today = new Date();
    var date = today.getDate();
    var monarr = ["jan","feb","mar","aprl","may","june","july","aug","sep","oct","nov","dec"]
    var mon = monarr[today.getMonth()];
    var year = today.getFullYear();

    var datee = date + "-" + mon + "-" + year;

  
    var times1 = time.times1();
    
        res.render('list', {dayss: today1 , timess : times1 , DATEE: datee, NEWW: newww });
        
      
});


app.post("/",function(req,res){
    var neww =  req.body.new;

    newww.push(neww);
    

    res.redirect("/");
  });

  var x  = newww;


app.post("/x",function(req,res){
    x.pop();
    res.redirect("/");

    
})
  


app.listen(process.env.PORT,function(){ console.log("server is live.")});