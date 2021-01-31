const User=require('../models/users');
const Timeline=require('../models/timelinepostmodel');










const mongoose = require('mongoose');
const Schema = mongoose.Schema;








const db=require('../db');
async function userPost(req,res){

  console.log('post')
    var postUser= await new User({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        gender:req.body.gender,
        mobile:req.body.mobile
    });
    postUser.save().then((data)=>{
        console.log("data",data)
    }).catch((err)=>{
        console.log(err)
    });

}

function getAllUsers(req,res){
    User.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
}

function getUser(req,res){
    User.findById({_id:req.params.id}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
}




async function getUserWithTimelinePost(req,res){



//    await Timeline.find().populate().then((data)=>{
//       console.log(data)
//     }).catch((err)=>{
//         res.send(err)
//     })

// {path:'usersposts',model:'Posts'}

    User.findOne({_id:req.params.id}).populate({path:'timelineposts',model:'Timeline'}).then((data)=>{
                res.send(data)
            }).catch((err)=>{
                res.send(err)
            })


// Timeline.findOne({_id:req.params.id}).populate('userfk').then((data)=>{
//         res.send(data)
//     }).catch((err)=>{
//         res.send(err)
//     })


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const personSchema = Schema({
//   _id: Schema.Types.ObjectId,
//   name: String,
//   age: Number,
//   stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

// const storySchema = Schema({
//   author: { type: Schema.Types.ObjectId, ref: 'Person' },
//   title: String,
//   fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
// });

// const Story = mongoose.model('Story', storySchema);
// const Person = mongoose.model('Person', personSchema);



// const author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
//   });









//   Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The storys is %s', story);
//     // prints "The author is Ian Fleming"
//   });

//   Person.
//   findOne({ age: 50 }).
//   populate('_id').
//   exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The author is %s', story);
//     // prints "The author is Ian Fleming"
//   });



}






module.exports={userPost,getAllUsers,getUser,getUserWithTimelinePost}