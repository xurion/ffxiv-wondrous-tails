import styled from "styled-components";

const Wrapper = styled.div`
  left: 125px;
  position: absolute;
  top: 457px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 6px #000;

  &:focus {
    outline: none;
  }
`;

type SecondChancePointsPanelProps = {
  onReset: () => void;
};
const SecondChancePointsPanel = ({ onReset }: SecondChancePointsPanelProps) => {
  return (
    <Wrapper>
      <Button onClick={onReset}>Reset</Button>
    </Wrapper>
  );
};

export default SecondChancePointsPanel;
