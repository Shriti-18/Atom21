
var express = require('express'),
    bodyParser=require('body-parser'),
    mongoose = require('mongoose'),
    ejs=require('ejs'),
    app=express(),
    port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/isession',{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
});
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error"));
db.once('open',()=>{
    console.log('database Connected');
})


app.get('/',(req,res)=>{
    res.send('Working');
})

app.listen(3000,()=>{
    console.log('App is running at port 3000');
})