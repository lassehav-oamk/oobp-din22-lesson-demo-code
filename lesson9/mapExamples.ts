const exampleNumbers = [1, 2, 3, 4, 5];

function plusTwo(value: number): number {
  return value + 2;
}

function plusFour(value: number): number {
  return value + 4;
}

let result = exampleNumbers.map(plusTwo);
console.log(result);

interface Person {
  name: string;
  age: number;
  occupation: string;
  accessLevel?: string;
}

const people: Person[] = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Jane", age: 32, occupation: "teacher" },
  { name: "Bob", age: 23, occupation: "programmer" },
  { name: "Alice", age: 27, occupation: "programmer" },
];

const ages = people.map((person) => person.age);
console.log("people ages are: ", ages);

const modifiedPeople = people.map((person) => {
  person.accessLevel = "A";
  return person;
});

console.log(modifiedPeople);

/* Map exercise */
const names = ["Alice", "Bob", "Eve"];
// Write a map implementation which creates a new array with each name appended with " Example".
// The result should be: ['Alice Example', 'Bob Example', 'Eve Example']
const exampleNames = names.map((name) => name + " Example");
console.log(exampleNames);
