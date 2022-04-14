import { Combination } from "./combinations";

/**
 * All possible line shapes from 4x cells per line.
 */
const lineShapes: Array<[number, number, number, number]> = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
];

/**
 * Returns the number of lines in the given Combination.
 */
function countLines(combo: Combination): number {
  let count = 0;
  for (const lineShape of lineShapes) {
    if (
      combo[lineShape[0]] &&
      combo[lineShape[1]] &&
      combo[lineShape[2]] &&
      combo[lineShape[3]]
    ) {
      ++count;
    }
  }
  return count;
}

function choose(set: number[], count: number): number[][] {
  if (count >= set.length) {
    return [[...set]];
  } else if (count === 0) {
    return [[]];
  } else {
    return [
      ...choose(set.slice(1), count - 1).map((x) => [set[0], ...x]),
      ...choose(set.slice(1), count),
    ];
  }
}

/**
 * Returns the probability percentage of achieving 1, 2 or 3 lines against the
 * given Combination.
 */
export default function calculateProbabilities(combo: Combination): {
  lines1: number;
  lines2: number;
  lines3: number;
} {
  const emptyIndices = Array(16)
    .fill(undefined)
    .map((_, index) => index)
    .filter((index) => !combo[index]);
  const possibleBoards = choose(
    emptyIndices,
    Math.max(emptyIndices.length - 7, 0)
  ).map((empties) => {
    const newCombo: Combination = [...combo];
    for (const index of empties) {
      newCombo[index] = true;
    }
    return newCombo;
  });

  const lineCounts = [0, 0, 0, 0];
  for (const possibleBoard of possibleBoards) {
    ++lineCounts[Math.min(countLines(possibleBoard), 3)];
  }

  return {
    lines1:
      ((lineCounts[1] + lineCounts[2] + lineCounts[3]) /
        possibleBoards.length) *
      100,
    lines2: ((lineCounts[2] + lineCounts[3]) / possibleBoards.length) * 100,
    lines3: (lineCounts[3] / possibleBoards.length) * 100,
  };
}
