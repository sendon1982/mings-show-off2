import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Blogs from './pages/blogs';
import Login from './pages/login';
import Contact from './pages/contact';
import CreateTeamTemplate from './pages/create-team-template';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/create-team-template' element={<CreateTeamTemplate/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
    </Routes>
    </Router>
);
}
  
export default App;