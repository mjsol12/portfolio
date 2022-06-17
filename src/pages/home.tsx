import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import FadeIn from "../components/fade-in";

const HomePage = () => {
    const jobTitle = "Software Developer";
    return (
        <FadeIn className="container" >
            <SectionPage id="home" >
                <div>
                    <IntroTag>Hi, I'm a</IntroTag>
                </div>
                <div>
                    <PositionTag>
                        <span>{jobTitle}</span>
                    </PositionTag>
                </div>
                <div>
                    <BuilderTag>I build things for the web.</BuilderTag>
                </div>
                <div><p>Specializing in building exceptional web application services.</p></div>
                <div><p>Helping businesses minimize their cost and maximize operations.</p></div>
                <div><Link to={"/about"} style={{ color: "var(--green)", textDecoration: "none"}}>Learn More</Link></div>
            </SectionPage>
        </FadeIn>
    )
};
export default HomePage

const SectionPage = styled.section`
    color: var(--white-dart);
    & p {
        font-size: 0.7rem;
    }
`;

const IntroTag = styled.h1`
    font-size: 1.2rem;
`;

const PositionTag = styled.h2`
    font-weight: bolder;
    text-indent: 1rem;
    line-height: .5;
    letter-spacing: .1rem;
    font-size: 3.5rem;
`;
const BuilderTag = styled.h3`
    line-height: 5;
`;
