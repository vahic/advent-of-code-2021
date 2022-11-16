import { match } from "ts-pattern";
import { Direction, Instruction, usePlannedCourse } from "./common.ts";

interface SubmarinePosition {
  depth: number;
  horizontal: number;
  aim: number;
}

function compute_vertical_travel(from: SubmarinePosition, travelDistance: number): number {
    return from.aim * travelDistance
}

function execute_instruction(
  from: SubmarinePosition,
  instruction: Instruction,
): SubmarinePosition {
  return match(instruction.direction)
    .with(
      Direction.FORWARD,
      () => ({
        ...from,
        horizontal: from.horizontal + instruction.distance,
        depth: from.depth + compute_vertical_travel(from, instruction.distance),
      }),
    )
    .with(
      Direction.UP,
      () => ({ ...from, aim: from.aim - instruction.distance }),
    )
    .with(
      Direction.DOWN,
      () => ({ ...from, aim: from.aim + instruction.distance }),
    )
    .exhaustive();
}

const plannedCourse = usePlannedCourse();
const finalPosition = plannedCourse.reduce(execute_instruction, { depth: 0, horizontal: 0, aim: 0 });

console.log(finalPosition.depth * finalPosition.horizontal);
