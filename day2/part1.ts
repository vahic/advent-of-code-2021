import { isEnumValue } from "../common/utils.ts";
import { use_day_2_input } from "../inputs/inputs.ts";
import { match } from 'ts-pattern'

interface SubmarinePosition {
    depth: number,
    horizontal: number
}

enum Direction {
    UP = 'up',
    DOWN = 'down',
    FORWARD = 'forward'
}

interface Instruction {
    direction: Direction,
    distance: number
}

function parse_instruction(text: string):Instruction {
    const [direction, distanceString] = text.split(' ')
    if(!isEnumValue(Direction, direction)){
        throw `Cannot parse direction, invalid value ${direction}`
    }

    return { direction, distance: parseInt(distanceString) }
}

function execute_instruction(from:SubmarinePosition, instruction:Instruction):SubmarinePosition{
    return match(instruction.direction)
    .with(Direction.FORWARD, () => ({...from, horizontal: from.horizontal + instruction.distance}))
    .with(Direction.UP, () => ({...from, depth: from.depth - instruction.distance}))
    .with(Direction.DOWN, () => ({...from, depth: from.depth + instruction.distance}))
    .exhaustive()
}


const plannedCourse = use_day_2_input().map(parse_instruction)

const finalPosition = plannedCourse.reduce(execute_instruction, {depth: 0, horizontal: 0})

console.log(finalPosition.depth * finalPosition.horizontal)