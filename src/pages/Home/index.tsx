import axios from 'axios';
import { log } from 'console';
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState<any[]>([]);
    const [work, setWork] = useState<any[]>([]);

    

useEffect(() => {

    axios("http://localhost:3000/user").then((response) => {
        console.log("Kiem tra",response);
        setData(response.data);
    })
}, [])

const handleDelete = (id:number) => {
    axios.delete(`http://localhost:3000/user/${id}`).then((response) => {
       console.log("Sau delete",response);
      axios.get("http://localhost:3000/user").then((response) => {
        setData(response.data);
      });
       
        
        
        
    })
}

const handleEdit = (id:number) => {
    axios.patch(`http://localhost:3000/user/${id}`).then((response) => {
        console.log("Sau post",response);
        axios.get("http://localhost:3000/user").then((response) => {
            setData(response.data);
        });
    })
}



  return (
    <div>
      <h1>Hello Home</h1>
       <ul>
        {data.map((item,i)=> (<li key={i}>{item.name} <button
            onClick={()=>handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleEdit(item.id)}>Edit</button></li>))}
       </ul>
    </div>
  )
}


