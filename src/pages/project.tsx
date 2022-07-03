import React from "react";
import styled from "styled-components";
import {ProjectData, SmallProjectsData} from "../config/project-data";
import {ProjectDataType} from "../model";
import ImageOverlay from "../components/image-overly";
import PageHeader from "../components/page-header";
import FadeIn from "../components/fade-in";
import {devicesMax} from "../config/devices";
import {BsFolderSymlink, BsGlobe2} from "react-icons/bs";
import {Carousel} from "react-bootstrap";

const AboutPage = () => {
    const title = 'Projects';
    const projects: ProjectDataType[] = ProjectData;
    const subProjects: ProjectDataType[] = SmallProjectsData;
    return <FadeIn className="container mb-5">
        <ProjectPageSection id="project"  >
            <PageHeader Title={title}/>
            {
                projects.map((project, index) => <>
                        <ProjectContainer key={`Project-Featured-${index}`} className="d-flex align-items-center mb-5" rightAlignment={index % 2 == 0 }>
                            <LeftSide className="p-4 w-50" leftAlignment={index % 2 == 0}>
                                <ProjectName textAlign={index % 2 == 0}>
                                    <p className="m-0 p-0">Featured Project</p>
                                    <TitleProjectFeature leftAlignment={index % 2 == 0} className="d-flex justify-content-between">
                                        <h3> {project.Title}</h3>
                                        <LinkContainer>
                                            {project.WebUrl && <a className="p-2" href={project.WebUrl} target="_blank"><BsGlobe2/></a> }
                                        </LinkContainer>
                                    </TitleProjectFeature>
                                </ProjectName>
                                <ProjectDescription>
                                    <p>{project.Description}</p>
                                </ProjectDescription>
                                <StackList>
                                    {
                                        project.Tags.map((tag, index) =>
                                            <StackItem key={`tag-${tag}-${index}`} >{tag}</StackItem>
                                        )
                                    }
                                </StackList>
                            </LeftSide>
                            <CarouselImages Project={project}/>
                        </ProjectContainer>
                        {
                            (index + 1) !== projects.length  && <Divider divided={index % 2 == 0} className="d-flex align-items-center mb-5"></Divider>
                        }
                    </>
                )
            }

            <PageHeader Title={"Others"}/>

            <div className="d-flex flex-wrap justify-content-center mb-5">
                {
                    subProjects.map((project, index) => <CardProject Project={project} key={`Project-Card-${index}`}/>)
                }
            </div>
        </ProjectPageSection>
    </FadeIn>
};
export default AboutPage;

const CarouselImages = ({Project}: {Project: ProjectDataType}) => {
    return <ProjectImage className="w-50">
        <Carousel>
            {
                Project.Images && Project.Images.map((img,index) =>
                    <Carousel.Item interval={10000} key={`image-${index}`}>
                        <ImageOverlay ImageUrl={img && img} Width={600} Height={300}/>
                    </Carousel.Item>
                )
            }
        </Carousel>
    </ProjectImage>
}

type CardPropsType = {
    Project: ProjectDataType
}
const CardProject = ({Project}: CardPropsType) => {
  return <>
      <ProjectContent className="px-2 mt-2 mb-2 col-sm-6 col-md-4 col-lg-4">
          <ProjectFolder className="p-2 d-flex flex-column justify-content-between h-100">
              <div className="d-flex justify-content-between">
                  <HeadIcon>_</HeadIcon>
                  <LinkContainer className="d-flex flex-row">
                      {Project.RepositoryUrl && <a className="p-2" href={Project.RepositoryUrl} target="_blank"><BsFolderSymlink/></a> }
                      {Project.WebUrl && <a className="p-2" href={Project.WebUrl} target="_blank"><BsGlobe2/></a> }
                  </LinkContainer>
              </div>
              <ProjectH6 className="m-0 d-flex justify-content-start flex-nowrap align-items-center">[{Project.Title}]</ProjectH6>
              <ProjectDescription>
                  <p>{Project.Description}</p>
              </ProjectDescription>
              <StackList>
                  {
                      Project.FeaturedTags && Project.FeaturedTags.map(tag =>
                          <StackItem>{tag}</StackItem>
                      )
                  }
              </StackList>
          </ProjectFolder>
      </ProjectContent>
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
    height: 300px;
    @media ${devicesMax.tablet} {
        width: 100% !important;
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
        font-size: 12px;
    } 
    & h3 {
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

const ProjectH6 = styled.h6`
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
