import styled from "styled-components";
import React from "react";
import {devicesMax} from "../config/devices";

type PageHeaderType = {
    Title: string;
}
export default ({Title}: PageHeaderType) => {
    return (
        <SectionH1>{Title}</SectionH1>
    )
}

const SectionH1 = styled.h1`
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 50px;
    white-space: nowrap;
    display:flex;
    align-items: center;
    ::after {
        content: "";
        display: block;
        top: -5px;
        width: 270px;
        height: 1px;
        margin-left: 20px;
        background-color: var(--white-dart-light);
    }
    @media ${devicesMax.tablet} {
        font-size: 2rem;
        margin: 0 !important;
    }
`;
