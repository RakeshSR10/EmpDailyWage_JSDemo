const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_OF_WORKING_DAYS = 20;

//function call
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours (empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;    
    }
}
//UC10 - Ability to Store Day, Hours Worked and Wage earned in a Single Object
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHoursAndWageArr = new Array();//creating new Array for storing data in one Single Object
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHoursAndWageArr.push(
    {
        dayNum : totalWorkingDays,
        dailyHours : empHrs,
        dailyWage : calcDailyWage(empHrs),

        toString() {
            return '\nDay = '+ this.dayNum + ' => Working Hours is : '+
                   ' And Wage Earned = '+this.dailyWage
        },
    });
}
console.log("UC10 - Showing Daily Hours Worked and Wage Earned : "+empDailyHoursAndWageArr);