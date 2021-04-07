export default function () {
  /**
   * Generics provide variables to types.
   * A common example is an array.
   * An array without generics could contain anything.
   * An array with generics can describe the values that the array contains.
   */
  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectWithNameArray = Array<{ name: string }>;

  let a: StringArray = ["33"];
  let b: Array<string> = ["33"];
  let c: string[] = ["33"];

  console.log(a, b, c);

  let a1: ObjectWithNameArray = [{ name: "prashant" }, { name: "jacky" }];
  console.log(a1);

  //? Define your own types
  interface Backpack<Type> {
    getName: () => Type;
    add: (a1: number, a2: number) => number;
    sub: (a1: number, a2: Type) => Type;
  }

  // declare const backpack: Backpack<string>; // giving error
  const backpack: Backpack<string> = {
    getName: function () {
      return `'what's your name ?`;
    },
    add(a1, a2) {
      return a1 + a2;
    },
    sub(a1, a2) {
      return a2 + a1;
    },
  };
  const object = backpack.getName();
  console.log(object);
  console.log(backpack.add(4, 5));
  console.log(backpack.sub(4, "5"));

  interface Point {
    x: number;
    y: number;
  }

  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }

  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);

  const point3 = { x: 12, y: 26, z: 89 };
  logPoint(point3); // logs "12, 26"

  const rect = { x: 33, y: 3, width: 30, height: 80 };
  logPoint(rect); // logs "33, 3"

  // const color = { hex: "#187ABF" };
  // logPoint(color); // ! will be giving errors

  class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  const newVPoint = new VirtualPoint(13, 56);
  logPoint(newVPoint); // logs "13, 56"
}
