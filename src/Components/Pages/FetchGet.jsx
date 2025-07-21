// import React, { useEffect, useState } from 'react'

// const FetchGet = () => {
 
//   // Fetch Get Method 

//   const [data,setdata]=useState([])

//   const [loading,setloading]=useState(true)

//   useEffect(()=>{
//     fetch("https://webbook-backend-api-s.onrender.com/api/v1/book/all")
//     .then((response)=>{
//       console.log(response)

//       if(!response.ok){
//         throw new Error("Network response was not ok!")
//       }
//       return response.json();
//     })
//     .then((data)=>{
//       setdata(data)
//       setloading(false)
//       console.log(data)
//     }).catch((error)=>console.log("Error:",error));
//   },[])
 



//   return (
//   <>

//   {/* Fetch Get Method */}
//  <div>
//       {
//         loading ? (
//           <p>Loading...</p>
//         ):(
//  <table className='border'>
//       <thead className='border'>
//         <tr >
//           <th>ID</th>
//           <th>Title</th>
//           <th>Message</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           data.books.map((list,index)=>(
//           <tr key={index}>
//           <td>{list.bookcover.public_id}</td>
//           <td>{list.title}</td>
//           <td>{list.author}</td>
//           <td><img src={list.bookcover.url} alt="" /></td>
//         </tr>
//           ))
//         }
//       </tbody>
//       </table> 
//         )
//       }
//     </div> 


  

   

//   </>
//   )
// }

// export default FetchGet



import React, { useEffect, useState } from 'react'

const FetchGet = () => {
  const [postdata,setpostdata]=useState({
    id:1,
    title:"",
    body:"",

  })

  const [message,setmessage]=useState("")
  const [loading,setloading]=useState(false)

  const handlechange=(e)=>{
           const {name,value} = e.target;

           setpostdata({
            ...postdata,[name]:value
           });
  };

  useEffect(()=>{
    const postid = postdata.id;
    const apiurl = `https://jsonplaceholder.typicode.com/posts/${postid}`;
    fetch(apiurl).then((response)=>response.json()).then((data)=>{
      setpostdata(data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[postdata.id])

  const handlesubmit=()=>{
  e.preventDefault();
  setloading(true)
            
  const apiurl=`https://jsonplaceholder.typicode.com/posts/${postid.id}`

  const requestOptions = {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        
        },
          body:JSON.stringify(formData)
      }
       fetch(apiurl,requestOptions)
      .then((response)=>response.json()).then((data)=>{
        setmessage("post successfully.")
      }).catch((error)=>{
        console.log(error)
      setmessage("error updating the post")
      }).finally(()=>{
        setloading(false)
      })
  }


  // fetch delte method

  const [data,setdata]=useState()
  const handleclick=(id)=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${postid.id}`,{
        method:"DELETE",
      }).then((response)=>{
        if(!response.ok){
          throw new Error("Network response was not ok");
        }
        return response.json()
      }).then(()=>{
        setdata(data.filter((item)=>item.id !== id));
      }).catch((error)=>console.log(error))
  }
  return (
    <>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p> }

      <form action="" onSubmit={handlesubmit}>
        <div>
          <label htmlFor="">title</label>
          <input type="text" name="title" id="" value={postdata.title} onChange={handlechange}/>
        </div>
         <div>
          <label htmlFor="">body</label>
          <textarea  name="body" id="" value={postdata.body} onChange={handlechange}></textarea>
        </div>
        <button type='submit'>Update Post</button>
        <button onClick={()=>handleclick(item.id)}>Delete</button>
      </form>
    </>
  )
}

export default FetchGet