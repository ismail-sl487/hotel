const models= require('../models')
const room = models.room
//Room
exports.show=(req,res)=>{
    room.findAll().then(room=>res.send(room)).catch((err)=>res.send(err))
}