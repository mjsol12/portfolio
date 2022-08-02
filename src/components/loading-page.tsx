import React from "react";
import styled, {keyframes} from "styled-components";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

export default () => {

    const particlesInit = async (main: any) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={ {
                    background: {
                        color: {
                            value: "--main-color",
                        },
                    },
                    fpsLimit: 150,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                // enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 200,
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
                            opacity: 0.2,
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
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
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
                }}/>
        </>
    )
};
