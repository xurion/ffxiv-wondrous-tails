import React from "react";
import styled from "styled-components";
import { Combination } from "./combinations";

const Grid = styled.div`
  background: #e3d69c;
  border: 1px solid #969074;
  display: inline-block;
  font-size: 0;
  margin: 0 12px 12px 0;
  padding: 3px;
  width: 72px;
`;

type CellProps = {
  active?: boolean;
};
const Cell = styled.div<CellProps>`
  ${(props) => `
    background: ${props.active ? "#fff" : "transparent"};
    border: 2px solid ${props.active ? "#fff" : "rgba(255,255,255,0.4)"};
    border-radius: 50%;
    display: inline-block;
    height: 14px;
    margin: 1px;
    width: 14px;
  `}
`;

type ComboGridProps = {
  combo: Combination;
};
const ComboGrid = (props: ComboGridProps) => {
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

export default ComboGrid;
