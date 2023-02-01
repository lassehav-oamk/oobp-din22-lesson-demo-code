// Arrow function examples

// Arrow function with no parameters
let noParams = () => {
  console.log("No parameters");
};
noParams();

// Arrow function with one parameter
let oneParam = (param: string) => {
  console.log("One parameter: " + param);
};
oneParam("Hello");

// Arrow function with multiple parameters
let multipleParams = (param1: string, param2: number) => {
  console.log("Multiple parameters: " + param1 + " " + param2);
};
multipleParams("Hello", 123);

// Arrow function with return value
let returnValue = (param1: string, param2: number) => {
  return param1 + " " + param2;
};
console.log(returnValue("Hello", 123));

// Arrow function with return value and no curly braces
let returnValueNoCurlyBraces = (param1: string, param2: number) =>
  param1 + " " + param2;
console.log(returnValueNoCurlyBraces("Hello", 123));

// Arrow function with return value and no curly braces and no parentheses and no parameters
let returnValueNoCurlyBracesNoParams = () => "Hello";
console.log(returnValueNoCurlyBracesNoParams());

// Arrow function with return value and no curly braces and no parentheses and one parameter
let returnValueNoCurlyBracesOneParam = (param: string) => param;
console.log(returnValueNoCurlyBracesOneParam("Hello"));
