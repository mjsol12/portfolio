import React from 'react';
import './App.css';
import {NavBar} from "./components";
import styled from "styled-components";
import {Outlet} from "react-router-dom";

const App = () => {
    return <div>
        <NavBar/>
        <div className="d-flex">
            <Outlet />
        </div>
        <PageFooter id="footer">
            <div className="container text-center">
                <FooterText className="mb-0">Built By Mark Solano :  Created in <FooterLink href="https://reactjs.org/">React</FooterLink></FooterText>
            </div>
        </PageFooter>
    </div>
};

export default App;

const PageFooter = styled.footer`
    background-color: #111;
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
