const express = require('express');
const router = express.Router();
const {Location, Trip, Traveller} = require('../../models');

router.get('/',(req,res)=>{
    Location.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"uh oh spagettios!",err})
    })
})

router.get("/:id",(req,res)=>{
    Location.findByPk(req.params.id,{
        include:[{
            model:Trip,
            include:[Traveller]
        }]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"uh oh spagettios!",err})
    })
})

router.post("/",(req,res)=>{
    Location.create({
        location_name:req.body.location_name
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"uh oh spagettios!",err})
    })
})

router.delete("/:id",(req,res)=>{
    Location.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"uh oh spagettios!",err})
    })
})

module.exports = router;