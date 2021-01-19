import React from "react";
import styled from "styled-components";
import { Combination } from "./combinations";

const Grid = styled.div`
  display: inline-block;
  font-size: 0;
  margin: 0 10px 10px 0;
  width: 88px;
`;

type CellProps = {
  active?: boolean;
};
const Cell = styled.div<CellProps>`
  ${(props) => `
    background: ${props.active ? "#ccc" : "#fff"};
    border: 1px solid #999;
    display: inline-block;
    height: 20px;
    margin: 1px;
    width: 20px;
  `}
`;

type WinningComboGridProps = {
  combo: Combination;
};
const WinningComboGrid = (props: WinningComboGridProps) => {
  const { combo } = props;
  const cells = [];
  for (let i = 0; i < 16; i++) {
    cells.push(<Cell active={combo[i]} key={i.toString()} />);
  }
  return (
    <>
      <Grid>{cells}</Grid>
    </>
  );
};

export default WinningComboGrid;
