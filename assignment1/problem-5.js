{
    // Function to calculate average grade
    function calculateAverageGrade(student) {
        var total = student.grades.reduce(function (sum, grade) { return sum + grade; }, 0);
        var average = total / student.grades.length;
        return Math.round(average); // Rounded to nearest whole number
    }
    // Sample Input
    var student1 = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };
    var averageGradeForBob = calculateAverageGrade(student1);
    // Output
    console.log(averageGradeForBob); // 83
}
