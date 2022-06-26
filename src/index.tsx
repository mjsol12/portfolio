import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProjectPage from "./pages/project";
import AboutPage from "./pages/about"
import HomePage from "./pages/home"
import ExperiencePage from "./pages/experience";
import Loader from "./components/loading-page";

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500)
    }, []);

    return (<>
            { loading === false ? (
                <Routes>
                    <Route path="/*" element={<App />} >
                        <Route path="home" element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="project" element={<ProjectPage />} />
                        <Route path="experience" element={<ExperiencePage />} />
                        <Route path="*" element={<Navigate to={'/home'} />} />
                    </Route>
                </Routes>
            ) : (
                <Loader/>
            )}
    </>
    )
};

let root = createRoot( document.getElementById('root') as HTMLElement);

root.render(<BrowserRouter><Main/></BrowserRouter>);
