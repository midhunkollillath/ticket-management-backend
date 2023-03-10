const screeningModel = require('../model/screening')
const express = require('express')
const moment = require('moment')
const router = express.Router()
router.get('/',async(req,res)=>{
   try{
    const screening = await screeningModel.find()
    res.json(screening)
   }catch(err){
    res.send(err+"error..")
   }

})
router.get('/:id',async(req,res)=>{
    try{
     const screening = await screeningModel.findById(req.params.id)
     res.json(screening)
    }catch(err){
     res.send(err+"error..")
    }
 
 })
router.post('/',async(req,res)=>{
    const addScreening = new screeningModel({
        movie:req.body.movie,
        screen:req.body.screen,
        cancelled:req.body.cancelled,
        startTime: moment(req.body.startTime),
        endTime:moment(req.body.endTime)
    })
    try{
       const myScreening = await addScreening.save()
       res.json(myScreening) 
    }
    catch(err){
        res.send(err+"error..")
    }
    router.delete('/',async(req,res)=>{
        try{
            const screening = await screeningModel.findById(req.params.id)
            const myScreening = await screening.remove()
            res.json(myScreening)

        }
        catch(err){
            res.send(err+'error..')
        }
    })
    
})


module.exports = router