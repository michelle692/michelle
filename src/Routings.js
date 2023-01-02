import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Projects from "./Projects";
import About from "./About";

const Routings = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/projects' element={<Projects />} ></Route>
                <Route path='/about' element={<About />} ></Route>
            </Routes>
        </Router>
    );

};

export default Routings