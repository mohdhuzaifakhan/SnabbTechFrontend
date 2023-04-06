require('./mongoose');
const User = require('./model');
const express = require('express');
const app= express();

const bodyparser = require('body-parser');
const cors =  require('cors');


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.use(cors())

app.post('/register',(req,res)=>{
    
    console.log(req.body);
    const user = new User({
        id : "",
        Name : req.body.Name,
        email : req.body.email,
        phone_number : req.body.phone_number,
        password : req.body.password
    })
    console.log(user);

    user.save().then(()=>{
        res.send({msg:"User register successfully",status:200});
    }).catch(err=>{
        res.send({msg:err.message,status:500});
    })
})

app.get('/login',(req,res)=>{
    const {email , password} = req.query;
    console.log(email,password);
   if(email !=  null && password != null){
      console.log(req.query)
    User.findOne({email,password}).then((response)=>{
        res.send({msg:"Login successfully",data:response,status:200})
    }).catch((err)=>{
        res.send({msg:err.message,status:500});
    })

   }else{
     console.log("data not found")
     res.send({msg:"data can not be empty"})
     
   }

})





app.listen(5000,()=>{
    console.log("server is running on port 5000");
})
    

