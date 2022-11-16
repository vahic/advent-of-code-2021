// Generic string enum type guard taken from https://stackoverflow.com/a/67933854
export const isEnumValue = <T extends { [k: string]: string }>(enumObject: T, token: string): token is T[keyof T] => Object.values(enumObject).includes(token);
