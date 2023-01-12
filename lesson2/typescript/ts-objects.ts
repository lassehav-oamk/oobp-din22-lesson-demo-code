let person = {
    name: "John",
    familyName: "Doe",
    age: 30,
    isMarried: false
}

function printPersonAge(person : { name: string, familyName: string, age: number, isMarried: boolean }) {
    console.log(person.name + " " + person.familyName + " is " + person.age + " years old");
}

interface Person {
    name: string;
    familyName: string;
    age: number;
    isMarried: boolean;
    occupation?: string;    
}

function getFullPersonName(person: Person) {
    return person.name + " " + person.familyName;
}
