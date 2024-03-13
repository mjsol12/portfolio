import style from "styled-components";
import ImageOverlay from "../components/image-overly";
import PageHeader from "../components/page-header";
import FadeIn from "../components/fade-in";
import { devicesMax } from "../config/devices";

const introduction = [
  `Hello there! I'm Mark Solano, hailing from the Philippines and currently part of a remote dynamic team. As a software developer, my primary focus revolves around implementing robust features, crafting intuitive interfaces, maintaining bug-free code, and constantly honing my skills to stay abreast of the latest developments in the tech stack.`,
  `While my academic background is rooted in social studies, my passion for creative problem-solving and a relentless pursuit of knowledge steered me towards a career in software development. I've had the privilege of collaborating with seasoned professionals in the field, which has greatly enriched my learning journey.`,
  `Outside the realm of coding, I find joy in exploring the open road on my motorcycle, capturing breathtaking landscapes through my lens, and cherishing quality time with friends and family over the weekends. I also have a penchant for staying informed by delving into articles, news, and books, with the occasional indulgence in online gaming to unwind.`,
];

const AboutPage = () => {
  const title = "About me";

  return (
    <FadeIn key={`About-Me-Page`} className="container">
      <SectionPage id="about">
        <PageHeader Title={title} />
        <AboutRoot>
          <AboutContainer width="75%">
            <TextContainer className="container mb-5">
              {introduction.map((intro, i) => (
                <SectionDescription key={i}>{intro}</SectionDescription>
              ))}
            </TextContainer>
          </AboutContainer>
          <AboutContainer width="50%" className="mx-3">
            <ImageOverlay
              alt="Mark Solano Image"
              ImageUrl={"/img/myself5.jpg"}
              Width={168}
            />
          </AboutContainer>
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
                <ListItem className="ps-3">Remix</ListItem>
                <ListItem className="ps-3">React</ListItem>
                <ListItem className="ps-3">Angular</ListItem>
                <ListItem className="ps-3">NodeJs</ListItem>
              </SectionList>
            </TextContainer>
          </AboutContainer>
        </div>
      </SectionPage>
    </FadeIn>
  );
};
export default AboutPage;

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
    width: ${(props: { width: string }) =>
      props.width ? props.width : "100%"};
    @media ${devicesMax.tablet} {
        width: 100%;
        margin: 0 !important;
    }
`;

const SectionDescription = style.div`
    font-size: .8rem;
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
    background: linear-gradient( rgb(0 0 0 / 2%), rgb(0 0 0 / 1%) );
    box-shadow: 0px 0px 10px #0000000a;
    position: relative;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
