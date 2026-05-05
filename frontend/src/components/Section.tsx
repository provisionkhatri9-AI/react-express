import { useState } from 'react'
import './section.css'

import type{ sectionTypeData } from '../types/SendDataType';

type sectionField = {
    sect : sectionTypeData
}


export function Section({sect} : sectionField){

    

    return(
        <div className="section-format">
            <div className="section-div-format">
                {sect.name} 
            </div>

            
        </div>
    )
}