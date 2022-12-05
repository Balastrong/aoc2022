import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const lines = rawInput.split("\n");
  const towerIndexes = Array.from({ length: 9 }, (_, i) => i * 4 + 1);
  const towers: string[][] = towerIndexes.map((_) => []);
  lines.slice(0, 8).forEach((l) => {
    towerIndexes.forEach((towerIndex, i) => {
      if (l[towerIndex] && l[towerIndex] !== " ") {
        towers[i].push(l[towerIndex]);
      }
    });
  });

  const moves = lines.slice(10).map((l) => {
    return l
      .split(" ")
      .map(Number)
      .filter((el) => !isNaN(el));
  });

  towers.forEach((t) => {
    t.reverse();
  });

  return { towers, moves };
};

const part1 = (rawInput: string) => {
  const { towers, moves } = parseInput(rawInput);

  moves.forEach((move) => {
    const [amount, source, target] = move;
    const tSource = towers[source - 1];
    const tTarget = towers[target - 1];

    const elements = tSource.splice(-amount);

    elements.reverse();
    tTarget.push(...elements);
  });

  return towers.map((t) => t.at(-1)).join("");
};

const part2 = (rawInput: string) => {
  const { towers, moves } = parseInput(rawInput);

  moves.forEach((move) => {
    const [amount, source, target] = move;
    const tSource = towers[source - 1];
    const tTarget = towers[target - 1];

    const elements = tSource.splice(-amount);

    //elements.reverse(); // Just avoid reversing the crates
    tTarget.push(...elements);
  });

  return towers.map((t) => t.at(-1)).join("");
};

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
});
