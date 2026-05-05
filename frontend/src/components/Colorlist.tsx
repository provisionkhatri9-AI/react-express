// import { useState } from "react";

// import './colorList.css'


// type warehouseProps = {
//     closeinformation : ()=> void;
// }

// export function Colorlist(){

//     const [openBase,setOpenBase] = useState<boolean>(false);

//     const [openCard,setOpenCard] = useState<boolean>(false);
//     return(

//         <div className='paint-display-section'>
//             <div  className="cross-close">X</div>
                            
//             <div>
//                 Choice you want:
//             </div>
//             <div>
//                 <input type="checkbox"  /> Base
//             </div>

//             <div className="seperate-info-details">
//                 <div>
//                     <div onClick={()=> setOpenCard(!openCard)}>
//                         <h1>Weather Coat All Guard</h1>

//                         <div>
//                         {
//                             openBase &&
//                             <div>
//                                 <p>P0</p>
//                             </div>
//                         }
//                     </div>
//                     </div>
                    

//                 </div>

//                 <div>
//                     {
//                         openCard && 
//                         <div>
//                             helllo
//                         </div>
//                     }
//                 </div>
//             </div>
//         </div> 
//     )
// }