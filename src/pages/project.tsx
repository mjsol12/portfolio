import React, {Fragment} from "react";
import styled from "styled-components";
import {ProjectData, SmallProjectsData} from "../config/project-data";
import {ProjectDataType} from "../model";
import ImageOverlay from "../components/image-overly";
import PageHeader from "../components/page-header";
import FadeIn from "../components/fade-in";
import {devicesMax} from "../config/devices";
import {BsFolderSymlink, BsGlobe2} from "react-icons/bs";
import {Carousel} from "react-bootstrap";

const ProjectPage = () => {
    const title = 'Projects';
    return <FadeIn className="container mb-5">
        <ProjectPageSection id="project"  >
            <PageHeader key="Project-title" Title={title}/>
            {
                ProjectData && ProjectData.map((project, index) => <Fragment key={project.Id}>
                        <ProjectContainer  className="d-flex align-items-center mb-5" rightAlignment={index % 2 == 0 }>
                            <LeftSide className="p-4 w-50" leftAlignment={index % 2 == 0}>
                                <ProjectName textAlign={index % 2 == 0}>
                                    <p className="m-0 p-0">Featured Project</p>
                                    <TitleProjectFeature leftAlignment={index % 2 == 0} className="d-flex justify-content-between">
                                        <h2> {project.Title}</h2>
                                        <LinkContainer>
                                            {project.WebUrl && <a aria-label={project.WebUrl} className="p-2" href={project.WebUrl} target="_blank"><BsGlobe2/></a> }
                                        </LinkContainer>
                                    </TitleProjectFeature>
                                </ProjectName>
                                <ProjectDescription>
                                    <p>{project.Description}</p>
                                </ProjectDescription>
                                <StackList>
                                    {
                                        project.Tags.map((tag, index) =>
                                            <StackItem key={`project-tag-${tag}-${index}`} >{tag}</StackItem>
                                        )
                                    }
                                </StackList>
                            </LeftSide>
                            <CarouselImages Project={project}/>
                        </ProjectContainer>
                        {
                            (index + 1) !== ProjectData.length  && <Divider divided={index % 2 == 0} className="d-flex align-items-center mb-5"></Divider>
                        }
                    </Fragment>
                )
            }

            <PageHeader key={"Other-Project"} Title={"Others"}/>

            <div className="d-flex flex-wrap justify-content-center mb-5">
                <CardProject SmallProjects={SmallProjectsData}/>
            </div>
        </ProjectPageSection>
    </FadeIn>
};
export default ProjectPage;

const CarouselImages = ({Project}: {Project: ProjectDataType}) => {
    return <ProjectImage className="w-50">
        <Carousel>
            {
                Project.Images && Project.Images.map(( i,index): any =>
                    <Carousel.Item key={`image-${index}`}>
                        <ImageOverlay alt={i.Name} ImageUrl={i.Url && i.Url} Width={600} Height={300}/>
                    </Carousel.Item>
                )
            }
        </Carousel>
    </ProjectImage>
}

const CardProject = ({SmallProjects}: {SmallProjects: ProjectDataType[]}) => {
    return <>
        {
            SmallProjects.map((project, index) =>
                <ProjectContent key={`carded-projext-#${index}`} className="px-2 mt-2 mb-2 col-sm-6 col-md-4 col-lg-4">
                    <ProjectFolder className="p-2 d-flex flex-column justify-content-between h-100">
                        <div className="d-flex justify-content-between">
                            <HeadIcon>_</HeadIcon>
                            <LinkContainer className="d-flex flex-row">
                                {project.RepositoryUrl && <a aria-label={project.RepositoryUrl} className="p-2" href={project.RepositoryUrl} target="_blank"><BsFolderSymlink/></a> }
                                {project.WebUrl && <a aria-label={project.WebUrl} className="p-2" href={project.WebUrl} target="_blank"><BsGlobe2/></a> }
                            </LinkContainer>
                        </div>
                        <ProjectH2 className="m-0 d-flex justify-content-start flex-nowrap align-items-center">[{project.Title}]</ProjectH2>
                        <ProjectDescription>
                            <p>{project.Description}</p>
                        </ProjectDescription>
                        <StackList>
                            {
                                project.FeaturedTags && project.FeaturedTags.map((tag, index) =>
                                    <StackItem key={`tag-${index}`}>{tag}</StackItem>
                                )
                            }
                        </StackList>
                    </ProjectFolder>
                </ProjectContent>
            )
        }
    </>
};

const ProjectPageSection = styled.section`
    color: var(--white-dart);
`;

const ProjectContainer = styled.div`
    direction: ${(props: {rightAlignment: boolean} )=> props.rightAlignment ? 'rtl': 'initial'};
    @media ${devicesMax.tablet} {
        width: 100% !important;
        flex-direction: column;
    }
`;

const ProjectImage = styled.div`
    @media ${devicesMax.tablet} {
        width: 100% !important;
        margin-bottom: 0px !important;
    }
`;

const LeftSide = styled.div`
    direction: ${(props: {leftAlignment: boolean} )=> props.leftAlignment ? 'ltr': 'initial'};
    @media ${devicesMax.tablet} {
        width: 100% !important;
    }
`;
const TitleProjectFeature = styled.div`
    direction: ${(props: {leftAlignment: boolean} )=> props.leftAlignment ? 'rtl': 'initial'};
    @media ${devicesMax.tablet} {
        width: 100% !important;
    }
`;

const ProjectName = styled.div`
    text-align: ${(props: {textAlign: boolean}) => props.textAlign ? "right": "left"};
    & p {
        color: var(--green);
    } 
    & h2 {
        margin: 0;
    }
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

const StackItem = styled.p`
    color: var(--green);
    margin: 0 8px;
`;
const StackList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ProjectDescription = styled.div`
    background: var(--secondary-color);
    padding: 24px;
    text-align: justify;
    & p {
        margin: 0;
        text-align: justify;
        text-indent: 1rem;
    }
`;

const Divider = styled.div`
    height: .5px;
    margin: ${(props: {divided: boolean}) => props.divided ? "0 40% 0 0": "0 0 0 40%"};
`;

const ProjectContent = styled.div`
    :hover {
       transform: translateY(-3px);
       transition: var(--transition);
    }
`;

const ProjectFolder = styled.div`
    background: var(--secondary-color);
    text-align: justify;
`;

const LinkContainer = styled.div`
    a {
        color: var(--white);
        :hover {
            color: var(--green);
        }
    }
`;

const HeadIcon = styled.div`
    visibility: hidden;
`;

const ProjectH2 = styled.h2`
    ::before {
        content: "";
        display: block;
        top: -5px;
        width: 50px;
        height: 1px;
        margin-left: 20px;
        background-color: var(--white-dart-light);
    }
`;
