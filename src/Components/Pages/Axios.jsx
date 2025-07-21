import React from 'react'
import axios from 'axios'
const BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
  baseURL : BASE_URL,
})

// get request

export const getpost = ()=>{
  return axiosInstance.get("/posts");
};
// post request
export const creatPost = (postData)=>{
  return axiosInstance.post("/posts",postData);
}

// put request
export const updatePost = (postId,updatePost)=>{
  return axiosInstance.put(`/posts/${postId}`,updatePost);
}


//delete request 

export const deletePost = (postId)=>{
  return axiosInstance.delete(`/posts/${postId}`);
}


