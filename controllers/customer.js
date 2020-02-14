const models= require('../models')
const customer = models.customer
const order = models.order


exports.show=(req,res)=>{
    customer.findAll().then(customer=>res.send(customer)).catch((err)=>res.send(err))
}

exports.buy=(req,res)=>{
    order.create(req.body).then(order=>{
        res.send(
            {
                message: 'success',
                order
            }
        )
    })
}