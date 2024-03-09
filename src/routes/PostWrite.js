import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostWrite = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const { title, content } = post;

  const onChange = (event) => {
    const { value, name } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const savePost = async () => {
    await axios
      .post('//localhost:8080/api/posts', post, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        alert('등록됐습니다.');
        backToList();
      });
  };

  const backToList = () => {
    navigate('/post');
  };

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={content}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={savePost}>저장</button>
        <button onClick={backToList}>취소</button>
      </div>
    </div>
  );
};

export default PostWrite;
