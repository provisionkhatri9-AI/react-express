import mongoose from "mongoose";

// const itemSchema = new mongoose.Schema({
//         name: String,


// })

// const sectionSchenma = new mongoose.Schema({
//     name : String,
//     items : [itemSchema]
    
// })

const warehouseSchema = new mongoose.Schema({

    warehouseName : String,
    section : String,
    itemType : String
    
})


const warehouse= mongoose.model("warehouse", warehouseSchema)

export default warehouse

