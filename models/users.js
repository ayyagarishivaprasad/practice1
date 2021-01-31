const mongoose=require('mongoose');
const { Schema } = mongoose;
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String},
    mobile:{type:String},
    timelineposts:[{ type: Schema.Types.ObjectId, ref: 'Timeline' }]
})

const userModel=mongoose.model('Users',userSchema);

module.exports=userModel;
