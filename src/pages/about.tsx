import React from "react";
import style from "styled-components";
import ImageOverlay from "../components/image-overly";

const AboutPage = () => {
    const Stacks = ["Javascript (Es6+)", "TypeScript", "React", "Angular", "Node.js"];
    return <SectionPage className="container">
        <div className="d-flex justify-content-evenly align-items-center">
            <AboutContainer className="w-50">
                <TextContainer className="container mb-5">
                    <SectionH1>About Me</SectionH1>
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
                    <SectionH5>
                        Technologies I've been working with recently
                    </SectionH5>
                    <SectionList>
                        {
                            Stacks.map((stack,index) => <ListItem key={`stack-${index}`} className="ps-3">{stack}</ListItem> )
                        }
                    </SectionList>
                </TextContainer>
            </AboutContainer>
            <AboutContainer>
                <ImageOverlay ImageUrl={"/img/myself5.jpg"} Width={168}/>
            </AboutContainer>
        </div>
    </SectionPage>
};
export default AboutPage

const SectionPage = style.section`
    color: var(--white-dart);
`;

const AboutContainer = style.div`
    position: relative;
    padding: 0;
`;

const SectionDescription = style.div`
    font-size: .8rem;
    font-weight: 200;
    text-indent: 1.5rem;
    text-align: justify;
`;

const SectionH1 = style.h1`
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 10px;
    ::after {
        width: 400px
    }
`;

const SectionH5 = style.h5`
    font-size: 1rem;
    font-weight: 200;
    text-indent: 1rem;
`;

const TextContainer = style.div`
    background: linear-gradient( rgb(0 0 0 / 2%), rgb(0 0 0 / 1%) );
    box-shadow: 0px 0px 10px #0000000a;
    position: relative;
    padding: 0;
`;

const SectionList = style.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
`;

const ListItem = style.li`
    white-space: nowrap;
    color: var(--green);
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    ::before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: var(--white-dart);
    }
`;
