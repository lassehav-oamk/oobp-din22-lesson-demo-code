class Car {
  sound: string;
  registrationNumber: string;
  constructor(sound: string, registrationNumber: string) {
    this.sound = sound;
    this.registrationNumber = registrationNumber;
  }
  drive(): void {
    console.log(this.sound);
  }
}

class Truck extends Car {
  capacity: number;
  constructor(registrationNumber: string, capacity: number) {
    super("BRROOM", registrationNumber);
    this.capacity = capacity;
  }

  load(loadWeight: number) {
    if (loadWeight > this.capacity) {
      console.log("Too heavy");
    } else {
      console.log("Loaded");
    }
  }
}

class HighSpeedCar extends Car {
  speed: number;
  constructor(registrationNumber: string, speed: number) {
    super("VOOOOMM!", registrationNumber);
    this.speed = speed;
  }

  increaseSpeed(): void {
    this.speed++;
  }
}

const car1 = new Car("Vroom", "ABC-123");
const car2 = new Car("Broom", "DEF-456");
const car3 = new Car("Zoom", "GHI-789");
car1.drive();

const truck1 = new Truck("TTT-123", 1000);
const truck2 = new Truck("DEF-444", 1000);
const truck3 = new Truck("ABC-9999", 1000);
const truck4 = new Truck("BCA-567", 1000);
truck1.drive();
truck1.load(500);
