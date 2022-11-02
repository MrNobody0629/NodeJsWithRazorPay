require('dotenv').config();
const Router = require('express').Router();
const notificationController = require('../controller/notification');

Router.post('/sendNotification',async (req,res) => {
  try {
      console.log("sendNotification body",req.body);
      console.log("sendNotification query",req.query);
      const data = await notificationController.sendNotification();
      res.send({
        status:"success",
        data
      })
  } 
  catch (error) {
      res.send(error)   
  }
}
)

module.exports = Router;
  