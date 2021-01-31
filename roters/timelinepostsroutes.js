const express=require('express');
const timelineRoute=express();
const timelineController=require('../controllers/timelinepostcontroller');




{
    timelineRoute.post('/posttimeline', timelineController.timelinePost)
}








module.exports = timelineRoute;