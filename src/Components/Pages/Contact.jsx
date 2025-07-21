import React, { useEffect, useState } from 'react'

function Contact() {

  const [store,setstore]=useState([])

  const [wating,setwaiting]=useState(true)

  useEffect(()=>{
    fetch("https://webbook-backend-api-s.onrender.com/api/v1/book/all").then((response)=>{
      console
      .log(response)

      if(!response.ok){
        throw new Error("Network is not ok");
        
      }
      return response.json()
    }).then((store)=>{
        setstore(store)
        setwaiting(false)
    }).then((error)=>{
      console.log("Error:",error)
    })
  })
  return (
    <>
      <div className='border border-green-400 rounded-lg'>
           {
            wating ? (
              <p>waitng...</p>
            ):(
              <table>
            <thead>
              <th>Id</th>
              <th>Books</th>
              <th>Books Detail</th>
            </thead>
            <tbody>
              {
                store.books.map((list,index)=>(
                  <tr key={index}>
                     <th>{list.bookcover.Public_id}</th>
                     <th>{}</th>
                     <th><img src={list.bookcover.url} alt="" /></th>
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

export default Contact