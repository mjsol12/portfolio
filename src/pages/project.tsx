import React from "react";
import styled from "styled-components";
import {ProjectData} from "../config/project-data";
import {ProjectDataType} from "../model";

const AboutPage = () => {
    const projects: ProjectDataType[] = ProjectData;
    return <ProjectPageSection id="project"  className="container vh-100">
        {
            projects.map((project, index) => <>
                    <div className="d-flex align-items-center mb-5" style={index % 2 == 0  ? {direction: 'rtl'}: {}}>
                        <div className="p-4" style={index % 2 == 0  ? {direction: 'ltr'}: {}}>
                            <ProjectName textAlign={index % 2 == 0}>
                                <h1>
                                    <span>{project.Title}</span>
                                </h1>
                            </ProjectName>
                            <ProjectDescription className="">
                                <p>{project.Description}</p>
                            </ProjectDescription>
                            <StackList>
                                {
                                    project.Tags.map(tag =>
                                        <StackItem>{tag}</StackItem>
                                    )
                                }
                            </StackList>
                        </div>
                        <div>
                            <ProjectImage>
                                <img width="500" src={project.ImageUrl} />
                            </ProjectImage>
                        </div>
                    </div>
                    <Divider divided={index % 2 == 0} className="d-flex align-items-center mb-5"></Divider>
                </>
            )
        }
    </ProjectPageSection>
};
export default AboutPage;

const ProjectPageSection = styled.section`
    color: var(--white-dart);
`;

const ProjectName = styled.div`
    text-align: ${(props: {textAlign: boolean}) => props.textAlign ? "right": "left"};
    & h1 {
        text-indent: 1rem;
        margin: 6px;
    }
    & h1 span {
        background: #1c1c1c66;
        padding: 0 12px;
        border-radius: 6px;
    }
`;

const StackItem = styled.div`
    color: var(--green);
    font-size: .7rem;
    margin: 0 8px;
`;
const StackList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const ProjectImage = styled.div`
`;

const ProjectDescription = styled.div`
    background: var(--secondary-color);
    padding: 24px;
    text-align: justify;
    & p {
        font-size: .7rem;
        margin: 0;
        text-align: justify;
        text-indent: 1rem;
    }
`;

const Divider = styled.div`
    height: .5px;
    background: var(--white-dart);
    margin: ${(props: {divided: boolean}) => props.divided ? "0 40% 0 0": "0 0 0 40%"};
`;