import { detect as detectEOL } from "std/fs/eol.ts";

export function use_day_1_input(){
    const inputText = Deno.readTextFileSync("./inputs/day1.txt")
    return inputText.split(detectEOL(inputText) ?? "").map((s) => parseInt(s))
}

export function use_day_2_input(){
    const inputText = Deno.readTextFileSync("./inputs/day2.txt")
    return inputText.split(detectEOL(inputText) ?? "")
}

export function use_day_3_input(){
    const inputText = Deno.readTextFileSync("./inputs/day3.txt")
    return inputText.split(detectEOL(inputText) ?? "")
}