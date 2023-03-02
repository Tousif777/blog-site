import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Homepage from './pages/Homepage';
import { useSelector } from 'react-redux';
import MyPosts from './pages/MyPosts';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer';
import { DetailsPages } from './pages/details/DetailsPages';

function App() {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/post/:postId" element={<DetailsPages/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
