import type { SendDataType } from "../types/SendDataType"
import { addwarehouse } from "../services/warehouseService"

import { FormItem } from "./Form"


type SectionClick= {
    openForm?:string
}

export function ComponentForm({openForm}: SectionClick){
    const handleClick = async(formData:SendDataType)=>{
            console.log(formData)
            await addwarehouse(formData )
        }

    return(
        <div>
            {
                   
                    <FormItem onSubmit={handleClick}></FormItem>
            }
        </div>
    )
}