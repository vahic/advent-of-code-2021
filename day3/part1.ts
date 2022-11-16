import { use_day_3_input } from "../inputs/inputs.ts";

const logs = use_day_3_input()

function sum_array_members(array1:number[], array2:number[]):number[]{
    if(array1.length !== array2.length){
        throw 'For simplicity we only implement adding 2 arrays of the same size'
    }

    return array1.map((value, index) => value + array2[index])
}

function flip_bits(bits:string[]):string[] {
    return bits.map(bit => bit === '0' ? '1' : '0')
}

/*
Sum every colums vertically (in base 10) like :

0 0 1 1
1 0 1 1
1 1 0 1
1 0 0 0
3 1 2 3 < sum

*/
const columsTotals = logs
    .map(log => log.split('').map(digit => parseInt(digit))) // Split every log line in an array of 1/0 numbers
    .reduce((totals, logValues) => sum_array_members(totals, logValues), Array(logs[0].length).fill(0))

const threshold = logs.length / 2

/*
 Returning to binary by applying the threshold: if more than half the lines contained a 1 we mark 1, otherwise 0
 
0 0 1 1
1 0 1 1
1 1 0 1
1 0 0 0
3 1 2 3 < sum
1 0 0 1 < binary, threshold is 2 because there is 4 lines in this example input

*/
const resultBits = columsTotals.map(total => total > threshold ? '1' : '0')

const gammaRate = parseInt(resultBits.join(''), 2)
const epsilonRate = parseInt(flip_bits(resultBits).join(''), 2)

console.log(gammaRate * epsilonRate)