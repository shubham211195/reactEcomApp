import React from "react";
import {Stack} from '@mui/material';
import PostCard from './PostCard';
const Post = (props) => {
  return (
    <>
      <Stack spacing={2} mt={4} mb={4} alignItems="center">
        {props.post.map((singlePost, idx) => {
            return(
            <PostCard key={idx} singlePost={singlePost}/>
          )})}
      </Stack>
    </>
  );
};

export default Post;