/*
Exercise String Storage

Create a class which can store any number of strings 
A string is text in quotation characters: "Hello World"
The class should have methods for:
- Adding a new string to the storage
- Getting a random string from the storage
- Getting the longest string in the storage
- Getting the shortest string in the storage
- Getting the total number of characters in the storage
- Getting the number of given character in the storage   
   -> you give 'a' as parameter, return is total number of 'a's in the storage
*/

class StringStorage {
  storage: string[];

  constructor() {
    this.storage = [];
  }

  addString(str: string) {
    this.storage.push(str);
  }

  getRandomString() {
    const randomValue = Math.floor(Math.random() * this.storage.length);
    return this.storage[randomValue];
  }

  getLongestString() {
    let longestString = this.storage[0];
    for (let i = 0; i < this.storage.length; i++) {
      let currentElementLength = this.storage[i].length;
      if (currentElementLength > longestString.length) {
        longestString = this.storage[i];
      }
    }

    return longestString;
  }

  getShortestString() {
    let shortestString = this.storage[0];
    for (let i = 0; i < this.storage.length; i++) {
      let currentElementLength = this.storage[i].length;
      if (currentElementLength < shortestString.length) {
        shortestString = this.storage[i];
      }
    }

    return shortestString;
  }

  getTotalNumberOfCharacters() {
    let totalNumberOfCharacters = 0;
    for (let i = 0; i < this.storage.length; i++) {
      totalNumberOfCharacters += this.storage[i].length;
    }

    return totalNumberOfCharacters;
  }

  getNumberOfGivenCharacter(letterWhatIamLookingFor: string) {
    let numberOfGivenCharacter = 0;
    for (let i = 0; i < this.storage.length; i++) {
      for (let j = 0; j < this.storage[i].length; j++) {
        if (this.storage[i][j].toLowerCase() === letterWhatIamLookingFor) {
          numberOfGivenCharacter++;
        }
      }
    }

    return numberOfGivenCharacter;
  }
}

const storage = new StringStorage();
storage.addString("Hello World");
storage.addString("Hello");
storage.addString("Another string");

console.log(storage.getNumberOfGivenCharacter("a"));
