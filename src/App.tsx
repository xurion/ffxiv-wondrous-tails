import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import getAllCombinations, { Combination } from "./combinations";
import WinningComboGrid from "./WinningComboGrid";
import Board from "./Board";
import Cell from "./Cell";
import Footer from "./Footer";

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
    let potentialCombo = true;
    const allFalse = c.indexOf(true) === -1;
    if (allFalse) {
      return true;
    }

    for (let i = 0; i < 16; i++) {
      if (c[i] === true && w[i] === false) {
        potentialCombo = false;
        break;
      }
    }

    return potentialCombo;
  };

  const getPotentialCombos = (combination: Combination): Combination[] => {
    const potentialCombos: Combination[] = [];
    const winningCombos = getAllCombinations();
    winningCombos.forEach((winningCombo) => {
      if (compareCombos(winningCombo, combination)) {
        potentialCombos.push(winningCombo);
      }
    });
    return potentialCombos;
  };

  const cells = [];
  for (let i = 0; i < 16; i++) {
    cells.push(
      <Cell
        active={cellStates[i]}
        onClick={() => handleCellClick(i)}
        img={i + 1}
        key={i.toString()}
      />
    );
  }

  return (
    <>
      <div>{getActiveCount()}/9</div>
      <Board>{cells}</Board>
      {getPotentialCombos(cellStates).map((combo, i) => (
        <WinningComboGrid combo={combo} key={i.toString()} />
      ))}
      <Footer />
    </>
  );
}

export default App;
