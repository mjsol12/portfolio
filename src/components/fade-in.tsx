import React from "react";
import styled, {keyframes} from "styled-components";
type FadeinPageType = {
    className?: JSX.ElementClass | any;
    children: | JSX.Element | JSX.Element[] | string | string[];
};
export default ({ className = null, children}: FadeinPageType) => {
    return(<FadeInContainer className={className}>
        { children }
    </FadeInContainer>)
}

const fadein = keyframes`
     0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const FadeInContainer = styled.div`
    animation: ${fadein} ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;
