import { use_day_1_input } from "../inputs/inputs.ts";

const depths = use_day_1_input()

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