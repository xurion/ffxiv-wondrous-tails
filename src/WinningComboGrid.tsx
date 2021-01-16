import React from "react";
import styled from "styled-components";
import { Combination } from "./combinations";

const Table = styled.table`
  display: inline-block;
  margin: 0 10px 10px 0;
`;

type CellProps = {
  active?: boolean;
};
const Cell = styled.td<CellProps>`
  ${(props) => `
    background: ${props.active ? "#ccc" : "#fff"};
    border: 1px solid #999;
    height: 20px;
    width: 20px;
  `}
`;

type WinningComboGridProps = {
  combo: Combination;
};
const WinningComboGrid = (props: WinningComboGridProps) => {
  const { combo } = props;
  return (
    <>
      <Table>
        <tbody>
          <tr>
            <Cell active={combo[0]} />
            <Cell active={combo[1]} />
            <Cell active={combo[2]} />
            <Cell active={combo[3]} />
          </tr>
          <tr>
            <Cell active={combo[4]} />
            <Cell active={combo[5]} />
            <Cell active={combo[6]} />
            <Cell active={combo[7]} />
          </tr>
          <tr>
            <Cell active={combo[8]} />
            <Cell active={combo[9]} />
            <Cell active={combo[10]} />
            <Cell active={combo[11]} />
          </tr>
          <tr>
            <Cell active={combo[12]} />
            <Cell active={combo[13]} />
            <Cell active={combo[14]} />
            <Cell active={combo[15]} />
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default WinningComboGrid;
