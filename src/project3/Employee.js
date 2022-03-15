import React, { useEffect, useState } from 'react';

const Employee=()=>{
    const url='https://api.github.com/users';
    var [index,setIndex]=useState(0);
    var [loading,setLoading]=useState(true);
    const [user,setUser]=useState([]);
    // const [presnt,setpresent]=useState()
    const getDatails= async ()=>{
        setLoading(true);
        try{
            const response=await fetch(url);
            const user=await response.json();
            setUser(user);
            setLoading(false)
            console.log(user);
            }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getDatails();
    },[])

    const prevdata=(index)=>{
        if(index<1){
             setIndex(5)
             console.log(index);
             return;
        }
         setIndex(index-1);
    }

    const nextData=(index)=>{
        if(index>4){
          setIndex(0)
          console.log(index);
          return;
        }
        setIndex(index+1);
    }

    if(loading){
        return(
            <>
                  <h1>Loading data........</h1>
            </>
        )
    }

    return(
        <>
            <div className="total" style={{'width':'25rem', margin:'auto', marginTop:'10rem'  , textAlign:'center'}}>
                <div className="card" >
                <img className="card-img-top" src={user[index].avatar_url} alt="" width='50px' height='200px'  />
                <div className="card-body">
                    <h5 className="card-title">{user[index].login}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn btn-primary' onClick={()=>prevdata(index)}  >prev </button>&nbsp;&nbsp;
                    <button className='btn btn-primary' onClick={()=>nextData(index)} >next </button>
                </div>
                </div>  
            </div>
        </>
    )
}

export default Employee;