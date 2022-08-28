import React, {useState} from "react";
import styled from "styled-components";
import {Link, LinkProps, useMatch, useResolvedPath} from "react-router-dom";
import {NavigationData} from "../config/data-navs";
import {BsGithub, BsGoogle, BsLinkedin, BsList, BsX} from "react-icons/bs"
import {devicesMax} from "../config/devices";
import useMediaQuery from "../hooks/UseMediaQuery";
import {Dropdown} from "react-bootstrap";

const CustomLink = ({ children, to, ...props }: LinkProps)  => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link style={{ textDecoration: match ? "underline" : "none" }} to={to} {...props}>
            {children}
        </Link>
    );
};

const NavBar = () => {
    const [open, setOpen] = useState(false);
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
    const openModal = (openM?: boolean) => {
        if(!mediaTablet){
            return
        }
        setOpen(prevState => {
            if(!prevState) {
                document.body.classList.add('blur');
                document.getElementById('router-body')?.classList.add('main-blur');
            } else {
                document.body.classList.remove('blur');
                document.getElementById('router-body')?.classList.remove('main-blur');
            }
            return openM ? openM : !prevState;
        });
    };

    const handleClickOutside = (event: any) => {
        const target = event.target || event.srcElement || event.currentTarget;
        const sideNav = document.getElementById('side-nav');
        if (sideNav && !sideNav.contains(target)){
            openModal();
        }
    };

    return (
        <NavBarWrapper>
            <nav className="d-flex justify-content-between justify-content-xxl-around">
                <HomePage className="d-flex position-relative">
                    <div>
                        <TextContainer className="container">
                            <Link to={'/home'} onClick={() => open && openModal(false)}>
                                <SectionH1>
                                    <FirstSpan>Mark</FirstSpan>
                                    <SecondSpan>Solano</SecondSpan>
                                </SectionH1>
                            </Link>
                        </TextContainer>
                    </div>
                </HomePage>
                <NavButtonContainer>
                    <NavButton type="button" aria-label="Expand Mobile Button" className="btn btn-link" onClick={() => openModal()}>
                        {open ? <BsX aria-hidden="true"/>:<BsList aria-hidden="true"/>}
                    </NavButton>
                </NavButtonContainer>
                <NavShow onClick={e => handleClickOutside(e)} open={open}>
                    <ul id="side-nav" className="nav navbar-nav navbar-right flex-md-row">
                        {
                            NavigationData.map((nav,index) =>
                                <ListTag key={`list-tag-${index}`}>
                                    <CustomLink to={nav.Section} onClick={() => openModal(false)} > {nav.Label} </CustomLink>
                                </ListTag>
                            )
                        }
                        <ListTag>
                            <DropDownList>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Download
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/files/Mark_Solano_Resume.pdf" target="_blank">Resume</Dropdown.Item>
                                        <Dropdown.Item href="/files/Mark_Solano_CV.pdf" target="_blank">CV</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </DropDownList>
                        </ListTag>
                        {
                            footer.map((val, index) =>
                                <ListTag2 key={`social-media-tag-${index}`}>
                                    <SocialMediaLink key={`footer-icons#${index}`} aria-label={val.title} target={val.target} href={val.href}>{val.icon}</SocialMediaLink>
                                </ListTag2>
                            )
                        }
                    </ul>
                </NavShow>
            </nav>
        </NavBarWrapper>
    );
};
export default NavBar

const HomePage = styled.div`
    z-index: 14;
    margin: 25px 20px 0;
`;
const NavShow = styled.div`
    display: flex;
    @media ${devicesMax.tablet} {
        visibility: ${(props: {open: boolean}) => props.open ? "visible": "hidden"};
        position: absolute;
        right: 0;
        height: 100vh;    
        width: 100%;    
        direction: rtl;
        background-color: #0031497a;
        top: 0;
        ul {
            align-items: center;
            justify-content: center;
            width: 50%;
            direction: ltr;
            height: 100%;
            background: var(--main-color);
            box-shadow: -10px 0px 30px -15px var(--navy-shadow);
        }
    }
`;

const NavButtonContainer = styled.div`
    display: none;
    @media ${devicesMax.tablet} {
        display: revert;
        z-index: 14;
    }
`;

const NavButton = styled.button`
    font-size: 2rem;
    color: var(--white-dart) !important;
`;

const DropDownList = styled.div`
   button {
       background-color: var(--main-color)!important;
       color: var(--white-dart)!important;
       border: 2px solid var(--white-dart);
       border-radius: 4px;
       padding: 0px 6px !important;
  }
  
  button:focus {
     box-shadow: none !important;
  }
  
  button:hover,
  button:focus,
  button:active {
      color: var(--white-dart) !important;
      background-color: var(--green-light) !important;
      border-color: inherit !important;
  }
  
  .dropdown-item:active {
    background-color:transparent !important;
  }
  .dropdown-item:focus {
    background-color:transparent !important;
  }
  .dropdown-item:hover {
    background-color:transparent !important;
  }
`;

const ResumeButton = styled.a`
    background-color: var(--main-color)!important;
    color: var(--white-dart)!important;
    border: 2px solid var(--white-dart);
    border-radius: 4px;
    padding: 0px 6px !important;
    :hover {
        color: var(--white-dart) !important;
        background-color: var(--green-light) !important;
    }
`;

const ListTag = styled.li`
    list-style: none;
    margin: 25px 20px 0;
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            color: var(--green);
        }
        &:active {
            color: var(--green);
        }
    }
`;

const ListTag2 = styled.li`
    list-style: none;
    margin: 25px 10px 0;
    a {
        text-decoration: none;
        color: inherit;
        &:hover {
            color: var(--green);
        }
        &:active {
            color: var(--green);
        }
    }
`;

const NavBarWrapper = styled.header`
    top: 0;
    z-index: 11;
    position: sticky;
    background: var(--main-color);
    padding: 1em;
    width: 100%;
    min-height: 60px;
    color: var(--white-dart);
    border-bottom: 1px solid #ebebeb;
    @media ${devicesMax.mobileL} {
        padding: 0 !important;
        margin: 0;
    }
`;
const SectionH1 = styled.h1`
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 0;
`;

const FirstSpan = styled.span`
    font-weight: 500;
    background: var(--dark-slate);
    color: var(--white-pure); 
    padding: 0px 6px;
`;

const SecondSpan = styled.span`
      font-weight: 500;
      color: var(--white-dart); 
      padding: 0px 6px;
`;

const TextContainer = styled.div`
    a {
        text-decoration: none;
    }
`;

const SocialMediaLink = styled.a`
    color: var(--white);
    text-decorator: none;
    padding: 0 3px;
    svg {
        width: 1.3rem;
        height: 1.3rem;
    }
     &:hover {
        color: var(--green);
     }
`;
