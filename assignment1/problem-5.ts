{
  interface Student {
  name: string;
  age: number;
  grades: number[];
}

// Function to calculate average grade
function calculateAverageGrade(student: Student): number {
  const total = student.grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / student.grades.length;
  return Math.round(average);  // Rounded to nearest whole number
}

// Sample Input
const student1: Student = {     
  name: "Bob",     
  age: 17,     
  grades: [75, 80, 82, 88, 90]
};

const averageGradeForBob = calculateAverageGrade(student1);

// Output
console.log(averageGradeForBob); // 83
}