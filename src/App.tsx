import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Homepage from './pages/Homepage';
import { useSelector } from 'react-redux';



function App() {
  const currentUser = useSelector((state: any) => state.user.currentUser);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/createPost" element={<CreatePost /> } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
