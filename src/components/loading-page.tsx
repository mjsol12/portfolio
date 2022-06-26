import React from "react";
import styled, {keyframes} from "styled-components";

export default () => {
    return (
        <>
            <LoaderContainer style={{height: '100vh'}}>
                <Loader></Loader>
                <Loader2></Loader2>
                <Loader3></Loader3>
            </LoaderContainer>
        </>
    )
};

const rotate = keyframes`
    100%{
        transform: rotate(-360deg);
    }
`;
const rotate2 = keyframes`
    100%{
        transform: rotate(360deg);
    }
`;
const LoaderContainer = styled.div`
    & div {
        color: var(--white-dart);
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        border-radius: 50%;
        ::before {
            content: "";
            position: absolute;
            height: 150%;
            width: 150%;
            left: -25%;
            top: -25%;
        }
        ::after{
            content: "";
            position: absolute;
            background: var(--main-color);
            height: 93%;
            width: 93%;
            top: 4%;
            left: 4%;
            border-radius: 50%;
        }
    }
`;

const Loader3 = styled.div`
    width: 25px;
    height: 25px;
    ::before {
        background-image: conic-gradient(
            #00e0bf 0deg,#00e0bf 135deg,
            transparent 135deg, transparent 180deg,
            #00e0bf38 180deg,#00e0bf2e 315deg,
            transparent 315deg, transparent 360deg
        );
        animation:${rotate2} 3s infinite linear;
    }
`;

const Loader2 = styled.div`
    width: 50px;
    height: 50px;
    ::before {
        background-image: conic-gradient(
            #e00000 0deg,#e00000 135deg, 
            transparent 135deg, transparent 180deg,
            #e0000099 180deg,#e0000099 315deg, 
            transparent 315deg, transparent 360deg
        );
        animation:${rotate} 3s infinite linear;
    }
`;

const Loader = styled.div`
    width: 75px;
    height: 75px;
    ::before {
        background-image: conic-gradient( 
            #00e00d 0deg, #00e00d 70deg, 
            transparent 70deg, transparent 90deg,
            #00e00d 90deg, #00e00d 160deg, 
            transparent 160deg, transparent 180deg,
            #00e00d 180deg, #00e00d 250deg, 
            transparent 250deg, transparent 270deg,
            #00e00d 270deg, #00e00d 340deg, 
            transparent 340deg, transparent 0deg
        );
        animation:${rotate2} 3s infinite linear;
    }
`;
