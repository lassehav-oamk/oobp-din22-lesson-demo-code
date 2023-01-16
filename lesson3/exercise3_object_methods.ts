/* Create an class for school courses. 
    The course objects should have the following properties:

    name – string
    maxStudents - number
    startDate – string
    endDate – string */
class Course {
  name: string;
  maxStudents: number;
  startDate: string;
  endDate: string;

  constructor(
    courseName: string,
    maxStudents: number,
    startDate: string,
    endDate: string
  ) {
    this.name = courseName;
    this.maxStudents = maxStudents;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  printDates() {
    console.log(
      `Course starts: ${this.startDate}, course ends: ${this.endDate}`
    );
  }
}

let course1 = new Course("JavaScript", 20, "2023-01-01", "2023-01-31");

//course1.printDates();

/* Modify the class so that every object includes a method
   which can be used to print the course start and end date to the console in one string:
   "Course starts: <startDate>, course ends: <endDate>" */

/* Initialize an array with 5 course objects */
let courseArray: Course[] = [
  new Course("JavaScript", 20, "2023-01-01", "2023-01-31"),
  new Course("Math", 40, "2023-03-01", "2023-01-31"),
  new Course("Biology", 80, "2023-05-01", "2023-07-31"),
  new Course("History", 100, "2023-05-01", "2023-08-31"),
  new Course("Economics", 30, "2023-06-01", "2023-09-31"),
];

/* Write a loop which prints the course start and end date for all the courses in the array */
for (let i = 0; i < courseArray.length; i++) {
  courseArray[i].printDates();
}
