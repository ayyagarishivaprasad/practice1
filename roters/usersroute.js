const express=require('express');
const userRoute=express();
const userController=require('../controllers/usercontroller');




{
    userRoute.post('/postuser', userController.userPost)
}

{
    userRoute.get('/getusers', userController.getAllUsers)
}


{
    userRoute.get('/getUser/:id', userController.getUser)
}


{
    userRoute.get('/getUserWithTimelinePost/:id', userController.getUserWithTimelinePost)
}









module.exports = userRoute;