const models= require('../models')
const order = models.order
const customer = models.customer
const room = models.room

// Attachment
exports.attachment=(req,res)=>{
    
    order.update(
        
        {
            status:'confirmed',
            attachment:'confirmed',
            booking_code:random()
        },
        {
            where:{
                customer_id:req.params.id
            }
        }
    )
    .then(attachment=>{
        res.send(
            {
                message:"success",
                attachment
            }
        )
    })
    .catch((err)=>res.send(err))
           
}
    function random() {
            let text= 0; 
            text +=Math.floor(Math.random() * 10000000000);

            return text;
    }
    console.log(random());



    // Check Booking Id

    exports.checkin=(req,res)=> {
        const booking_code =req.body.booking_code
        const customer_id = req.body.customer_id
        
        order.findOne({where : {booking_code,customer_id}})
        .then(check=>
            {
                if(check){
                    
                    res.send({
                        message:'Welcome',
                        check
                        
                    })
                }
                else{
                    res.send({
                        error:true,
                        message:'wrong!!'

                    })
                }
            }
        )
        .then(()=>order.update(
                {
                    status:'Approved'
                },
                {
                    where:{
                        customer_id:customer_id
                    }
                }
            )
        )
        .catch((err)=>res.send(err))
    }