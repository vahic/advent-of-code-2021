import { match } from 'ts-pattern'
import { Direction, Instruction, usePlannedCourse } from "./common.ts";

interface SubmarinePosition {
    depth: number,
    horizontal: number
}

function execute_instruction(from:SubmarinePosition, instruction:Instruction):SubmarinePosition{
    return match(instruction.direction)
    .with(Direction.FORWARD, () => ({...from, horizontal: from.horizontal + instruction.distance}))
    .with(Direction.UP, () => ({...from, depth: from.depth - instruction.distance}))
    .with(Direction.DOWN, () => ({...from, depth: from.depth + instruction.distance}))
    .exhaustive()
}


const plannedCourse = usePlannedCourse()
const finalPosition = plannedCourse.reduce(execute_instruction, {depth: 0, horizontal: 0})

console.log(finalPosition.depth * finalPosition.horizontal)