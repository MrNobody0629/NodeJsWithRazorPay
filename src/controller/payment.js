const Razorpay = require('razorpay');

var instance = new Razorpay(
    {
        key_id: process.env.key_id,
        key_secret: process.env.key_secret,
    }
);


const generateOrderId = (req) => {
    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_"+new Date().getTime()
      };
      const data = instance.orders.create(options);
      return (data.then((data)=>{
        return data;
      }))
}

module.exports = {
    generateOrderId
};
