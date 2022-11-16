import { isEnumValue } from "../common/utils.ts";
import { use_day_2_input } from "../inputs/inputs.ts";

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

const plannedCourse = use_day_2_input().map(parse_instruction)

console.log(plannedCourse)
