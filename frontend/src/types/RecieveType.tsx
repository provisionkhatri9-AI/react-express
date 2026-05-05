type itemType ={
    _id : string;
    name : string;
}

type sectionType ={
    _id : string;
    name : string;
    item : itemType[]
}

type warehouseType ={
    _id : string;
    name :string;
    section : sectionType[]
}


export type RecieveType ={
    _id : string;
    warehouse : warehouseType[]
}