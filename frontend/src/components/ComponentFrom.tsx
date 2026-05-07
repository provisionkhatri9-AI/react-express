import type { SendDataType } from "../types/SendDataType"
import type { InvId } from "../types/SendDataType"
import { addwarehouse } from "../services/warehouseService"

import { FormItem } from "./Form"



const handleClick = async(invId : string,formData:SendDataType)=>{
            console.log(formData)
            await addwarehouse(invId ,formData )
        }

export function ComponentForm({invId}: InvId){
    

    return(
        <div>
            {
                   
                    <FormItem onSubmit={(data)=>handleClick(invId,data)}></FormItem>
            }
        </div>
    )
}

