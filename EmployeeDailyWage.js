//UC1 - Check Employee Attendence
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() *10) %3;
if(empCheck == 0) {
    console.log("Employee is ABSENT.");
} else {
    console.log("Employee is PRESENT.");
}