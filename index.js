const express = require('express')
app = express()
const ejs = require("ejs")
app.set("view engine", 'ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));

student = [];

app.get("/",(req, res)=>{    
    res.render("index"); 
  });


app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/todo',(req,res)=>{ 
    var good = {fname:req.body.firstname,lname:req.body.lastname};
    var go = student.push(good);
    res.redirect('/')
});

app.post("/delete",(req,res)=>{
    var id = req.body.uniqueId;
    var found = student.filter((value,index)=>(id !=index))
    if(found){
        student = found;
    }
    res.redirect('/')
})





app.listen(5000,()=>{
    console.log(`app is listen on post 5000`)
})