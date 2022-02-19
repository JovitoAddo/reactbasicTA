import axios from 'axios';
import  {useState, useEffect } from 'react'
function CatList({data}){
    const [cats,catsTemp] = useState([]);
    
    useEffect(async()=>{
        const api = await axios.get(
            "https://api.thecatapi.com/v1/breeds"
        );
        let limitData = [];
        for(let i=0; i < 1 ; i++){
            limitData.push(api.data[i]);
        }
        catsTemp(limitData)
    },[])

    return(
        <div style={
            {backgroundColor: 'blue'}
        }>
        <form>
            <input type = 'text' name='search' placeholder='Search'/>
        </form>
        <hr/>
        {cats.length===0?(
            <h2>Loading...</h2>
        ):(
            cats.map((data)=>(
                <div key='props'>
                    <img src={data.image.url} width='150' alt=''/>
                    <h2 style={
                        {color: 'red'}
                    }>{data.name}</h2>
                    <h3 style={
                        {color: 'white'}
                    }>{data.origin}</h3>
                </div>
            ))
        )}
        
        </div>
    );

}

export default CatList