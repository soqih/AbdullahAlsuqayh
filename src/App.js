import { useRef, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404/NotFound';
import handleSubmit from './handles/handlesubmit';
import Login from './pages/login/Login';
import Blogs from './pages/blogs/Blogs';
import Projects from './pages/projects/Projects';
import AnimatedRoutes from './AnimatedRoutes'
function App() {
  const dataRef = useRef()
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
  return (
    <Router>
      {/* <div className="App"> */}
        <Navbar />
        <div className="content">
          {/* <Router> */}
            <AnimatedRoutes />

        </div>
      {/* </div> */}
    </Router>

  );
}

export default App;
