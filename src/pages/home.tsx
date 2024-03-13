import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import FadeIn from "../components/fade-in";
import { devicesMax } from "../config/devices";
import { BsPersonBoundingBox } from "react-icons/bs";

const HomePage = () => {
  const jobTitle = "Software Developer";
  return (
    <FadeIn key={"Home-Page"} className="container">
      <SectionPage id="home">
        <div>
          <IntroTag>
            <span>Hi, I'm a</span>
          </IntroTag>
        </div>
        <div>
          <PositionTag>
            <span>{jobTitle}</span>
          </PositionTag>
        </div>
        <ShowIn>
          <BuilderTag>I build things for the web.</BuilderTag>
        </ShowIn>
        <ShowIn>
          <p>Specializing in building exceptional web application services.</p>
        </ShowIn>
        <ShowIn>
          <p>Helping businesses minimize their cost and maximize operations.</p>
        </ShowIn>
        <ShowIn>
          <LinkToAbout>
            <Link to={"/about"}>
              <BsPersonBoundingBox /> Learn More
            </Link>
          </LinkToAbout>
        </ShowIn>
      </SectionPage>
    </FadeIn>
  );
};
export default HomePage;

const titleTyping = keyframes`
  100%{
    left: 100%;
    width: 0;
  }
`;

const showIn = keyframes`
     0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ShowIn = styled.div`
  animation: ${showIn} ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  opacity: 0;
`;

const SectionPage = styled.section`
  color: var(--white-dart) !important;
  & p {
    font-size: 0.7rem;
  }
  @media ${devicesMax.tablet} {
    font-size: 1.5rem;
    & p {
      font-size: 1rem;
    }
  }
`;

const IntroTag = styled.h1`
  font-size: 1.2rem;
  & span {
    position: relative;
  }
  & span::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background: var(--main-color);
    animation: ${titleTyping} 1s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
`;

const PositionTag = styled.h2`
  font-weight: bolder;
  text-indent: 1rem;
  letter-spacing: 0.1rem;
  font-size: 3.5rem;
  & span {
    position: relative;
  }
  & span::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    background: var(--main-color);
    animation: ${titleTyping} 2s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    animation-delay: 1s;
  }
  @media ${devicesMax.tablet} {
    text-indent: 0;
  }
`;
const BuilderTag = styled.h3`
  line-height: 5;
  @media ${devicesMax.tablet} {
    font-size: 2rem;
    line-height: 1;
  }
`;

const LinkToAbout = styled.div`
  a {
    text-decoration: none;
    color: var(--green);
  }
`;
