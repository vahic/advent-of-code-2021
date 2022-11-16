import { use_day_1_input } from "../inputs/inputs.ts";
import { sum } from "lodash"

const depths = use_day_1_input();

const { increases } = depths.reduce(
  ({ previousWindow, increases }, depth) => {
    const newWindow =  [...previousWindow.slice(-2), depth]
    
    return {
      previousWindow: newWindow,
      increases: previousWindow.length === 3 &&  sum(newWindow) > sum(previousWindow)
        ? increases + 1
        : increases,
    };
  },
  { previousWindow: [] as number[], increases: 0 },
);

console.log(increases);
