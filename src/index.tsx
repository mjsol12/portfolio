import React, {lazy, useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
const AboutPage = lazy(() => import("./pages/about"));
const HomePage = lazy(() => import("./pages/home"));
const ProjectPage = lazy(() => import("./pages/project"));
const ExperiencePage = lazy(() => import("./pages/experience"));
import Loader from "./components/loading-page";

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, []);

    return (<>
            { loading === false ? (
                <Routes>
                    <Route path="/*" element={<App />} >
                        <Route path="home"  element={
                            <React.Suspense fallback={<>...</>}>
                                <HomePage />
                            </React.Suspense>
                        }/>
                        <Route path="about"  element={
                            <React.Suspense fallback={<>...</>}>
                                <AboutPage />
                            </React.Suspense>
                        }/>
                        <Route path="project"  element={
                            <React.Suspense fallback={<>...</>}>
                                <ProjectPage />
                            </React.Suspense>
                        }/>
                        <Route path="experience"  element={
                            <React.Suspense fallback={<>...</>}>
                                <ExperiencePage />
                            </React.Suspense>
                        }/>
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
