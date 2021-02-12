import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import getAllCombinations, { Combination } from "./combinations";
import ThreeLineCombos from "./ThreeLineCombos";
import Book from "./Book";
import Board from "./Board";
import Seal from "./Seal";
import Footer from "./Footer";
import ActiveCount from "./ActiveCount";
import SecondChancePointsPanel from "./SecondChancePointsPanel";
import LoadingIcon from "./LoadingIcon";
import { load, save } from "./storage";
import { TrackEvent } from "./analytics";
import Help, { HelpA, HelpP } from "./Help";
import RemainingSeals from "./RemainingSeals";
import NextReset from "./NextReset";

function App() {
  const loadedData = load(new Array(16).fill(false) as Combination);
  const [sealStates, setSealStates] = useState(loadedData);
  const [reshuffling, setReshuffling] = useState(false);

  const setAndPersistSealStates = (combo: Combination) => {
    setSealStates(combo);
    save(combo);
  };

  const handleCellClick = (cell: number) => {
    if (getActiveCount() === 9 && sealStates[cell] === false) {
      return;
    }

    const newSealState: Combination = [...sealStates];
    newSealState[cell] = !sealStates[cell];
    TrackEvent({
      eventName: newSealState[cell] ? "activate_seal" : "deactivate_seal",
      value: cell + 1,
    });
    setAndPersistSealStates(newSealState);
  };

  const getActiveCount = () =>
    sealStates.reduce((prev, curr) => (curr ? prev + 1 : prev), 0);

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

  const reset = () => {
    setAndPersistSealStates(new Array(16).fill(false) as Combination);
  };

  const handleResetClick = () => {
    TrackEvent({
      eventName: "reset_board",
      value: getActiveCount(),
    });
    reset();
  };

  const shuffleCombination = (combo: Combination) => {
    const shuffledCombo: Combination = [...combo];
    for (let i = shuffledCombo.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = shuffledCombo[i];
      shuffledCombo[i] = shuffledCombo[j];
      shuffledCombo[j] = temp;
    }
    return shuffledCombo;
  };

  const reshuffle = () => {
    setReshuffling(true);
    const active = getActiveCount();
    TrackEvent({
      eventName: "reshuffle_board",
      value: active,
    });
    reset();
    setTimeout(() => {
      const activePart = new Array(active).fill(true);
      const inactivePart = new Array(16 - active).fill(false);
      const combo = shuffleCombination([
        ...activePart,
        ...inactivePart,
      ] as Combination);
      setAndPersistSealStates(combo);
      setReshuffling(false);
    }, 1000);
  };

  const cells = [];
  for (let i = 0; i < 16; i++) {
    cells.push(
      <Seal
        visible={sealStates[i]}
        onClick={() => handleCellClick(i)}
        img={i + 1}
        key={i.toString()}
      />
    );
  }

  return (
    <>
      <Book>
        <NextReset />
        <ActiveCount count={getActiveCount()} />
        <Board>{cells}</Board>
        <RemainingSeals activeCombo={sealStates} />
        <SecondChancePointsPanel
          onReset={handleResetClick}
          onReshuffle={reshuffle}
        />
        <Help>
          <>
            <HelpP>
              Welcome to the FFXIV Wondrous Tails helper! Activate seals on the
              top right to get started.
            </HelpP>
            <HelpP>
              Line chance calculation coming soon. Feedback and suggestions
              welcome over on the{" "}
              <HelpA
                href="https://github.com/xurion/ffxiv-wondrous-tails/issues"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  TrackEvent({
                    eventName: "issue_tracker",
                  })
                }
              >
                issue tracker
              </HelpA>
              .
            </HelpP>
          </>
        </Help>
        {reshuffling ? (
          <LoadingIcon />
        ) : (
          <ThreeLineCombos
            combos={getPotentialCombos(sealStates)}
            activeCombo={sealStates}
          />
        )}
      </Book>
      <Footer />
    </>
  );
}

export default App;
