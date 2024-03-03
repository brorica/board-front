import React from 'react';

const Post = ({ postId, title, content }) => {
  return (
    <div>
      <h2> {title} </h2>
      <hr />
      <p> {content} </p>
    </div>
  );
};

export default Post;
