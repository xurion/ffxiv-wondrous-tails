import React, { useState } from "react";
import styled from "styled-components";
import getAllCombinations, { Combination } from "./combinations";
import WinningComboGrid from "./WinningComboGrid";

type CellProps = {
  active?: boolean;
};
const Cell = styled.td<CellProps>`
  ${(props) => `
    background: ${props.active ? "#ccc" : "#fff"};
    border: 1px solid #999;
    cursor: pointer;
    height: 100px;
    width: 100px;

    &:hover {
      border-color: #333;
    }
  `}
`;

function App() {
  const [cellStates, setCellStates] = useState<Combination>(
    new Array(16).fill(false) as Combination
  );

  const handleCellClick = (cell: number) => {
    if (getActiveCount() === 9 && cellStates[cell] === false) {
      return;
    }

    const newCellsState: Combination = [...cellStates];
    newCellsState[cell] = !cellStates[cell];
    setCellStates(newCellsState);
  };

  const getActiveCount = () =>
    cellStates.reduce((prev, curr) => (curr ? prev + 1 : prev), 0);

  const compareCombos = (w: Combination, c: Combination): boolean => {
    const allFalse = c.indexOf(true) === -1;
    if (allFalse) {
      return true;
    } else {
      for (let i = 0; i < 16; i++) {
        if (c[i] === true && w[i] === true) {
          return true;
        }
      }
    }

    return false;
  };

  const isPotentialThreeLineCombo = (combination: Combination): boolean => {
    const winningCombos = getAllCombinations();
    let potentialThreeLineCombo = false;
    winningCombos.forEach((winningCombo) => {
      if (compareCombos(winningCombo, combination)) {
        potentialThreeLineCombo = true;
        return;
      }
    });

    return potentialThreeLineCombo;
  };

  return (
    <>
      <div>{getActiveCount()}/9</div>
      <table>
        <tbody>
          <tr>
            <Cell active={cellStates[0]} onClick={() => handleCellClick(0)} />
            <Cell active={cellStates[1]} onClick={() => handleCellClick(1)} />
            <Cell active={cellStates[2]} onClick={() => handleCellClick(2)} />
            <Cell active={cellStates[3]} onClick={() => handleCellClick(3)} />
          </tr>
          <tr>
            <Cell active={cellStates[4]} onClick={() => handleCellClick(4)} />
            <Cell active={cellStates[5]} onClick={() => handleCellClick(5)} />
            <Cell active={cellStates[6]} onClick={() => handleCellClick(6)} />
            <Cell active={cellStates[7]} onClick={() => handleCellClick(7)} />
          </tr>
          <tr>
            <Cell active={cellStates[8]} onClick={() => handleCellClick(8)} />
            <Cell active={cellStates[9]} onClick={() => handleCellClick(9)} />
            <Cell active={cellStates[10]} onClick={() => handleCellClick(10)} />
            <Cell active={cellStates[11]} onClick={() => handleCellClick(11)} />
          </tr>
          <tr>
            <Cell active={cellStates[12]} onClick={() => handleCellClick(12)} />
            <Cell active={cellStates[13]} onClick={() => handleCellClick(13)} />
            <Cell active={cellStates[14]} onClick={() => handleCellClick(14)} />
            <Cell active={cellStates[15]} onClick={() => handleCellClick(15)} />
          </tr>
        </tbody>
      </table>
      <div>
        Potential combination:{" "}
        {isPotentialThreeLineCombo(cellStates).toString()}
      </div>
      {getAllCombinations().map((combo) => (
        <WinningComboGrid combo={combo} />
      ))}
    </>
  );
}

export default App;
