import styled from "styled-components";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const footer = [
    {
      icon: <BsGithub />,
      target: "_blank",
      href: "https://github.com/mjsol12",
      title: "Github",
    },
    {
      icon: <BsLinkedin />,
      target: "_blank",
      href: "https://www.linkedin.com/in/mark-jones-solano-b17624147",
      title: "LinkIn",
    },
    {
      icon: <BsGoogle />,
      target: "_self",
      href: "mailto:mjsolano12345@gmail.com",
      title: "Google Account",
    },
  ];
  return (
    <PageFooter id="footer">
      <div className="container">
        <FooterText className="mb-0">
          Built & Created By Mark Solano
          {footer.map((val, index) => (
            <FooterLink
              key={`footer-icons#${index}`}
              aria-label={val.title}
              target={val.target}
              href={val.href}
            >
              {val.icon}
            </FooterLink>
          ))}
        </FooterText>
      </div>
    </PageFooter>
  );
};
export default Footer;

const PageFooter = styled.footer`
  z-index: 14;
  padding: 10px;
  position: fixed !important;
  background-color: var(--main-color);
`;
const FooterText = styled.p`
  color: var(--white-dart);
  margin: 0;
  line-height: 1.6;
  font-size: 13px;
  display: flex;
  gap: 7px;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  color: var(--white);
  text-decorator: none;
  padding: 0 3px;
  &:hover {
    color: var(--green);
  }
`;
