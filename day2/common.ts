import { isEnumValue } from "../common/utils.ts";
import { use_day_2_input } from "../inputs/inputs.ts";

export enum Direction {
    UP = 'up',
    DOWN = 'down',
    FORWARD = 'forward'
}

export interface Instruction {
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

export const usePlannedCourse = () => use_day_2_input().map(parse_instruction)

