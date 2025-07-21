import React, { useEffect, useState } from 'react'

import { getpost,creatPost,updatePost,deletePost } from './Axios'

const Axios2 = () => {
  
  const [posts,setposts]=useState([])
  const [newpost,setnewpost]=useState({title:'',body:''})
  
  // get request

  useEffect(()=>{
    getpost().then((response)=>{
      setposts(response.data);
      console.log(response.data)
    }).catch((error)=>console.log(error))
  },[])

  // update request 

  const handleUpdatePost=(postId,updatedData)=>{
    updatePost(postId,updatedData).then((response)=>{
      const updatePost = posts.map((post)=>post.id === postId ? response.data : post);
      setposts(updatePost)
      console.log(updatePost)
    }).catch((error)=>console.log(error))
  }
   

  // delete request

  const handleDelete=(postId)=>{
      deletePost(postId).then(()=>{
          const updatePost = posts.filter((post)=>post.id !== postId
        );
        setposts(updatePost)
      }).catch((error)=>console.log(error))
  }


  // create request

  const handleCreatePost=()=>{
    creatPost(newpost).then((response)=>{
        setposts([...posts, response.data])
        setnewpost({title:"",body:""})
    }).catch((error)=>console.log(error))
  }

  return (
    <>
      <h1>posts</h1>
      <ul>
        {
          posts.map((post)=>(
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button className='bg-blue-500 m-5 p-2 rounded-lg' onClick={()=>handleUpdatePost(post.id,{
                    title:"updated title",body:"updated body"
              })}>update</button>
              <button className='bg-blue-500 m-5 p-2 rounded-lg' onClick={()=>handleDelete(post.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <hr />
      <br /><br />
      <h2>Create New Post</h2>
      <input type="text" placeholder='Title' value={newpost.title} name="title" id="" onChange={(e)=>setnewpost({...newpost,title:e.target.value})} />

      <input type="text" placeholder='Body' value={newpost.body} name="body" id="" onChange={(e)=>setnewpost({...newpost,body:e.target.value})} />
      <button onClick={handleCreatePost}>Create</button>
    </>
  )
}

export default Axios2