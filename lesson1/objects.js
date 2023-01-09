let a = 5;
let b = "This another variable";

// list different javascript data types
let c = false;
let d = null;
let e = undefined;

let manufacturer = "Toyota";
let model = "Corolla";
let year = 2019;
let color = "red";
let isAutomatic = true;

let manufacturer2 = "Honda";
let model2 = "Civic";
let year2 = 2018;
let color2 = "blue";
let isAutomatic2 = false;

let manufacturer3 = "Honda";
let model3 = "Accord";
let year3 = 2017;
let color3 = "black";
let isAutomatic3 = true;

let number1 = 5;
let number2 = 38;
let number3 = 12;
let number4 = 1;

//let numberArray = [5, 38, 12, 1];
let numberArray = [number1, number2, number3, number4];

let car1 = {
  manufacturer: "Toyota",
  model: "Corolla",
  year: 2019,
  color: "green",
  isAutomatic: true,
};

let car2 = {
  manufacturer: "Honda",
  model: "Civic",
  year: 2018,
  color: "blue",
  isAutomatic: false,
};

let carArray = [car1, car2];
let carArray2 = [
  {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2019,
    color: "red",
    isAutomatic: true,
  },
  {
    manufacturer: "Honda",
    model: "Civic",
    year: 2018,
    color: "blue",
    isAutomatic: false,
  },
];

function printColorsOfCarsInArray(carArray) {
  //console.log("Color of the car in array is " + carArray[0].color);
  for (let i = 0; i < carArray.length; i++) {
    console.log("Color of the car in array is " + carArray[i].color);
  }
}

printColorsOfCarsInArray(carArray2);

/*console.log("Color of the toyota is " + color);
console.log("Color of the car1 object is " + car1.color);
console.log("Color of the car2 object is " + car2.color);*/

function printCarColor(car) {
  console.log("Color of the car is " + car.color);
}

printCarColor(car1); // green
printCarColor(car2); // blue
