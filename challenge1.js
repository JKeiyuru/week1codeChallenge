// Function to determine the grade based on the marks
function getGrade(marks) {
    if (marks > 79) return 'A';
    else if (marks >= 60 && marks <= 79) return 'B';
    else if (marks >= 49 && marks <= 59) return 'C';
    else if (marks >= 40 && marks <= 49) return 'D';
    else return 'E';
}

// Because the no. of subjects could vary depending on the institution, we prompt the user to enter the number of subjects
let totalSubjects = parseInt(prompt('How many subjects does the student have?'));

// We use an array to store the marks, to make it easier to iterate over.
let subjects = [];

//totalMarks start at 0
let totalMarks = 0;

//for loop to collect marks for each subject
for (let i = 1; i <= totalSubjects; i++) {
    let marks = parseFloat(prompt(`Enter marks for subject ${i} (0-100):`));

    // Check if marks are valid (i.e between 0 and 100)
    if (marks >= 0 && marks <= 100) {
        subjects.push(marks); 
        //we add the entered marks to the totalMarks 
        totalMarks += marks;   

        // Display the grade for each subject
        console.log(`Subject ${i}: Marks = ${marks}, Grade = ${getGrade(marks)}`);
    } else {
        // If invalid marks are entered, the user will get an error message and break the loop
        console.log(`Invalid marks entered for Subject ${i}. Please enter marks between 0 and 100.`);
        break;
    }
}

// Calculation of the mean marks
if (subjects.length === totalSubjects) {
    let meanMarks = totalMarks / totalSubjects;

    // Display the mean marks and the overall grade
    console.log(`Your mean marks are: ${meanMarks}`);
    console.log(`Your overall mean grade is: ${getGrade(meanMarks)}`);
}
