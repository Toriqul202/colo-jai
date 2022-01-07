import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHook from '../../components/context/useHook';


const ManageOrder = () => {
  
    const {book}=useHook()
    const [packages,setPackages]=useState([])
    useEffect(()=>{
         fetch('http://localhost:4000/confirming')
         .then(res=>res.json())
         .then(data=>setPackages(data))
    },[])
   
    const handleDelete=(id)=>{
        const url=`http://localhost:4000/confirming/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
               alert("Hoise parsos")
               
               const remaining=packages.filter(packaged=> packaged._id !== id)
               setPackages(remaining)
            }
            else{

            }
            
        })
    }
    
    return (
        <div>
            {
                packages.map(packaged=>
                    <div>
                       
                         <h3>{packaged.name}</h3>
                         <img src={book?.img} alt="" />
                         <h5>hoise</h5>
                         <button onClick={()=>handleDelete(packaged._id)}>Delete</button>
                    </div>
                   
                    
                )
            }
        </div>
    );
};

export default ManageOrder;