import React from "react";
import style from "styled-components";
import ImageOverlay from "../components/image-overly";
import PageHeader from "../components/page-header";
import FadeIn from "../components/fade-in";
import {devicesMax} from "../config/devices";

const AboutPage = () => {
    const title = 'About me';
    return (
        <FadeIn key={`About-Me-Page`} className="container">
            <SectionPage id="about">
                <PageHeader Title={title}/>
                <AboutRoot>
                    <AboutContainer width="75%">
                        <TextContainer className="container mb-3">
                            <SectionDescription>
                                Hello! I'm Mark Solano, a Software Developer from the Philippines and part of a team based in Belfast.
                                I've been in the industry for a while now and
                                I have had the privilege of working with people who are experienced software engineers and collaborating with them.
                            </SectionDescription>
                            <SectionDescription>
                                Throughout my career, I've had the privilege of working at some of our local business agencies, a government school, a start-up, and a huge-corporation.
                                I'm currently focused on delivering inclusive and clean software for the company.
                            </SectionDescription>
                            <SectionDescription>
                                Some of my hobbies are travelling using a motorcycle, take landscape pictures (my town is surrounded by mountains),
                                meet friends and family over the weekend; read articles, news and books,
                                and occasionally play online games.
                            </SectionDescription>
                        </TextContainer>
                    </AboutContainer>
                    <SideImage width="50%" className="mx-3">
                        <ImageOverlay alt="Mark Solano Image" ImageUrl={"/img/myself5.jpg"} Width={168}/>
                    </SideImage>
                </AboutRoot>
                <div>
                    <AboutContainer width="50%">
                        <TextContainer className="container">
                            <SectionH2>
                                Technologies I've been working with recently
                            </SectionH2>
                            <SectionList>
                                <ListItem className="ps-3">Javascript(Es6+)</ListItem>
                                <ListItem className="ps-3">TypeScript</ListItem>
                                <ListItem className="ps-3">React</ListItem>
                                <ListItem className="ps-3">Angular</ListItem>
                                <ListItem className="ps-3">NodeJs</ListItem>
                            </SectionList>
                        </TextContainer>
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
const AboutRoot = style.div`
    display: flex;
    justify-content: center;
    @media ${devicesMax.tablet} {
        flex-direction: column-reverse;
    }
`;

const AboutContainer = style.div`
    position: relative;
    padding: 0;
    align-self: center;
    width: ${(props:{width: string}) => props.width ? props.width: "100%"};
    @media ${devicesMax.tablet} {
        width: 100%;
        margin: 0 !important;
    }
`;

const SideImage = style.div`
    position: relative;
    padding: 0;
    align-self: center;
    width: ${(props:{width: string}) => props.width ? props.width: "100%"};
    @media ${devicesMax.tablet} {
        width: 50%;
        margin: 0 !important;
    }
`;

const SectionDescription = style.p`
    font-weight: 200;
    text-indent: 1.5rem;
    text-align: justify;
`;

const SectionH2 = style.h2`
    font-size: 1rem;
    font-weight: 200;
    text-indent: 1rem;
`;

const TextContainer = style.div`
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
