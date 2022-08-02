import React from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import FadeIn from "../components/fade-in";
import {devicesMax} from "../config/devices";
import {BsPersonBoundingBox} from "react-icons/bs"
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";

const HomePage = () => {
    const jobTitle = "Software Developer";

    const particlesInit = async (main: any) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        <FadeIn key={'Home-Page'} className="container" >
            <HomeContainerFlex className="d-flex flex-row">
                <SectionPage id="home" className="pt-5">
                    <div>
                        <IntroTag>
                            <span>Hi, I'm a</span>
                        </IntroTag>
                    </div>
                    <div>
                        <PositionTag>
                            <span>{jobTitle}</span>
                        </PositionTag>
                    </div>
                    <ShowIn>
                        <BuilderTag>I build things for the web.</BuilderTag>
                    </ShowIn>
                    <ShowIn><p>Specialized in building exceptional web application services.</p></ShowIn>
                    <ShowIn><p>Helping businesses minimize their cost and maximize operations.</p></ShowIn>
                    <ShowIn>
                        <LinkToAbout>
                            <Link to={"/about"}><BsPersonBoundingBox/> Check me out</Link>
                        </LinkToAbout>
                    </ShowIn>
                </SectionPage>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            modes: {
                                push: {
                                    quantity: 1,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#003ac8",
                            },
                            links: {
                                color: "rgba(0, 106, 200, 0.71)",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 2,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 500,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "none",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                        fullScreen: false
                    }}/>
            </HomeContainerFlex>
        </FadeIn>
    )
};
export default HomePage;

const HomeContainerFlex = styled.div`
    #tsparticles { 
        width: 48% !important;
        height: 100% !important;
        pointer-events: none;
        position: fixed !important;
        z-index: 0 !important;
        top: 0px !important;
        right: 0px !important
    }
    
    @media ${devicesMax.tablet} {
        #tsparticles { 
            width: 200px !important;
            height: 200px !important;
            pointer-events: none;
            right: 0px !important;
            position: fixed;
            top: 100px !important;
        }
    }
`;

const titleTyping = keyframes`
  100%{
    left: 100%;
    width: 0;
  }
`;

const showIn = keyframes`
     0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ShowIn = styled.div`
    animation: ${showIn} ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    opacity: 0;
`;

const SectionPage = styled.section`
    color: var(--white-dart) !important;
    @media ${devicesMax.tablet} {
        font-size: 1.5rem;
        & p {
            font-size: 1rem;
        }
    }
`;

const IntroTag = styled.h1`
    font-size: 1.2rem;
      & span {
        position: relative;
    }
    & span::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        background: var(--main-color);
        animation: ${titleTyping} 1s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
    }
`;

const PositionTag = styled.h2`
    font-weight: bolder;
    text-indent: 1rem;
    letter-spacing: .1rem;
    font-size: 3.5rem;
    & span {
        position: relative;
    }
    & span::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        background: var(--main-color);
        animation: ${titleTyping} 2s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        animation-delay: 1s;
    }
    @media ${devicesMax.tablet} {
        text-indent: 0;
    }
`;
const BuilderTag = styled.h3`
    line-height: 5;
    @media ${devicesMax.tablet} {
        font-size: 2rem;
        line-height: 1;
    }
`;

const LinkToAbout = styled.div`
    a {
        text-decoration: none;
        color: var(--green);
        border-radius: 4px;
        padding: 6px;
        font-size: 1rem;
        background: var(--green-light);
        color: var(--white-pure) !important;
    }
`;
