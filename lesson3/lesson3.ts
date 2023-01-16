// Array with numbers: 5, 8, 10, 1, 500
let implicitNumbers = [5, 8, 10, 1, 500];
implicitNumbers.push(10);
console.log(implicitNumbers);

let explicitNumbers: number[] = [];
explicitNumbers.push(5);
explicitNumbers.push(8);
explicitNumbers.push(10);
explicitNumbers.push(1);
explicitNumbers.push(500);

// Define a class for vehicles
class Vehicles {
  type: string;
  //tireCount: number;
  //capacity: string;
  registrationNumber: string;
  speed: number;

  constructor(type: string, registrationNumber: string) {
    this.type = type;
    this.registrationNumber = registrationNumber;
    this.speed = 0;
  }

  goFaster() {
    this.speed += 5;
  }

  goSlower() {
    this.speed -= 5;
  }
}

let abcTruck = new Vehicles("truck", "ABC123");
let defTruck = new Vehicles("truck", "DEF123");
let tstBike = new Vehicles("bike", "AAA000");
console.log(abcTruck);
console.log(defTruck);
defTruck.goFaster();
defTruck.goFaster();
console.log(defTruck);
console.log(abcTruck);
defTruck.goSlower();

console.log(defTruck);
