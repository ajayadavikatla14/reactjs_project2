import React, { useState } from "react";
import menu from "./data";
import PrintData from "./PrintData";
import Select from "./Select";

let cat=['All',... new Set(menu.map((ele)=>ele.category))];

const Api=()=>{
    var [data,setData]=useState(menu);
    const [categories,setCategories]=useState(cat);
    console.log(categories);

    const filteredData=(category)=>{
       
        console.log(category);
        if(category==='All'){
            setData(menu);
            return;
        }
        const newData= menu.filter((item)=> item.category === category )
        setData(newData);
    }

    return(
        <>
            <div>
                <h1 className="card-title"> Our Orders </h1>

                <Select  filteredData={filteredData} categories={categories} />
                <PrintData items={data} />
            
            </div>
        </>
    )
}

export default Api;