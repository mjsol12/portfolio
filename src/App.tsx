import React from 'react';
import './App.css';
import {NavBar} from "./components";
import {Outlet} from "react-router-dom";
import FadeIn from './components/fade-in';

const App = () => {
    return (
        <main>
            <FadeIn  key={`App-Main-Page`}>
                <NavBar/>
                <section id="router-body" className="d-flex mb-5">
                    <Outlet />
                </section>
            </FadeIn>
        </main>
    )
};
export default App;
