const mongoose=require('mongoose');
const { Schema } = mongoose;

const timeLinePostSchme=mongoose.Schema({
    posturl:{type:String},
    postdate:{type:String},
    userfk:{ type: Schema.Types.ObjectId, ref: 'Users' }
});

const timelineModel=mongoose.model('Timeline',timeLinePostSchme);

module.exports=timelineModel