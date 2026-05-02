import {Router} from 'express';

import warehouse from '../modules/paint'



const router = Router();

router.post("/", async(req,res)=>{
    
    try{
    const data = req.body
    const warehouseData = new warehouse(data)
    const saved = await warehouseData.save()

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
        const data = await warehouse.find()
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