import React, { useState } from 'react'

const FetchPost = () => {
  const [formData,setformData]=useState({
    title:'',
    body:'',
  })

  const handlechange=(e)=>{
       const {name,value}=e.target;

       setformData({
        ...formData,[name]:value,
       })
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
     const apiurl = "https://jsonplaceholder.typicode.com/posts"

    //  create the request object

     const requestOptions = 
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        
        },
          body:JSON.stringify(formData)
      }

      fetch(apiurl,requestOptions)
      .then((response)=>response.json()).then((data)=>{
        console.log("response data:",data)
      }).catch((error)=>console.log(error))
     
  }


  return (
    <>

      <form action="" onSubmit={handlesubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handlechange} id="" />
        </div>
        <div>
          <label htmlFor="">Body:</label>
          <textarea name="body" value={formData.body} onChange={handlechange} id=""></textarea>
        </div>
        <button type='submit' className='bg-blue-600 border rounded-2xl'>submit</button>
      </form>
    </>
  )
}

export default FetchPost


