import styled from "styled-components";

const HelpWrapper = styled.div`
  color: #fff;
  left: 90px;
  position: absolute;
  text-shadow: 0 0 2px #000;
  top: 537px;
  width: 400px;
`;

export const HelpP = styled.p`
  margin-bottom: 10px;
`;

export const HelpA = styled.a`
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #fff;
  }
`;

type HelpProps = {
  children: JSX.Element;
};

const Help = ({ children }: HelpProps) => {
  return <HelpWrapper>{children}</HelpWrapper>;
};

export default Help;
