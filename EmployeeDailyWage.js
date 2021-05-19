//UC8 - Use Map to store Daily wage and Compute the Total Wage Using Map
//UC6 and UC7 combination
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
//Array
let empDailyWageArr = new Array();
//Map
let empDailyWageMap = new Map();
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

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() *10) %3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));//push data to array
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));//set data to map
}
            
console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Employee Wage Map totalHours : "+ Array.from(empDailyWageMap.values()).reduce(totalWages, 0));