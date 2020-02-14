const express   = require('express')
const bodyParse = require('body-parser')
                  require('express-group-routes')
const cors      = require('cors')
const app       = express()
const port      = 5000

app.use(cors())
app.use(bodyParse.json())


// controller
const  customerController   = require('./controllers/customer')
const  roomController       = require('./controllers/room')
const  orderController      = require('./controllers/order')
const paymentController     = require('./controllers/payment')


// group
app.group("/hotel/v1",(router)=>{
    //Customer
    router.get('/customers',customerController.show)
    
    //Room
    router.get('/room',roomController.show)

    // Order
    router.post('/order',orderController.buy)
    router.get('/order',orderController.show)
    
    //Attachment
    router.patch('/order/:id/payment',paymentController.attachment)

    // Check-in
    router.patch('/checkin',paymentController.checkin)

})


// lister port
app.listen(port,()=>console.log(`listening port ${port}!`));

