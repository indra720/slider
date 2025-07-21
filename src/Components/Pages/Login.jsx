import React, { useEffect, useState } from 'react'

export default function Login() {
 
  const [data,setdata]=useState([])
  const [waitng,setwaiting]=useState(true)
  
 
   useEffect(()=>{
     fetch("https://webbook-backend-qsmk.onrender.com/api/v1/book/all")
     .then((response)=>{
       console.log(response)

       if(!response.ok){
         throw new Error("Network response was not ok!")
       }
       return response.json();
     })
     .then((data)=>{
       setdata(data)
       setwaiting(false)
      //  console.log(data)
     }).catch((error)=>console.log("Error:",error));
   },[])
  return (
    <>
     <div>
       {
         waitng ? (
           <p>Loading...</p>
         ):(
  <table className='border'>
       <thead className='border'>
         <tr >
           <th>ID</th>
           <th>Title</th>
           <th>Message</th>
         </tr>
       </thead>
       <tbody>
         {
          
          data.map((list,index)=>(
            <tr key={index}>
               <td>{list.id}</td>
               <td>{list.body}</td>
               <td>{list.title}</td>
            </tr>
          ))
         }
       </tbody>
       </table> 
         )
       }
     </div> 
    </>
  )
}
