const numberArray = ["a", "b", "c", "d", "e", "f", "g"];
/*
let filterOutput = numberArray.filter((element, index, array) => {
  console.log(element);
  console.log(index);
  const returnValue = index > 4;
  console.log("is number " + element + " smaller than 3: " + returnValue);
  return returnValue;
});
console.log(filterOutput);*/

// Write a filter operation which returns all numbers smaller than 1000 from the
// exerciseArray
const exerciseArray = [1225, 25676, 2223, 67, 44, 2, 23456];
const exerciseArrayResult = exerciseArray.filter((element) => element < 1000);

// Write filter operation which returns all names which include letter T from the nameArray
const nameArray = ["Max", "Tom", "Tim", "Anna", "Lisa"];
const nameArrayResult = nameArray.filter((element) =>
  element.toLowerCase().includes("t")
);
console.log(nameArrayResult);

// Create an array of 10000 random numbers from range 0-10000 and
// write a filter operation which returns all numbers smaller than 5000 and shows
// how many numbers are in the result.
const randomNumbersArray: number[] = [];
for (let i = 0; i < 10000; i++) {
  const randomNumber = Math.floor(Math.random() * 10000);
  randomNumbersArray.push(randomNumber);
}
const filteredRandomNumbersArray = randomNumbersArray.filter(
  (element) => element < 5000
);
console.log(filteredRandomNumbersArray.length);
