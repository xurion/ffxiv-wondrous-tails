import styled from "styled-components";
import { Combination } from "./combinations";
import ComboGrid from "./ComboGrid";

const Wrapper = styled.div`
  left: 571px;
  position: absolute;
  top: 347px;
  width: 340px;
`;
const PlusMore = styled.span`
  color: #876a1a;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  right: 15px;
  text-align: right;
  top: 415px;
`;

type ThreeLineCombosProps = {
  combos: Combination[];
  activeCombo: Combination;
};
const ThreeLineCombos = ({ combos, activeCombo }: ThreeLineCombosProps) => {
  return (
    <Wrapper>
      {combos.slice(0, 20).map((combo, i) => (
        <ComboGrid
          fullCombo={combo}
          activeCombo={activeCombo}
          key={i.toString()}
        />
      ))}
      {combos.length > 20 && (
        <PlusMore>+ {combos.length - 20} more...</PlusMore>
      )}
    </Wrapper>
  );
};

export default ThreeLineCombos;
