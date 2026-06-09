const students = [
  { id: 1, name: "Alex", grade: 92, subject: "Math", isEnrolled: true },
  { id: 2, name: "Jordan", grade: 67, subject: "English", isEnrolled: true },
  { id: 3, name: "Sam", grade: 45, subject: "Math", isEnrolled: false },
  { id: 4, name: "Taylor", grade: 81, subject: "English", isEnrolled: true },
  { id: 5, name: "Morgan", grade: 73, subject: "Math", isEnrolled: true },
  { id: 6, name: "Casey", grade: 55, subject: "English", isEnrolled: false },
];

// Function 1 - Filter to only enrolled students
export function getEnrolledStudents() {
  return students.filter(student => student.isEnrolled === true);
}

// Function 2 - Filter to only students with a grade of 60 or above
export function getPassingStudents(students) {
  return students.filter(student => student.grade >= 60);
}

// Function 3 - Return the average grade rounded to 2 decimal places
export function getAverageGrade(students) {
  const total = students.reduce((sum, student) => sum + student.grade, 0);
  return parseFloat((total / students.length).toFixed(2));
}

// Function 4 - Return a new object with a letterGrade property added
export function getLetterGrade(student) {
  let letterGrade;
  if (student.grade >= 90) {
    letterGrade = "A";
  } else if (student.grade >= 80) {
    letterGrade = "B";
  } else if (student.grade >= 70) {
    letterGrade = "C";
  } else if (student.grade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return { ...student, letterGrade };
}

// Orchestrator - Composes all functions into a full class report
export function getClassReport() {
  const enrolled = getEnrolledStudents();
  const passing = getPassingStudents(enrolled);
  const passingWithLetters = passing.map(student => getLetterGrade(student));
  const averageGrade = getAverageGrade(enrolled);

  return {
    totalEnrolled: enrolled.length,
    passingCount: passing.length,
    averageGrade,
    passingStudents: passingWithLetters
  };
}

// Testing each function independently
console.log("Enrolled Students:", getEnrolledStudents());
console.log("Passing Students:", getPassingStudents(getEnrolledStudents()));
console.log("Average Grade:", getAverageGrade(getEnrolledStudents()));
console.log("Letter Grade for Alex:", getLetterGrade(students[0]));
console.log("Class Report:", getClassReport());
