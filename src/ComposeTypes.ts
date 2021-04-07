export type MyBool = true | false;
export type widowStates = "open" | "closed" | "minimised";
export type oddNumbers = 1 | 3 | 5 | 7 | 9;
export const getLength = function (obj: string | string[]) {
  return obj.length;
};
export const getReverse = function (obj: string | string[]): string | string[] {
  if (typeof obj === "string") {
    return [obj];
  } else {
    return obj[0];
  }
};
