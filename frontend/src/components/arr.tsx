export function praarr(){
    const hellp = [{
    warehouse : [{
        id :1,
        name : "warehouse1",
        section : [{
            id : 1,
            name : "section1"
        },
    ]
    },
    {
            id :2,
            name : "warehouse2",
            section : [{
                id :1,
                name : "section1"
            }]
        }
]
}
]


function printall(){
    hellp.map((inv,i )=>{
        console.log(inv.warehouse);
    })
}
printall()
}