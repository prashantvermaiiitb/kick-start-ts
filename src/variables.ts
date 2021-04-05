export default function () {
  let a;
  const b = "hello man";

  let isBoolean: boolean = true;
  let number: number = 786;
  let name: string = "prashant";
  // ! this will be giving error
  //   name = true;
  let sentence: string = `I am beginner 
  ${isBoolean} with 
lucky Number as ${number} and 
name : ${name}`;

  // ? if they are being used and declared they cannot be assigned anyother value
  // ? so these are being used as the sub-type of the other types
  let n: null = null;
  let b1: undefined = undefined;
  //! this will give you error
  //   n = true;

  let baba: boolean = null;
  let kaka: string = undefined;
  console.log(baba, " and ", kaka);

  const declaringArray = function () {
    let array1: number[] = [1, 2, 3];
    let array2: Array<number> = [1, 2, 3];
    console.log(array1, array2);

    let array3: string[] = ["d", "g"];
    console.log(array3);
    let array4: Array<boolean> = [true, false];
    console.log(array4);

    let array5: Array<Array<number>> = [[1], [2, 3], [4]];
    console.log("double dimension array...", array5);

    console.log("Array with mixed types");
  };

  const declareTuple = function () {
    let myNumber: number = 100;
    let sampleTuple: [string, number, boolean, number] = [
      "a",
      myNumber,
      true,
      -99,
    ];
    console.log(sampleTuple, "----", sampleTuple.length);

    // ! this will give error order is fixed alongwith Type.
    //sampleTuple = ["r", '212', false, 98923];
  };

  const decalareEnumTypes = function () {
    enum Color {
      Red,
      Green,
      Blue,
    }

    let colorGreen: Color = Color.Green;
    console.log(
      "🚀 ~ file: variables.ts ~ line 64 ~ decalareEnumTypes ~ colorGreen value is :",
      colorGreen
    );

    // ! cannot re-assign the value to the Enum
    // Color.Green = 6;

    enum Rating {
      NI = 0,
      ME = 10,
      EE,
      DE = 190
      ,
    }
    const myRating = Rating.DE;
    console.log(
      "🚀 ~ file: variables.ts ~ line 79 ~ decalareEnumTypes ~ Rating",Rating.DE
    );
  };

  
  declaringArray();
  declareTuple();
  decalareEnumTypes();
  let sentence2 = sentence;
  return sentence2;
}
