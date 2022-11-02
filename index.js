require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path');
const paymentRoute = require('./src/router/payment');
const notificationRoute = require('./src/router/notification');
const port = process.env.PORT || 2000
// app.use(express.json())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("js"));

app.use('/payment',paymentRoute)
app.use('/notification',notificationRoute)

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/index', (req, res) => res.sendFile(path.join(__dirname+'/src/UI/html/checkout.html')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))