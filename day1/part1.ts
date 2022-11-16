import { detect as detectEOL } from "std/fs/eol.ts";

const inputText = Deno.readTextFileSync("./day1/input.txt");

const depths = inputText.split(detectEOL(inputText) ?? "").map((s) => parseInt(s));

const {increases} = depths.reduce(
  (state, depth) => ({
    previousDepth: depth,
    increases: state.previousDepth && state.previousDepth < depth
      ? state.increases + 1
      : state.increases,
  }),
  { previousDepth: null as null | number, increases: 0 },
);

console.log(increases)