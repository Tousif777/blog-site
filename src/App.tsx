import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Homepage from './pages/Homepage';
import { useSelector } from 'react-redux';
import "./App.css"
import MyPosts from './pages/MyPosts';
import SinglePost from './pages/SinglePost';

function App() {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/createPost" element={<CreatePost /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/post/:postId" element={<SinglePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
