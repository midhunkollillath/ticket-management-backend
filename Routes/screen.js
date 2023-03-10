const screenModel = require('../model/screen')
const express = require('express')

const router = express.Router()

router.get ('/',async(req,res)=>{
    try{
        const screen = await screenModel.find()
        res.json(screen);
    }
    catch(err){
        res.send(err+ "error..")
    }
})
router.post('/', async(req,res)=>{
        console.log(req.body.rows)
       const addScreen = new screenModel({
         screenNumber:req.body.screenNumber,
        rows: req.body.rows
       })
       try{
        const myScreen = await addScreen.save()
        res.json(myScreen)
       }

    catch(err){
        res.send(err+ "error..")
    }
    
})
router.get('/:id',async(req,res)=>{
    try{const screen = await screenModel.findById(req.params.id)
    res.json(screen);
    }
    catch(err){
        res.send(err+'error')
    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const screen = await screenModel.findById(req.params.id)
        const addScreen = await screen.remove()
        res.json(addScreen)

    }
    catch(err){
        res.send(err+"error..")
    }
})
module.exports = router
