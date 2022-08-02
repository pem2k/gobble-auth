const express = require('express');
const router = express.Router();
const {Location, Trip, Traveller} = require('../../models');

router.post("/",(req,res)=>{
    Trip.create({
        trip_budget:req.body.trip_budget,
        traveller_amount:req.body.traveller_amount,
        LocationId:req.body.LocationId,
        TravellerId:req.body.TravellerId
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"uh oh spagettios!",err})
    })
})

router.delete("/:id",(req,res)=>{
    Trip.destroy({
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