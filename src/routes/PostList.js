import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const PostList = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    currentPage: 0,
    isFirst: true,
    isLast: true,
  });

  const getPostList = async (page = 0) => {
    const response = await (
      await axios.get(`//localhost:8080/api/posts?page=${page}`)
    ).data;
    setPostList(await response.content);
    setPageInfo({
      currentPage: response.currentPage,
      isFirst: response.first,
      isLast: response.last,
    });
  };

  const moveToWrite = () => {
    navigate('/write');
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
      <div>
        {!pageInfo.isFirst && (
          <button onClick={() => getPostList(pageInfo.currentPage - 1)}>
            이전 페이지
          </button>
        )}
        {!pageInfo.isLast && (
          <button onClick={() => getPostList(pageInfo.currentPage + 1)}>
            다음 페이지
          </button>
        )}
      </div>
      <div>
        <button onClick={moveToWrite}> 글쓰기 </button>
      </div>
    </div>
  );
};

export default PostList;
