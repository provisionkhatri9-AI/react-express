type itemTypeData = {
   
    name : string;
}

export type sectionTypeData ={
  
    name :string;
    item : itemTypeData[]
}

type warehouseDataType = {
   
    name : string;
    section : sectionTypeData[]

}

export type SendDataType= {

    warehouse :[warehouseDataType]
}