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

//UC11A - Object Operation Using Arrow Functions
let totalWages = empDailyHoursAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empDailyHoursAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC11A - Total Hours = "+ totalHours + " Total Wages = "+totalWages);

//UC11B - Logging Full Work Days
console.log("UC11B - Logging Full Work Days : ");
empDailyHoursAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                       .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHoursAndWageArr
                           .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                           .map(dailyHrsAndWage => dailyHrsAndWage.toString());
//UC11C
console.log("\nUC11C - Part Time Working Day Strings : "+partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHoursAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
//UC11D
console.log("UC11D - Non Working Days : "+nonWorkingDayNums);    
