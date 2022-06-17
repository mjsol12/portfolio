import React from "react";
import style from "styled-components";
import ImageOverlay from "../components/image-overly";
import PageHeader from "../components/page-header";
import FadeIn from "../components/fade-in";

const AboutPage = () => {
    const title = 'About me';
    const Stacks = ["Javascript (Es6+)", "TypeScript", "React", "Angular", "Node.js"];
    return (
        <FadeIn className="container">
            <SectionPage id="about">
                <PageHeader Title={title}/>
                <div className="d-flex justify-content-center">
                    <AboutContainer className="w-50">
                        <TextContainer className="container mb-5">
                            <SectionDescription>
                                Hello! My name is Mark Solano from Philippines and part of a team based in Belfast.
                                My main responsibility as a software developer is implementing features, designing interfaces,
                                maintaining bug-free code, and keeping stack skills up to date.
                                I have had the privilege of working with people who are experienced software engineers and collaborate with them.
                            </SectionDescription>
                            <SectionDescription>
                                Although my graduate course was on social degree.
                                My love to create out of the box and a continuing learning path lead me to my career.
                            </SectionDescription>
                            <SectionDescription>
                                I love to travel using a motorcycle; take landscape pictures;
                                meet friends and family over the weekend; read articles, news and books,
                                and occasionally play online games.
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
                    <AboutContainer className="m-3">
                        <ImageOverlay ImageUrl={"/img/myself5.jpg"} Width={168}/>
                    </AboutContainer>
                </div>
            </SectionPage>
        </FadeIn>
    )
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
