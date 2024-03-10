import React from 'react';
import Instance from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Post = ({ postId, title, content }) => {
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
    <div>
      <div>
        <h2> {title} </h2>
        <hr />
        <p> {content} </p>
      </div>
      <div>
        <button onClick={moveToUpdate}> 수정 </button>
        <button onClick={deletePost}> 삭제 </button>
        <button onClick={moveToList}> 목록 </button>
      </div>
    </div>
  );
};

export default Post;
