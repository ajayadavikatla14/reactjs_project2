import React from 'react'

const Select = ({filteredData,categories}) => {
  return (
    <>
       {
           categories.map((val,index)=>{
              return <button className='btn btn-danger' key={index} onClick={()=>filteredData(val)} style={{'marginLeft':'1rem'}} >{val}</button>
           })
       }
    </>
  )
}

export default Select