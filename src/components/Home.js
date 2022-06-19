import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import {dummyApi} from '../util'
import Post from './Post';

const Home = () => {
  const[post,setPost]=useState([]);

  const loadPage=async()=>{
    const response=await dummyApi.get(`/products`)
    const postArr=response?.data??[]; 
    console.log(postArr); 
    setPost([postArr]);
  }
  useEffect(()=>{
    loadPage();
  },[])
    return (
    <>
       <Container fixed>
        <Post post={post} />
      </Container>
    </>
  )
}

export default Home