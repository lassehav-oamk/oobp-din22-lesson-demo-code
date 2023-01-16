let name = "John";
let someOtherVariable = 5;
let yetAnotherVariable = true;
let example = function() {
  /* some code here.. */
}

function example2() {
  /* some code here.. */
}

example();
example2();

let thisIsAnObject = {
  name: "John",
  someOtherProperty: 6,
  yetAnotherProperty: false,
  someProperty: {
    name: "Jane"
  },
  someOperation: function() {
    return "Hello, " + this.name;
  }
};

console.log(a.someOtherProperty.b.c); // c = 7;

let a = {
  someOtherProperty: {
    b: {
      c: 7
    }
  }
}



