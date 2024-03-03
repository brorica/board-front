import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [postList, setPostList] = useState([]);

  const getPostList = async () => {
    const response = await axios.get('//localhost:8080/api/posts');
    setPostList(await response.data.postList);
    console.log(postList);
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div>
      <ul>
        {postList.map((post) => (
          <li key={post.postId}>
            <Link to={`/post/${post.postId}`}> {post.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
