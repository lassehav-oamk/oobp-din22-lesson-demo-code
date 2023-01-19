class Course {
  name: string;
  maxStudents: number;
  startDate: string;
  endDate: string;
  students: Student[];

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
    this.students = [];
  }

  printDates() {
    console.log(
      `Course starts: ${this.startDate}, course ends: ${this.endDate}`
    );
  }

  addStudent(student: Student) {
    this.students.push(student);
    student.addCourse(this);
  }

  removeStudent(student: Student) {
    let index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  getName() {
    return this.name;
  }

  // print out the students in this course
  getStudents() {}
}

class Student {
  name: string;
  email: string;
  courses: string[];

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.courses = [];
  }

  // Add functionality to store the courses the student is enrolled in
  addCourse(course: Course) {
    this.courses.push(course.getName());
  }
}

const studentJohn = new Student("John", "j200@someschool.com");
const studentJane = new Student("Jane", "j300@someschool.com");
const studentTed = new Student("Ted", "t100@someschool.com");

const mathCourse = new Course("Math", 10, "2020-01-01", "2020-05-01");
const englishCourse = new Course("English", 20, "2021-01-01", "2021-05-01");

mathCourse.addStudent(studentJohn);
mathCourse.addStudent(studentTed);
englishCourse.addStudent(studentJane);
englishCourse.addStudent(studentJohn);

console.log(mathCourse);

console.log(studentJohn);
