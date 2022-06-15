import React from "react";
import styled from "styled-components";
import {Experiences} from "../config/exprence";
import {ExperienceType} from "../model";

const HomePage = () => {
    const title = 'Experience';
    const experiences: ExperienceType[] = Experiences;
    return <SectionPage id="experience" className="container" >
        <SectionH1>{title}</SectionH1>
        <div className="d-flex flex-column align-items-center">
            {
                experiences.map((exp,index) =>
                    <div key={`experience-${index}`} className="mb-5">
                        <div className="d-flex flex-column">
                            <h3>{ exp.Url ? <a href={exp.Url} target="_blank">{exp.Company}</a> : exp.Company}</h3>
                            <SectionH3 className="m-0">{exp.Position}</SectionH3>
                        </div>
                        <SectionH5 className="mb-4">{exp.Year}</SectionH5>
                        <div>Job Descriptions</div>
                        <ul>
                            {
                                exp.Jobs.map((job,index) =>
                                    <List key={`Job-${index}`}><p className="m-0">{job}</p></List>
                                )
                            }
                        </ul>
                        <div>Stacks Encountered</div>
                        <ul>
                            {
                                exp.Stacks.map((tech,index) =>
                                    <List key={`Tech-${index}`}><p className="m-0">{tech}</p></List>
                                )
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    </SectionPage>
};
export default HomePage

const SectionPage = styled.section`
    color: var(--white-dart);
    & p {
        font-size: 0.7rem;
    }
`;

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

const SectionH3 = styled.h3`
        margin-left: 20px;
        background-color: var(--white-dart-light);
        font-size: 1.5rem;
        padding: 0px 20px;
`;
const SectionH5 = styled.h5`
    text-indent: 25px;
    font-size: 1rem;
`;

const List = styled.li`
    list-style-type: disclosure-closed;
    font-size: .7rem;
`;
