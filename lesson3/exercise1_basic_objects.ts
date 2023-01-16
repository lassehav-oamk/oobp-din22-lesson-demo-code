/*
Create your own vehicle object, which has the following properties 
    type – truck 
    tireCount – 6 
    capacity – 5 tons 
*/
let vehicle = {
  type: "truck",
  tireCount: 6,
  capacity: "5 tons",
};

/* Use console log to print the capacity of the vehicle object */
console.log(vehicle.capacity);
vehicle.capacity = "6 tons";
vehicle.tireCount = 4;

/* Next define three other similar truck object, with different capacity values */
let truck1 = {
  type: "truck",
  tireCount: 6,
  capacity: "15 tons",
};
let truck2 = {
  type: "truck",
  tireCount: 6,
  capacity: "25 tons",
};
let truck3 = {
  type: "truck",
  tireCount: 6,
  capacity: "35 tons",
};

/* Initialize an array with all the trucks in it */
let truckArray = [
  truck1,
  truck2,
  truck3,
  {
    type: "truck",
    tireCount: 6,
    capacity: "45 tons",
  },
];

/* Create a function which can print the capacity of all the trucks to the console */
function printTruckCapacities(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i].capacity);
  }

  console.log(a.tireCount);
}

printTruckCapacities(truckArray);

// Constructor functions
function Vehicle(a, tireCount, capacity, registrationNumber) {
  this.type = a;
  this.tireCount = tireCount;
  this.capacity = capacity;
  this.isMoving = false;
  this.registrationNumber = registrationNumber;
  this.speed = 0;

  this.accelerate = function () {
    this.speed = this.speed + 10;
    this.isMoving = true;
  };
}

let vehicle1 = new Vehicle("truck", 6, "5 tons", "ABC123");
let vehicle2 = new Vehicle("truck", 6, "15 tons", "DEF456");
let vehicle3 = new Vehicle("truck", 6, "25 tons", "GHI789");
let vehicle4 = new Vehicle("truck", 6, "35 tons", "JKL012");

vehicle1.accelerate();

console.log(vehicle1);
console.log(vehicle2);

vehicle1.accelerate();
console.log(vehicle1);

vehicle1.accelerate();
console.log(vehicle1);

function calculateNumber(a, b) {
  return a + b;
}

let result = calculateNumber(5, 6);
let result2 = calculateNumber("5", 6);
