import {Router} from 'express';

import inventory from '../modules/paint'



const router = Router();

router.post("/", async(req,res)=>{
    
    try{
    const data = req.body
    const inventoryData = new inventory(data)
    const saved = await inventoryData.save()

    res.json({
        message: "success",
        data : saved
    })
    }
    catch(e){
        console.log("hello")
    }
    
})

router.get("/",async(req,res)=>{
    try{
        const data = await inventory.find()
        res.json({
            message : "fetched",
            showdata : data
        })
    }
    catch(e){
        console.log(e)
    }
})


export default router;