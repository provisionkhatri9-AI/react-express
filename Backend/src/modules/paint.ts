import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
        name: String,


})

const sectionSchema = new mongoose.Schema({
    name : String,
    item : [itemSchema]
    
})

const warehouseSchema = new mongoose.Schema({

    name : String,
    section : [sectionSchema]
    
})

const inventorySchema = new mongoose.Schema({
    warehouse : [warehouseSchema]
})


const inventory= mongoose.model("inventory", inventorySchema)

export default inventory;

