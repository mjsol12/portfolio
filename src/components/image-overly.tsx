import React from 'react';
import style from "styled-components";

type ImageOverlyType = {
    ImageUrl: string;
    Width: number;
    Height?: number;
}

export default ({ImageUrl, Width, Height}: ImageOverlyType) => {
    return (
        <TextContainer className="container">
            <ImageContainer>
                <img width={Width ?? Width} height={Height ?? Height} src={ImageUrl}/>
            </ImageContainer>
            <Overly></Overly>
        </TextContainer>
    )
}

const ImageContainer = style.div`
    text-align: center;
`;

const TextContainer = style.div`
    background: linear-gradient( rgb(0 0 0 / 2%), rgb(0 0 0 / 1%) );
    box-shadow: 0px 0px 10px #0000000a;
    position: relative;
    padding: 0;
`;

const  Overly = style.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: .5s ease;
  background-color: #008cba36;
  &:hover { 
    opacity: 0
  }
`;
