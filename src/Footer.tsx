import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-size: 12px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledP>
      Created by{" "}
      <a
        href="https://eu.finalfantasyxiv.com/lodestone/character/2387352"
        target="_blank"
        rel="noopener noreferrer"
      >
        Xurion Uroxin
      </a>{" "}
      of Cerberus |{" "}
      <a
        href="https://github.com/xurion"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <br />
      This website is not affiliated with Square Enix.
      <br />
      &copy; 2010 - {new Date().getFullYear()} SQUARE ENIX CO., LTD. All Rights
      Reserved.
    </StyledP>
  );
};

export default Footer;
