const express = require('express')
const app = express()

app.use(function(req,res,next){
    if(new Date().getHours()>17||new Date().getHours()<9){
        res.render('closed.ejs')
    }
    else{next()}
})


app.get('/',function(req,res){
    res.render('index.ejs')
})

app.get('/about',function(req,res){
    res.render('about.ejs')
})

app.get('/contact',function(req,res){
    res.render('contact.ejs')
})

app.listen(8000,()=>console.log('Server running on port 8000'))