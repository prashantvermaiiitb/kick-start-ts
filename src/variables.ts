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
      DE = 190,
    }
    const myRating = Rating.DE;
    console.log(
      "🚀 ~ file: variables.ts ~ line 79 ~ decalareEnumTypes ~ Rating",
      Rating.DE
    );
  };
  /**
   * ! In this case we will be having errors at the Runtime not at the compile time.
   */
  const declareAnyType = function () {
    // let randomValue: any = 8993; // after this it's decided as the number
    let randomValue: any = function () {
      console.log("placeholder function");
    }; // after this it's decided as the number
    console.log(typeof randomValue);
    // randomValue.name = "prashant"; // ! this will give error at the runtime because name is internal property
    randomValue.name1 = "prashant"; // ! this will give error at the runtime because name is internal property
    randomValue.myfunction = function () {
      return "I am any type.";
    };
    console.log(
      "🚀 ~ file: variables.ts ~ line 86 ~ declareAnyType ~ randomValue",
      randomValue,
      randomValue.name,
      randomValue.name1,
      randomValue.myfunction()
    );
    //? point is typescript does not even throw any error on the above statements so TS3.0 introduces the 'Unknown' datatype.
    //? so you cannot call any property of the Unknown type nor you can call and construct them.
    //? now we have to use a type assertion to tell the compiler that what we are exepcting in the 'Unknown' type.
    //? so typescript now consider that we have made the necessary check similar to typecasting in the other language.
  };
  /**
   * Declaring the Unknown type.
   */
  const declareUnknownType = function () {
    let myVariable: unknown = "10a";
    console.log((myVariable as string).toUpperCase());
    // console.log(myVariable.length); // ! will give error you have to do TypeCasting for this to succeed.
  };

  /**
   * Declaring User type guard so that unknown data type is being called and used.
   */
  const declareUserDefinedTypeGuard = function () {
    let myVariable: unknown = 10;
    const validateObject = function (obj: any): obj is { name: string } {
      return true;
    };
    //! removing this if statement will give you error.
    if (validateObject(myVariable)) {
      console.log(myVariable.name);
    }
  };

  /**
   * Type inferences
   */
  const typeInferences = function () {
    let a = 10; // ? Typescript will infer the type of the 'a' hence will not be able to define improper value.
    a = 20;
    // a = "hello";//! error will come here because we have initialised a already

    let b; //since we have not given the initial value nothing wrong
    b = 10;
    b = true;

    // b. will not be giving any intellisense help

    //Union of Types
    //? this will restrict the type of the multi variable either to boolean or number but not apart from them
    let multi: boolean | number = true; //multi will be limited to these 2 data types
    multi = 10;
    console.log("🚀 ~ file: variables.ts ~ line 150 ~ typeInferences ~ multi", multi)

  };

  declaringArray();
  declareTuple();
  decalareEnumTypes();
  declareAnyType();
  declareUnknownType();
  declareUserDefinedTypeGuard();
  typeInferences();
  let sentence2 = sentence;
  return sentence2;
}
