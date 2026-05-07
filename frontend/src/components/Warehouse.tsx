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

            setFetchedData(data.creadted)
        })
    },[])
    console.log(fetchedData)

    const [open,setOpen] = useState<string>("");
    const[openForm, setOpenForm] = useState<string>("");

    const [sectionInfo, setSectionInfo] = useState<sectionTypeData[]>([])

    const [warehouseCounter, setWarehouseCounter] = useState<string>("")

    const [invId, setInvId] = useState<string>("")

    useEffect(() => {
        if(fetchedData && fetchedData.length>0){
            setInvId(fetchedData[0]._id)
        }
        
    
    }, [fetchedData]);

    useEffect(()=>{
        if (invId){
        console.log("true")
        console.log(invId)
    }
    },[invId])
    
    

        return(
        <div>
            <div className="warehouse-format">
               {
                fetchedData?.map((inv,i)=>{
                    return(
                        <div key={i} className="warehouse-format1">
                            {
                                inv.warehouse.map((ware,j)=>{
                        return(
                            <div key={j} className="ware-name-div"
                            onClick={()=>{
                                setWarehouseCounter(ware._id)
                                setSectionInfo(ware.section)
                                setOpen(ware._id)
                            }}>
                                <div className="ware-name-div2">
                                    {ware.name}
                                </div>
                            </div>
                        )
                    })
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
                <ComponentForm  invId={invId}></ComponentForm>
                
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