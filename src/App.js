import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import PostList from './routes/PostList';
import PostDetail from './routes/PostDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<PostList />} />
      <Route path="/post/:postId" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
