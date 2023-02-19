// import { useRef } from 'react';
// import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/404/NotFound';
// import handleSubmit from './handles/handlesubmit';
import Login from './pages/login/Login';
import Blogs from './pages/blogs/Blogs';
import Projects from './pages/projects/Projects';
import BlogDetails from './pages/blogDetails/BlogDetails';

import { useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import ProjectDetails from './pages/projectDetails/ProjectDetails';
const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />

                {/* <Route path="/AbdullahAlsuqayh" element={<Home />} /> */}

                <Route path="admin" element={<Login />} />
                <Route path="blogs" element={<Blogs isBlogPage={true} />} />
                <Route path="projects" element={<Projects isProjectPage={true} />} />
                <Route path="projects/:id" element={<ProjectDetails />} />

                <Route path="/blogs/:id" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </AnimatePresence>

    );
}

export default AnimatedRoutes;