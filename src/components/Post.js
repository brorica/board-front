import React from 'react';
import Instance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import './css/Post.css';

const Post = ({
  postId,
  title,
  content,
  creator,
  createdAt,
  viewCount,
  upvoteCount,
}) => {
  const navigate = useNavigate();

  const moveToUpdate = () => {
    navigate(`/update/${postId}`);
  };

  const deletePost = async () => {
    if (window.confirm('삭제 ㄱ?')) {
      await Instance.delete(`/posts/${postId}`).then((res) => {
        alert('삭제됐습니다.');
        moveToList();
      });
    }
  };

  const moveToList = () => {
    navigate(`/post`);
  };

  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="postInfo">
        <span>작성자: {creator}</span> |
        <span> 작성 시간: {new Date(createdAt).toLocaleString()}</span> |
        <span> 조회 수: {viewCount}</span> |<span> 추천 수: {upvoteCount}</span>
      </div>
      <p>{content}</p>
      <div>
        <button onClick={moveToUpdate}> 수정 </button>
        <button onClick={deletePost}> 삭제 </button>
        <button onClick={moveToList}> 목록 </button>
      </div>
    </div>
  );
};

export default Post;
