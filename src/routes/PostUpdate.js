import React, { useState, useEffect } from 'react';
import Instance from '../api/axios';
import { useParams, useNavigate } from 'react-router-dom';

const PostUpdate = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({
    postId: 0,
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

  const updatePost = async () => {
    await Instance.put(`/posts/${postId}`, post).then((res) => {
      alert('수정됨');
      backToDetail();
    });
  };

  const backToDetail = () => {
    navigate(`/post/${postId}`);
  };

  const getPost = async () => {
    const response = await Instance.get(`/posts/${postId}`);
    setPost(await response.data);
  };

  useEffect(() => {
    getPost();
  }, []);

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
        <button onClick={updatePost}>저장</button>
        <button onClick={backToDetail}>취소</button>
      </div>
    </div>
  );
};

export default PostUpdate;
