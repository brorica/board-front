import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import PostList from './routes/PostList';
import PostDetail from './routes/PostDetail';
import PostWrite from './routes/PostWrite';
import Login from './routes/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<PostList />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path="/write" element={<PostWrite />} />
    </Routes>
  );
}

export default App;
