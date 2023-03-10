const bookingModel = require('../model/booking')
const express = require('express')
const  router = express.Router()

router.get('/',async(req,res)=>{
    try{
        const booking = await bookingModel.find()
        res.json(booking)
    }
    catch(err){
        res.send(err+"error..")
    }
})
router.post('/',async (req,res)=>{
    const addBooking = new bookingModel({
        name:req.body.name,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email,
        seatsSelected:req.body.seatsSelected
    })
    try{
        const myBooking = await addBooking.save()
        res.json(myBooking)
    }
    catch(err){
        res.send(err+'error...')
    }
})
    router.get('/:id',async(req,res)=>{
        try{
            const booking = await bookingModel.findById(req.params.id)
            res.json(booking)

        }
        catch(err){
            res.send(err)
        }
    })
    router.delete('/:id',async(req,res)=>{
       try{
        const booking = await bookingModel.findById(req.params.id)
        const addBooking = await booking.remove()
        res.json(addBooking)

       } 
       catch(err){
        res.send(err)
       }
    })
   
module.exports = router