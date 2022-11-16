import { use_day_3_input } from "../inputs/inputs.ts";

export type Bit = '1' | '0'

const logs = use_day_3_input();

export const use_bit_logs = () => logs.map((log) => log.split("")) as Bit[][];


function sum_array_members(array1: number[], array2: number[]): number[] {
  if (array1.length !== array2.length) {
    throw "For simplicity we only implement adding 2 arrays of the same size";
  }

  return array1.map((value, index) => value + array2[index]);
}



export function flip_bit(bit: Bit): Bit {
  return bit === "0" ? "1" : "0"
}

export function sum_bits_log(bitLogs: Bit[][], valueForThreshold:Bit = '1') {
  /*
Sum every colums vertically (in base 10) like :

0 0 1 1
1 0 1 1
1 1 0 1
1 0 0 0
3 1 2 3 < sum
  */
  const columsTotals = bitLogs
    .map((log) => log.map((digit) => parseInt(digit))) // Parse every bit to 1/0 number
    .reduce(
      (totals, logValues) => sum_array_members(totals, logValues),
      Array(logs[0].length).fill(0),
    );

  const threshold = logs.length / 2;

  /*
Returning to binary by applying the threshold: if more than half the lines contained a 1 we mark 1, otherwise 0
If the value is perfectly equal to threshold, we mark the "valueForThreshold" parameter (only used in part 2)

0 0 1 1
1 0 1 1
1 1 0 1
1 0 0 0
3 1 2 3 < sum
1 0 x 1 < binary, threshold is 2 because there is 4 lines in this example input. x = valueForThreshold
  */
  return columsTotals.map((total) =>
    total === threshold ? valueForThreshold : (total > threshold ? "1" : "0")
  );
}

