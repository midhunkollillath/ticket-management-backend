const movieModel= require('../model/movie')


const express = require('express')  
const { Router } = require('express')
const router = express.Router()

router.get('/',async (req,res)=>{
    try{
       const movies = await movieModel.find() 
       res.json(movies);

    }
    catch(err){
        res.send(err+ "error..")
    }
})
router.post('/',async(req,res)=>{
    const addMovies = new movieModel({
        name:req.body.name,
        duration:req.body.duration,
        image:req.body.image,
        director:req.body.director,
        cast:req.body.cast,
        summary:req.body.summary
    })
    try{
        const myMovies = await addMovies.save()
        res.json(myMovies)
    }
    catch(err){
        res.send(err +"error..")
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const movie = await movieModel.findById(req.params.id)
        res.json(movie)
    }
    catch(err){
        res.send(err+'error')
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const movie=await movieModel.findById(req.params.id)
        const myMovies = await movieModel.remove()
        res.json(myMovies)
        
    }
    catch(err){
        res.send(err+"error..")
    }
})
module.exports = router


