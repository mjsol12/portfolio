import styled from "styled-components";
import React from "react";

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
`;
