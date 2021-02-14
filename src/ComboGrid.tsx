import React from "react";
import styled from "styled-components";
import { Combination } from "./combinations";

const Grid = styled.div`
  background: #e3d69c;
  border: 1px solid #969074;
  display: inline-flex;
  flex-wrap: wrap;
  font-size: 0;
  margin: 0 12px 12px 0;
  padding: 3px;
  width: 72px;
`;

const CellWrapper = styled.div`
  width: 25%;
`;

type CellProps = {
  active: boolean;
  required: boolean;
};
const Cell = styled.div<CellProps>`
  ${(props) => {
    if (props.active && props.required) {
      return `
        background: #fff;
      `;
    }
    if (props.required) {
      return `
        background: #9a8c6b;
      `;
    }
    return `
      background: transparent;
      border: 2px solid rgba(255,255,255,0.4);
    `;
  }}
  border-radius: 50%;
  display: inline-block;
  height: 14px;
  margin: 1px;
  width: 14px;
`;

type ComboGridProps = {
  fullCombo: Combination;
  activeCombo: Combination;
};
const ComboGrid = (props: ComboGridProps) => {
  const { fullCombo, activeCombo } = props;
  const cells = [];
  for (let i = 0; i < 16; i++) {
    cells.push(
      <CellWrapper key={i.toString()}>
        <Cell active={activeCombo[i]} required={fullCombo[i]} />
      </CellWrapper>
    );
  }
  return <Grid>{cells}</Grid>;
};

export default ComboGrid;
