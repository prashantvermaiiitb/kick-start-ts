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
  // b1 = 56565;
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
    randomValue.name1 = "prashant"; // ! this will give error at the runtime because name1 is not an internal property
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
    // let myVariable: unknown = 10;
    let myVariable: unknown = { name: "prashant", value: 10 };
    // myVariable.name = "Prashant"; // ! this will be an error
    //? here we are specifying the check in the TS that object will be having name property and this check is for that
    //? this is NOT the return type of the function, This is just a validation check.
    // return !!obj && obj.hasOwnProperty("name");
    const validateObject = function (obj: any): obj is { name: string } {
      return !!obj && typeof obj === "object" && "name" in obj;
    };
    //! removing this if statement will give you error.
    if (validateObject(myVariable)) {
      console.log(
        "Reading the name property from myVariable : ",
        myVariable.name
      );
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
    console.log(
      "🚀 ~ file: variables.ts ~ line 150 ~ typeInferences ~ multi",
      multi
    );
  };

  const functionDeclarations = function () {
    /**
     * By default all the parameters are considered to be required in the TS
     * Here in the example trying to return multi type
     * @param a
     * @param b
     * @returns
     */
    const a = function (a: number, b: number): boolean | number {
      if (a > b) {
        return true;
      } else {
        return -1;
      }
    };
    console.log("result of comparison...", a(4, 5));
    console.log("result of comparison....", a(14, 5));

    /**
     * Optional parameter can be there in the TS by addition of ? after the parameter name
     * Optional parameters must always be after the required parameters in that case you have to see the order parameters
     * Default parameters : will have the default value assigned to them
     */
    // const b = function (x?: number, z: number, y: number = 90) { // ! will be giving error
    const b = function (z: number, x?: number, y: number = 90) {
      return (x ? x + y : y) + z;
    };
    // console.log("🚀 ~ file: variables.ts ~ line 181 ~ b ~ b", b()); // ! will be giving error for the z
    console.log("🚀 ~ file: variables.ts ~ line 181 ~ b ~ b", b(5));
  };

  declaringArray();
  declareTuple();
  decalareEnumTypes();
  declareAnyType();
  declareUnknownType();
  declareUserDefinedTypeGuard();
  typeInferences();
  functionDeclarations();
  let sentence2 = sentence;
  return sentence2;
}
