import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './css/PostList.css';

const PostList = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    currentPage: 0,
    isFirst: true,
    isLast: true,
    pageNumberList: [],
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
      pageNumberList: response.pageNumbers,
    });
  };

  const moveToWrite = () => {
    navigate('/write');
  };

  const refineCreateAt = (createdAt) => {
    const date = new Date(createdAt);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월
    const day = date.getDate().toString().padStart(2, '0'); // 일
    const formattedDate = `${month}-${day}`;
    return formattedDate;
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
            <th>조회</th>
            <th>추천</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((post) => (
            <tr key={post.postId}>
              <td> {post.postId} </td>
              <td>
                <Link to={`/post/${post.postId}`}>{post.title}</Link>{' '}
              </td>
              <td> {post.creator} </td>
              <td> {refineCreateAt(post.createdAt)} </td>
              <td> {post.viewCount} </td>
              <td> {post.upvoteCount} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul></ul>
      <div>
        {/* 첫 페이지 가기 */}
        {!pageInfo.isFirst && (
          <button onClick={() => getPostList(0)}>{'첫 페이지'}</button>
        )}
        {pageInfo.pageNumberList.map((number) => (
          <button key={number} onClick={() => getPostList(number)}>
            {number + 1}
          </button>
        ))}
        {!pageInfo.isLast && (
          <button onClick={() => getPostList(pageInfo.currentPage + 1)}>
            {'다음'}
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
