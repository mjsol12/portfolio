import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectPage from "./pages/project";
import AboutPage from "./pages/about"
import HomePage from "./pages/home"

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="project" element={<ProjectPage />} />
            </Route>
        </Routes>

    )
};

let root = createRoot( document.getElementById('root') as HTMLElement);

root.render(<BrowserRouter><Main/></BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
