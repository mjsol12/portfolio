import React from "react";
import style from "styled-components";

const AboutPage = () => {
    return <SectionPage className="container">
        <div className="d-flex">
            <AboutContainer>
                <TextContainer className="container mb-5">
                    <SectionH5>About Me</SectionH5>
                    <SectionDescription>
                        Hello! My name is Mark Solano from Philippines and part of a team based in Belfast.
                        My main responsibility as full stack developer are implementing feature, design interface,
                        maintain a bug free code, and keep stack skill up to date. I had the privilege of working with
                        people who is experienced software engineer and collaborate with them.
                    </SectionDescription>
                    <SectionDescription>
                        Although my graduated course was on social degree, My love to create out of the box and
                        a continuing learning path leads me to my career.
                    </SectionDescription>
                    <SectionDescription>
                        I love to travel using motorcycle, taking landscape pictures, meet friends and family over the weekend,
                        reading articles, news and books, and occasionally play online games.
                    </SectionDescription>
                </TextContainer>
                <TextContainer className="container">
                    <SectionH1>
                        Technologies I've been working with recently
                    </SectionH1>
                    <SectionList>
                        <ListItem><span> {">"} </span>Javascript (Es6+)</ListItem>
                        <ListItem><span> {">"}  </span>TypeScript</ListItem>
                        <ListItem><span> {">"}  </span>React</ListItem>
                        <ListItem><span> {">"}  </span>Angular</ListItem>
                        <ListItem><span> {">"}  </span>Node.js</ListItem>
                    </SectionList>
                </TextContainer>
            </AboutContainer>
            <AboutContainer>
                <TextContainer className="container mb-5">
                    <div style={{background: 'black', width: "500px", height: "500px"}}></div>
                </TextContainer>
            </AboutContainer>
        </div>
    </SectionPage>
};
export default AboutPage

const SectionPage = style.section`
    color: var(--white-dart);
`;

const AboutContainer = style.div`
`;

const SectionDescription = style.div`
    font-size: .8rem;
    font-weight: 200;
    text-indent: 1.5rem;
    text-align: justify;
`;

const SectionH5 = style.h5`
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 10px;
`;

const SectionH1 = style.h1`
    font-size: 1rem;
    font-weight: 200;
    text-indent: 1rem;
`;

const TextContainer = style.div`
    background: linear-gradient( rgb(0 0 0 / 2%), rgb(0 0 0 / 1%) );
    box-shadow: 0px 0px 10px #0000000a;
`;

const SectionList = style.div`
    display: flex;
    color: var(--green);
    flex-wrap: wrap;
    flex-direction: row;
`;

const ListItem = style.div`
    width: 50%;
    & span {
        font-size: .7rem;
    }
`;