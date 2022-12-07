import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const messageSize = 4;

  for (let i = 0; i < input.length; i++) {
    if (new Set(input.slice(i, i + messageSize)).size === messageSize)
      return i + messageSize;
  }
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const messageSize = 14;

  for (let i = 0; i < input.length; i++) {
    if (new Set(input.slice(i, i + messageSize)).size === messageSize)
      return i + messageSize;
  }
};

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
});
