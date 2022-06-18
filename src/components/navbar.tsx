import React from "react";
import styled from "styled-components";
import {Link, LinkProps, useMatch, useResolvedPath} from "react-router-dom";
import {NavigationData} from "../config/data-navs";

const CustomLink = ({ children, to, ...props }: LinkProps)  => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link style={{ textDecoration: match ? "underline" : "none" }} to={to}{...props}>
            {children}
        </Link>
    );
};

const NavBar = () => {
    return (
        <NavBarWrapper>
            <div className="d-flex justify-content-between justify-content-xxl-around">
                <HomePage className="d-flex position-relative">
                    <div>
                        <TextContainer className="container">
                            <Link style={{ textDecoration: "none" }} to={'/home'}>
                                <SectionH1>
                                    <FirstSpan>Mark</FirstSpan>
                                    <SecondSpan>Solano</SecondSpan>
                                </SectionH1>
                            </Link>
                        </TextContainer>
                    </div>
                </HomePage>
                <NavShow>
                    <ul  className="nav navbar-nav navbar-right flex-lg-row">
                        {
                            NavigationData.map((nav,index) =>
                                <ListTag key={`list-tag-${index}`}>
                                    <CustomLink to={nav.Section}> {nav.Label} </CustomLink>
                                </ListTag>
                            )
                        }
                        <ListTag>
                            <ResumeButton href="/files/Mark_Solano_Resume.pdf" target="_blank">Resume</ResumeButton>
                        </ListTag>
                    </ul>
                </NavShow>
            </div>
        </NavBarWrapper>
    );
};
export default NavBar

const HomePage = styled.div`
    margin: 25px 20px 0;
`;
const NavShow = styled.div`
    
`;

const ResumeButton = styled.a`
    background-color: var(--main-color)!important;
    color: var(--white-dart)!important;
    border: 2px solid var(--white-dart);
    border-radius: 4px;
    padding: 2px 6px !important;
    &:hover{
        color: var(--white-dart) !important;
        background-color: #007eff45 !important;
        // border: 2px solid var(--green) !important;
    }
`;

const ListTag = styled.li`
    list-style: none;
    margin: 25px 20px 0;
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            color: var(--green);
        }
         &:active {
            color: var(--green);
        }
    }
`;

const NavBarWrapper = styled.header`
    top: 0;
    z-index: 11;
    position: sticky;
    background: var(--main-color);
    padding: 1em;
    width: 100%;
    min-height: 60px;
    color: var(--white-dart);
`;
const SectionH1 = styled.h1`
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 0;
`;

const FirstSpan = styled.span`
    font-weight: 500;
    background: var(--white-pure);
    color: var(--navy); 
    padding: 0px 6px;
`;

const SecondSpan = styled.span`
      font-weight: 500;
      color: var(--white-dart); 
      padding: 0px 6px;
`;

const TextContainer = styled.div`
    background: linear-gradient( rgb(0 0 0 / 2%), rgb(0 0 0 / 1%) );
    box-shadow: 0px 0px 10px #0000000a;
`;
