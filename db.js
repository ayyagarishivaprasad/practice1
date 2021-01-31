//mongodb+srv://shivashashix2:<password>@cluster0.aqndp.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongose=require('mongoose');

var mongoosedb=mongose.connect('mongodb+srv://shivashashix2:shivashashix2@cluster0.aqndp.mongodb.net/test?retryWrites=true&w=majority');

module.exports=mongoosedb;


