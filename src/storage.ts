import { Combination } from "./combinations";
const STORAGE_KEY = "wt_combo";

const load = (defaultCombo: Combination): Combination => {
  const existingCombo = window.localStorage.getItem(STORAGE_KEY);
  return existingCombo ? JSON.parse(existingCombo) : defaultCombo;
};

const save = (combo: Combination) =>
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(combo));

export { load, save };
