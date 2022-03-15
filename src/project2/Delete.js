import React, { useEffect, useState } from 'react'

const Delete = () => {
    const url='https://api.github.com/users';
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState([]);

    const fetchData= async ()=>{
        setLoading(true);
        try{
            const response = await fetch(url);
            const user = await response.json();
            setUser(user)
            setLoading(false)
            console.log(user);
        }
        catch(error){
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const deleteHandler=(id,name)=>{
        var filtereData=user.filter((curr)=>curr.id !== id)
        setUser(filtereData);
        alert(`successfully deleted - ${name} `);
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
            {user.map((ele)=>{
                return(

                    <div className="card" style={{"width":" 18rem"}} key={ele.id} >
                        <img className="card-img-top" src={ele.avatar_url} alt="cap" />
                        <div className="card-body">
                            <h5 className="card-title">{ele.login}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="btn btn-danger" onClick={()=>deleteHandler(ele.id,ele.login)}  >Delete {ele.login}</div>
                        </div>
                    </div>

                )
            })}
    </>
)


}

export default Delete