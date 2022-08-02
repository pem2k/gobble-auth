const express = require('express');
const router = express.Router();
const {Location, Trip, Traveller} = require('../../models');

router.get('/',(req,res)=>{
    Traveller.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"uh oh spagettios!",err})
    })
})

router.get("/:id",(req,res)=>{
    Traveller.findByPk(req.params.id,{
        include:[{
            model:Trip,
            include:[Location]
        }]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"uh oh spagettios!",err})
    })
})

router.post("/",(req,res)=>{
    Traveller.create({
        name:req.body.name,
        email:req.body.email
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"uh oh spagettios!",err})
    })
})

router.delete("/:id",(req,res)=>{
    Traveller.destroy({
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