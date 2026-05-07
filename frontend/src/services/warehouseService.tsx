
import type { SendDataType } from "../types/SendDataType"



export const addwarehouse = async(invId: string, formData : SendDataType)=>{

    try{
        const res = await fetch("http://localhost:3000/inventory/warehouse",{
            method : "POST",
            headers :{
                "Content-Type" :"application/json"
            },
            body: JSON.stringify({
                invId,
                warehouse : formData.warehouse[0]
            })
        })
        if(!res.ok){
            throw new Error("request fialed")
        }
        console.log(res.body)
        return await res.json();


    }
    catch(e){
        console.log(e)
    }
}