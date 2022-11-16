import { Bit, flip_bit, sum_bits_log, use_bit_logs } from "./common.ts";

function findRatingBits(bitLogs: Bit[][], valueForThreshold: Bit, flipCriteriaBit:boolean):Bit[]{
    //TODO: implement
    return ['1', '1', '0'];
}


const bitLogs = use_bit_logs()

const  o2RatingBits = findRatingBits(bitLogs, '1', false) 
const co2RatingBits = findRatingBits(bitLogs, '0', true) 

const  o2Rating = parseInt(o2RatingBits.join(''), 2)
const co2Rating = parseInt(co2RatingBits.join(''), 2)

console.log(o2Rating * co2Rating)