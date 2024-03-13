import styled from "styled-components";
import PageHeader from "../components/page-header";
import { Experiences } from "../config/experience";
import { ExperienceType } from "../model";
import FadeIn from "../components/fade-in";

const HomePage = () => {
  const title = "Experience";
  const experiences: ExperienceType[] = Experiences;
  return (
    <FadeIn key={"Experience-Page"} className="container">
      <SectionPage id="experience">
        <PageHeader Title={title} />
        <div className="d-flex flex-column">
          {experiences.map((exp, index) => (
            <div key={`experience-${index}`} className="mb-5">
              <div className="d-flex flex-column">
                {exp.Url ? (
                  <LinkTab href={exp.Url} target="_blank">
                    <h2>{exp.Company}</h2>
                  </LinkTab>
                ) : (
                  <h2>{exp.Company}</h2>
                )}
                <SectionH2 className="m-0">{exp.Position}</SectionH2>
              </div>
              <SectionH3 className="mb-4">{exp.Year}</SectionH3>
              <div>Job Descriptions</div>
              <ul>
                {exp.Jobs.map((job, index) => (
                  <List key={`Job-${index}`}>
                    <p className="m-0">{job}</p>
                  </List>
                ))}
              </ul>
              <div>Stacks Encountered</div>
              <ul>
                {exp.Stacks.map((tech, index) => (
                  <List key={`Tech-${index}`}>
                    <p className="m-0">{tech}</p>
                  </List>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionPage>
    </FadeIn>
  );
};
export default HomePage;

const SectionPage = styled.section`
  color: var(--white-dart);
  & p {
    font-size: 0.7rem;
  }
`;

const SectionH2 = styled.h2`
  margin-left: 20px;
  background-color: var(--white-dart-light);
  font-size: 1.5rem;
  padding: 0px 20px;
`;
const SectionH3 = styled.h3`
  text-indent: 25px;
  font-size: 1rem;
`;

const List = styled.li`
  list-style-type: disclosure-closed;
  font-size: 0.7rem;
`;

const LinkTab = styled.a`
  color: var(--green) !important;
`;
