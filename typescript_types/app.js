// The  unknown type
var userInput;
var userName;
userInput = 5;
userInput = "max";
// the unknown type is different from the any type because it cannot be replaced by a value assigned with a specific
//type like string etc
// The never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 600);
