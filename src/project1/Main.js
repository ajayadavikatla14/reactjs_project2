import React, { useEffect, useState } from 'react'

const Main = () => {

    const [loading,setLoading]=useState(true);

    const url='https://api.github.com/users';
    const [people,setPeople]=useState([]);
    
    const fetchPeople= async () =>{
        setLoading(true);
        try{
            const response= await fetch(url);
            const people = await response.json();
            setLoading(false);
            setPeople(people);
            console.log(people);
        }
        catch(error){
            setLoading(false);
            console.log(error);
        }
    }

    useEffect( ()=>{
        fetchPeople();
    },[] )

        if(loading){
            return(
                <div>
                   <h1>loading....</h1>
                </div>
            );
        }
        return(
            <>
                <div className="center" style={{'textAlign':'center'}}>
                <div className="btn btn-danger" onClick={()=>setPeople([])}  >Delete All Data</div>

                    {people.map((ele)=>{
                        return(

                            <div className="card" style={{"width":" 18rem"}} key={ele.id} >
                                <img className="card-img-top" src={ele.avatar_url} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.login}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </>
        )
}

export default Main