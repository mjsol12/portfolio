import React from 'react';
import styled from "styled-components";
import {BsGithub, BsGoogle, BsLinkedin} from "react-icons/bs";

const Footer = () => {
    const footer = [
        {
            icon: <BsGithub/>,
            target: '_blank',
            href:'https://github.com/mjsol12'
        },
        {
            icon: <BsLinkedin/>,
            target: '_blank',
            href:'https://www.linkedin.com/in/mark-jones-solano-b17624147'
        },
        {
            icon: <BsGoogle/>,
            target: '_self',
            href:'mailto:mjsolano12345@gmail.com'
        }
    ];
    return (
        <PageFooter id="footer">
            <div className="container text-center">
                <FooterText className="mb-0">Built & Created By Mark Solano
                    {
                        footer.map(val =>
                            <FooterLink target={val.target} href={val.href}>{val.icon}</FooterLink>
                        )
                    }
                </FooterText>
            </div>
        </PageFooter>
    )
};
export default Footer;

const PageFooter = styled.footer`
    padding: 10px;
    position: fixed !important;
    background-color: var(--main-color);
`;
const FooterText = styled.p`
    color: #748182;
    margin: 0;
    line-height: 1.6;
    font-size: 13px;
`;

const FooterLink = styled.a`
    color: var(--white);
    text-decorator: none;
    padding: 0 3px;
`;
