// The  unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

// the unknown type is different from the any type because it cannot be replaced by a value assigned with a specific
//type like string etc

// The never type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError("An error occured", 600);

const result = generateError("An error occured", 600);
console.log(result);
// alsoif we hover above the above code we can see that the code isunreachable
// because the code is never intended to return anything.
// this doesnt return any value because trowing an error restarts the code
// therefore this code has a type of ever
