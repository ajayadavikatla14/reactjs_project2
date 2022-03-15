import React, { useState } from 'react';
import Back from './Back';
import data from './data';

const Main=()=>{
    const [question,setQuestion]=useState(data);
    console.log(question);
    return(
        <>
        <div className="total" style={{'marginTop':'5rem'}}>
            {
                
                question.map((ele)=>{
                   return(
                       <div key={ele.id}><Back {...ele} /></div>
                   )
                })
            }
        </div>
        </>
    )
}

export default Main