import styled from "styled-components";

const HelpWrapper = styled.div`
  color: #fff;
  left: 90px;
  position: absolute;
  text-shadow: 0 0 2px #000;
  top: 537px;
  width: 400px;
`;

export const HelpP = styled.p<{ bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  margin-bottom: 10px;
`;

export const HelpA = styled.a`
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #fff;
  }
`;

export const HelpUl = styled.ul``;

export const HelpLi = styled.li<{ faded?: boolean }>`
  opacity: ${({ faded }) => (faded ? "0.5" : "1")};
`;

type HelpProps = {
  children: JSX.Element;
};

const Help = ({ children }: HelpProps) => {
  return <HelpWrapper>{children}</HelpWrapper>;
};

export default Help;
