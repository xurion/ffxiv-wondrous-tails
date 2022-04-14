import styled from "styled-components";

const StyledP = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  text-align: center;
`;

const Link = styled.a`
  color: #0056b3;
`;

const Footer = () => {
  return (
    <StyledP>
      Created by{" "}
      <Link
        href="https://eu.finalfantasyxiv.com/lodestone/character/2387352"
        target="_blank"
        rel="noopener noreferrer"
      >
        Xurion Uroxin
      </Link>{" "}
      of Cerberus |{" "}
      <Link
        href="https://github.com/xurion"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
      <br />
      This website is not affiliated with Square Enix.
      <br />
      &copy; 2010 - {new Date().getFullYear()} SQUARE ENIX CO., LTD. All Rights
      Reserved.
    </StyledP>
  );
};

export default Footer;
