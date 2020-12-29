import React, { useState } from "react";
import styled from "styled-components";

type CellProps = {
  selected?: boolean;
};
const Cell = styled.td<CellProps>`
  ${(props) => `
    background: ${props.selected ? "#ccc" : "#fff"};
    cursor: pointer;
    font-size: 100px;
    padding: 0 30px;
    text-align: center;

    &:hover {
      
    }
  `}
`;

function App() {
  const [cellStates, setCellStates] = useState<boolean[]>(
    new Array(16).fill(false)
  );

  const handleCellClick = (cell: number) => {
    const newCellsState = [...cellStates];
    newCellsState[cell] = !cellStates[cell];
    setCellStates(newCellsState);
  };

  return (
    <table>
      <tr>
        <Cell selected={cellStates[0]} onClick={() => handleCellClick(0)}>
          1
        </Cell>
        <Cell selected={cellStates[1]} onClick={() => handleCellClick(1)}>
          2
        </Cell>
        <Cell selected={cellStates[2]} onClick={() => handleCellClick(2)}>
          3
        </Cell>
        <Cell selected={cellStates[3]} onClick={() => handleCellClick(3)}>
          4
        </Cell>
      </tr>
      <tr>
        <Cell selected={cellStates[4]} onClick={() => handleCellClick(4)}>
          5
        </Cell>
        <Cell selected={cellStates[5]} onClick={() => handleCellClick(5)}>
          6
        </Cell>
        <Cell selected={cellStates[6]} onClick={() => handleCellClick(6)}>
          7
        </Cell>
        <Cell selected={cellStates[7]} onClick={() => handleCellClick(7)}>
          8
        </Cell>
      </tr>
      <tr>
        <Cell selected={cellStates[8]} onClick={() => handleCellClick(8)}>
          9
        </Cell>
        <Cell selected={cellStates[9]} onClick={() => handleCellClick(9)}>
          10
        </Cell>
        <Cell selected={cellStates[10]} onClick={() => handleCellClick(10)}>
          11
        </Cell>
        <Cell selected={cellStates[11]} onClick={() => handleCellClick(11)}>
          12
        </Cell>
      </tr>
      <tr>
        <Cell selected={cellStates[12]} onClick={() => handleCellClick(12)}>
          13
        </Cell>
        <Cell selected={cellStates[13]} onClick={() => handleCellClick(13)}>
          14
        </Cell>
        <Cell selected={cellStates[14]} onClick={() => handleCellClick(14)}>
          15
        </Cell>
        <Cell selected={cellStates[15]} onClick={() => handleCellClick(15)}>
          16
        </Cell>
      </tr>
    </table>
  );
}

export default App;
