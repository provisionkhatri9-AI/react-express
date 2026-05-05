import type { FormDataType } from "../types/SendDataType"

export const addwarehouse = async(formData : FormDataType)=>{

    try{
        const res = await fetch("http://localhost:3000/inventory",{
            method : "POST",
            headers :{
                "Content-Type" :"application/json"
            },
            body: JSON.stringify(formData)
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