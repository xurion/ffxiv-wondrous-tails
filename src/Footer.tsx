import React from "react";

const Footer = () => {
  return (
    <p>
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
      This website is not affiliated to Square Enix.
      <br />
      &copy; 2010 - {new Date().getFullYear()} SQUARE ENIX CO., LTD. All Rights
      Reserved.
    </p>
  );
};

export default Footer;
