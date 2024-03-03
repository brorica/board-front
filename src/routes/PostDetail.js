import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import axios from 'axios';

const PostDetail = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const getPost = async () => {
    const response = await axios.get(`//localhost:8080/api/posts/${postId}`);
    setPost(await response.data);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {loading ? (
        <h2> loading... </h2>
      ) : (
        <Post postId={post.postId} title={post.title} content={post.content} />
      )}
    </div>
  );
};

export default PostDetail;