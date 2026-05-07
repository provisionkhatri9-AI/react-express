import { useState } from "react";
import type { SendDataType } from "../types/SendDataType";


type FormDataTypeHandle = {
    onSubmit : (data:SendDataType)=>void
}



export function FormItem({onSubmit} : FormDataTypeHandle){
    const[formData,setFormData] = useState<SendDataType>({
        
        warehouse : [{
          
            name : "",
            section:[{
              
                name : "",
                item : [{
                  
                    name :""
                }]

            }]
        }]
    })

    
    return(
        <div>
            <h1>Inventory Form:</h1>
            <p>Warehouse Name:</p> 
            <input type="text"
                value={formData.warehouse[0].name}
                onChange={(e)=>{
                    setFormData({...formData,
                        warehouse: [{
                        ...formData.warehouse[0],
                        name : e.target.value
                    }]})

                    }
                }
            />

            <p>Section:</p>
            <input type="text"
            value={formData.warehouse[0].section[0].name}
            onChange={
                (e)=>{
                    setFormData({...formData,
                    warehouse: [{
                        ...formData.warehouse[0],
                        section : [{
                            ...formData.warehouse[0].section[0],
                            name: e.target.value
                        }]
                    }]}) 
                }
            }
            />
            <p>Item type:</p>
            <input type="text"
            value={formData.warehouse[0].section[0].item[0].name}
            onChange={
                (e)=>{
                    setFormData({...formData,
                    warehouse: [{
                        ...formData.warehouse[0],
                        section : [{
                            ...formData.warehouse[0].section[0],
                            item :[{
                                ...formData.warehouse[0].section[0].item[0],
                                name: e.target.value
                            }]
                        }]
                    }]}) 
                }
            }
            />
            <button onClick={()=>onSubmit(formData)}>Send</button>
        </div>
    )
}

