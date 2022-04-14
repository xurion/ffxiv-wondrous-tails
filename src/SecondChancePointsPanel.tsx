import styled from "styled-components";

const Wrapper = styled.div`
  left: 132px;
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

const Separator = styled.span`
  border-left: 1px solid #000;
  border-right: 1px solid #fff;
  display: inline-block;
  height: 16px;
  margin: 0 15px;
  position: relative;
  top: 2px;
`;

type SecondChancePointsPanelProps = {
  onReset: () => void;
  onReshuffle: () => void;
};
const SecondChancePointsPanel = ({
  onReset,
  onReshuffle,
}: SecondChancePointsPanelProps) => {
  return (
    <Wrapper>
      <Button onClick={onReset}>Reset</Button>
      <Separator />
      <Button onClick={onReshuffle}>Reshuffle</Button>
    </Wrapper>
  );
};

export default SecondChancePointsPanel;
