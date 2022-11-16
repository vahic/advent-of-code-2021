import { flip_bit, sum_bits_log, use_bit_logs } from "./common.ts";

const bitLogs = use_bit_logs()
const resultBits = sum_bits_log(bitLogs);

const gammaRate = parseInt(resultBits.join(""), 2);
const epsilonRate = parseInt(resultBits.map(flip_bit).join(""), 2);

console.log(gammaRate * epsilonRate);
