import { useState,useEffect } from "react"
import {Section} from './Section'
import './warehouse.css'
// import { Colorlist } from "./Colorlist";
import { ComponentForm } from "./ComponentFrom";

import type { sectionTypeData } from "../types/SendDataType";
import { praarr } from "./arr"
import type { RecieveType } from "../types/RecieveType";

export function Warehouse (){
    

    const [fetchedData,setFetchedData] = useState<RecieveType[] | null>(null)
    useEffect(()=>{
        fetch("http://localhost:3000/inventory")
        .then((res)=> res.json())
        .then((data)=>{

            setFetchedData(data.showdata)
        })
    },[])
    console.log(fetchedData)

    const [open,setOpen] = useState<string>();
    const[openForm, setOpenForm] = useState<string>();

    const [sectionInfo, setSectionInfo] = useState<sectionTypeData[]>([])

    const [warehouseCounter, setWarehouseCounter] = useState<string>()


    

    praarr();

    console.log(warehouseCounter)
    // console.log(sectionInfo);
    
    return(
        <div>
            <div className="warehouse-format">
                {
                    fetchedData?.map((inv,i)=>{

                        return(
                            <div key={i} onClick={()=>{
                                const selected = inv.warehouse[i]
                                setWarehouseCounter(selected._id)
                                setSectionInfo(selected.section)
                                setOpen(selected._id)
                            }
                                }  className="warehouse-format1">
                            {
                            inv.warehouse.map((w,j)=>(
                                <div key={j}>
                                    <div>
                                        <p>{w.name}</p></div>
                                    
                                    

                                </div>
                                
                                
                            ))
                            }
                        </div>
                        )
                    })
                }

                <div className="insert-button-plus" onClick={()=>{setOpenForm(warehouseCounter)}}>
                    +
                </div>
            </div>

            <div>
                <ComponentForm  openForm={openForm}></ComponentForm>
                
            </div>
            
            <div>
                {
                    open == warehouseCounter &&
                    <div>
                        Add Section 
                         <div className="insert-button-plus">
                            +
                        </div>
                        
                        <div>
                            {
                            sectionInfo.map((sec,k)=>(
                            <Section key={k} sect={sec}></Section>
                            ))
                            }
                        </div>
                    </div>
                } 

            </div>
           

        </div>
    )

}