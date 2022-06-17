import React from "react";
import styled, {keyframes} from "styled-components";

export default () => {
    return (
        <div style={{height: '100vh'}}><Loader></Loader></div>
    )
};

const rotate = keyframes`
    100%{
        transform: rotate(-360deg);
    }
`;

const Loader = styled.div`
    color: var(--white-dart);
    margin: auto;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 25px 35px rgba(0,0,0,0.3);
    overflow: hidden;
    ::before {
        content: "";
        position: absolute;
        height: 150%;
        width: 150%;
        left: -25%;
        top: -25%;
        background-image: conic-gradient(
            var(--white-dart-light),
            transparent 360deg
        );
        animation:${rotate} 3s infinite linear;
    }
`;
