import React from 'react';
import './App.css';
import {NavBar} from "./components";
import {Outlet} from "react-router-dom";
import FadeIn from './components/fade-in';
import {BsGithub, BsGoogle, BsLinkedin} from "react-icons/bs";
import styled from "styled-components";
import useMediaQuery from "./hooks/UseMediaQuery";
import {devicesMax} from "./config/devices";

const App = () => {
  const mediaTablet = useMediaQuery(devicesMax.tablet);
  const footer = [
    {
      icon: <BsGithub/>,
      target: '_blank',
      href:'https://github.com/mjsol12',
      title: "Github"
    },
    {
      icon: <BsLinkedin/>,
      target: '_blank',
      href:'https://www.linkedin.com/in/mark-jones-solano-b17624147',
      title: 'LinkIn'
    },
    {
      icon: <BsGoogle/>,
      target: '_self',
      href:'mailto:mjsolano12345@gmail.com',
      title: 'Google Account'
    }
  ];
  return (
    <main>
      <FadeIn  key={`App-Main-Page`}>
        <NavBar/>
        <section id="router-body" className="d-flex mb-5">
          <Outlet />
        </section>
        {/*<SocialList>*/}
        {/*  {*/}
        {/*    !mediaTablet && footer.map((val, index) =>*/}
        {/*      <ListTag2 key={`social-media-tag-${index}`}>*/}
        {/*        <SocialMediaLink key={`footer-icons#${index}`} aria-label={val.title} target={val.target} href={val.href}>{val.icon}</SocialMediaLink>*/}
        {/*      </ListTag2>*/}
        {/*    )*/}
        {/*  }*/}
        {/*</SocialList>*/}
      </FadeIn>
    </main>
  )
};
export default App;

const SocialList = styled.footer`
  position: sticky;
  bottom: 50%;
  direction: rtl;
  background: transparent;
  margin-right: 1.5rem;
  z-index: 0;
`;

const ListTag2 = styled.div`
    list-style: none;
    margin: 25px 0;
    a {
        text-decoration: none;
        color: var(--dark-slate);
        &:hover {
            color: var(--green);
        }
        &:active {
            color: var(--green);
        }
    }
`;

const SocialMediaLink = styled.a`
    text-decorator: none;
    padding: 0 3px;
    svg {
        width: 1.8rem;
        height: 1.8rem;
    }
     &:hover {
        color: var(--green);
     }
`;
