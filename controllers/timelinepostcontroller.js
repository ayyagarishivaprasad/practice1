const User=require('../models/users');
var ObjectID = require('mongodb').ObjectID;

const Timeline=require('../models/timelinepostmodel');

const db=require('../db');
async function timelinePost(req,res){
console.log(req.body)

    var postTimeLine= await new Timeline({
        posturl:req.body.url,
        postdate:new Date(),
        userfk:req.body.userid
    });
    postTimeLine.save().then(async (data)=>{
        console.log("data",data)

        var postUser= await new User({
        });
       

        // User.updateOne(
        //     { "_id": ObjectID(req.body.userid)}, 
        //     {"timelineposts": data._id },
        //     {multi:true}, 
        //      )


         await    User.updateOne({ "_id": ObjectID(req.body.userid)}, {$push: {timelineposts:data._id }})
        //  await postUser.updateOne( { "timelineposts": data._id } , { _id: "5f7c3e0976e0405e90cd3c57" })
        // postUser.updateOne({ "_id": ObjectID(req.body.userid)},{$addToSet:{timelineposts:data._id}}
           
        
          
            
        //   )
    //   await  User.updateMany(
    //         { _id: req.body.userid }, 
    //         { "$push": { "timelineposts": data._id } },
           
    //     )
        .then((data)=>{
            console.log(data)
            res.send(data);
        }).catch((err)=>{
            res.send(err);
        });

        
    }).catch((err)=>{
        console.log(err)
    });

}








module.exports={timelinePost}