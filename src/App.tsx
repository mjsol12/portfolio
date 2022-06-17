import React from 'react';
import './App.css';
import {NavBar} from "./components";
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import FadeIn from './components/fade-in';

const App = () => {
    return (
        <main>
            <FadeIn>
                <NavBar/>
                <section id="router-body" className="d-flex">
                    <Outlet />
                </section>
                <PageFooter id="footer">
                    <div className="container text-center">
                        <FooterText className="mb-0">Built By Mark Solano :  Created in <FooterLink href="https://reactjs.org/">React</FooterLink></FooterText>
                    </div>
                </PageFooter>
            </FadeIn>
        </main>
    )
};
export default App;

const PageFooter = styled.footer`
    padding: 30px;
    position: fixed !important;
`;
const FooterText = styled.p`
    color: #748182;
    margin: 0;
    line-height: 1.6;
    font-size: 13px;
`;

const FooterLink = styled.a`
    color: var(--bs-link-hover-color);
    text-decorator: none;
`;
