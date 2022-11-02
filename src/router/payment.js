require('dotenv').config();
const Router = require('express').Router();
const paymentController = require('../controller/payment');

Router.post('/order',async (req,res) => {
  try {
    console.log("body",req.body);
    console.log("query",req.query);
    const data = await paymentController.generateOrderId(req)
    res.send({
      status:"success",
      data
    })
  } 
  catch (error) {
    res.send(error)   
  }
}
);

module.exports = Router;
  