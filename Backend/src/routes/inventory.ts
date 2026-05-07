import {Router} from 'express';

import Inventory from '../modules/paint'



const router = Router();

router.get("/", async(req,res)=>{
    try{
        let inventory = await Inventory.find();

        if(inventory.length == 0){
            
           const newInventory = await Inventory.create({
                 warehouse : []
                        
            })

           inventory = [newInventory]
            
        }


        return res.json({
            "creadted" : inventory
        })
    }
    catch(e){
        console.log(e)
    }
})



router.post("/warehouse", async(req,res)=>{
    
    try{
        console.log(req.body)
    
    const {invId, warehouse} = req.body
    const update = await Inventory.findByIdAndUpdate(
        invId,
        {
            $push : {warehouse}
        },
        {new :true}

    ) 

    res.json({
        message: "success",
        data : update
    })
    }
    catch(e){
        console.log("hello")
    }
    
})


export default router;