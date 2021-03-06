import React from "react";
import styled, {keyframes} from "styled-components";
type FadeinPageType = {
    className?: JSX.ElementClass | any;
    children: | JSX.Element | JSX.Element[] | string | string[];
};
const FadeIn = ({ className = null, children, ...props}: FadeinPageType) => {
    return(<FadeInContainer {...props} className={className}>
        { children }
    </FadeInContainer>)
};
export default FadeIn;

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
