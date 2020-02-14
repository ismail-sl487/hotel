const models= require('../models')
const order = models.order
const customer = models.customer
const room = models.room



// Buy

exports.buy=(req,res)=>{
    room.findOne(
        {
            where:{id:req.body.room_id} 
        }
    )
    .then(room => {
        const {
            customer_id,
            tanggal,
            room_id,
            qty_room,
            attachment,
            booking_code
        }= req.body;
        order.create(
            {
                customer_id:customer_id,
                tanggal:tanggal,
                room_id:room_id,
                qty_room:qty_room,
                status:"pending",
                total: room.price * qty_room,
                attachment:attachment,
                booking_code:booking_code
            }
        )
        .then(order=>{
            res.send(
                {
                    message: 'success',
                    order
                }
            )
        })
        .catch((err)=>res.send(err))
    })
    
}



// Show 
exports.show= (req,res)=>{
    order.findAll(
       {
           include :
           [
               {
                   model : customer,
                   as:'customerId'
               },

               {
                   model : room,
                   as:'roomId'
               }
           ]
       } 
    )
    .then(order=>{
        res.send(order)
    })
}