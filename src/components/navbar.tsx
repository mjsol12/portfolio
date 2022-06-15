import React from "react";
import styled from "styled-components";
import {Link, LinkProps, useMatch, useResolvedPath} from "react-router-dom";
import {NavigationData} from "../config/data-navs";

const CustomLink = ({ children, to, ...props }: LinkProps)  => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{ textDecoration: match ? "underline" : "none" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}


const NavBar = () => {
    return (
        <NavBarWrapper>
            <div className="d-flex justify-content-around">
                <HomePage className="d-flex position-relative">
                    <div>
                        <TextContainer className="container">
                            <Link
                                style={{ textDecoration: "none" }}
                                to={'/home'}
                            >
                                <SectionH1>
                                    <span style={{fontWeight: 500, background: "var(--white-pure)", color: "var(--navy)", padding: "0px 6px"}}>Mark</span>
                                    <span style={{
                                        fontWeight: 500, background: "var(--green)", color: "var(--white-dart)",padding: "0px 6px"}}>Solano</span>
                                </SectionH1>
                            </Link>
                        </TextContainer>
                    </div>
                    <PhTagContainer className="position-absolute">
                        <PhTagH1>
                            <PhTag>
                                <span>P</span>
                                <span>H</span>
                            </PhTag>
                        </PhTagH1>
                    </PhTagContainer>
                </HomePage>
                <NavShow>
                    <UnorderList  className="nav navbar-nav navbar-right flex-lg-row">
                        {
                            NavigationData.map((nav,index) =>
                                <ListTag key={`list-tag-${index}`}>
                                    <CustomLink to={nav.Section}> {nav.Label} </CustomLink>
                                </ListTag>
                            )
                        }
                    </UnorderList>
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

const UnorderList = styled.ul`
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
const AlphaTag = styled.a`
    text-decoration: none;
    color: inherit;
    &:hover {
        color: var(--green);
    }
    &:active {
        color: var(--green);
    }
`;
const SectionH1 = styled.h1`
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 0;
    color:;
`;

const TextContainer = styled.div`
    background: linear-gradient( rgb(0 0 0 / 2%), rgb(0 0 0 / 1%) );
    box-shadow: 0px 0px 10px #0000000a;
`;

const PhTagContainer = styled.div`
    padding-left: 0px;
    padding-right: 0px;
    position: absolute;
    right: 0px;
    top: 2px;
    /* border-radius: 12px; */
`;
const PhTagH1 = styled.h1`font-size: .5rem;text-align: right;`;

const PhTag = styled.span`font-weight: 500;background: var(--white-pure);color: var(--navy);padding: 0px 3px;border-radius: 2px;border:1px solid var(--navy)`;
