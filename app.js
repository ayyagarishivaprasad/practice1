//npm install express body-parser bluebird sequelize morgan jsonwebtoken validator mongoose mongodb
const express=require('express');
var app = express();
const port=process.env.PORT||3400;
// const sequelizedb=require('./db');
// const praticeRoute=require('./routes/test');
var mongo = require('mongodb');

//shiva
var userRoute1 = require('./roters/usersroute');

 var userRoute = require('./roters/usersroute');

 var timelineRoute = require('./roters/timelinepostsroutes');
 const db=require('./db');
 const mongose=require('mongoose');

 var mongoosedb=mongose.connect('mongodb+srv://shivashashix2:shivashashix2@cluster0.aqndp.mongodb.net/test?retryWrites=true&w=majority');
 
//  module.exports=mongoosedb;
 
 mongoosedb.then((data)=>{
     console.log("database connected")
 }).catch((err)=>{console.log(err)})
var bodyparser = require('body-parser');
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Cache-Control,Pragma,Origin,Authorization,Content-Type,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "*");
    return next();
});
app.use(bodyparser.json({ limit: '30mb' }));
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }));

 app.use('/userRoute',userRoute);

 app.use('/timelineRoute',timelineRoute);
// app.use('/practice',praticeRoute)


app.listen(port,(err,res)=>{
if(err){
    console.log("server not started")
}else{
    console.log("server started");


}
 
});



