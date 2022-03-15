import React, { useState } from 'react';
import {FaPlusSquare,FaMinusSquare} from 'react-icons/fa';

const Back = ({q,a}) => {
    const [toggle,setToggle]=useState(false);
    const card_style={
        width:'70%',
        margin:'auto',
        marginTop:'1rem',
        position:'relative',
    }
    const div_style={
        'display':'flex','position':'absolute','marginLeft':'63rem',marginTop:'1rem',
    }
  return (
    <>
        <div className="card" style={card_style}>
                        <div style={div_style}>
                        
                        <div className="box"><button className='btn' onClick={()=>setToggle(!toggle)} >
                        { toggle ? <FaMinusSquare /> : <FaPlusSquare /> }</button></div>
                        

                        </div> 
                            <div className="card-body">
                                <h4>{q}</h4>
                                { toggle ? <p>{a}</p>
                                : null
                                }
                                
                            </div>
                        </div>
    </>
  )
}

export default Back