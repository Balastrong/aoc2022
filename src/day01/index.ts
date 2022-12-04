import run from "aocrunner";
import { sum } from "../utils/index.js";

const parseInput = (rawInput: string) => {
  const sums = rawInput
    .split("\n\n")
    .map((group) => group.split("\n"))
    .map((group) => sum(group));

  sums.sort((a, b) => b - a);

  return sums;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return input[0];
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return sum(input.slice(0, 3));
};

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
});
