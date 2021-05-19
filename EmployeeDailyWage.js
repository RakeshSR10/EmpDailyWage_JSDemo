//UC7 - Array Helper Function
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_OF_WORKING_DAYS = 20;
let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
//Array Initializatin
let empDailyWageArr = new Array();
//Function() call for Calculating Employee Daily Wage
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
//while loop
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_OF_WORKING_DAYS)
       {
           totalWorkingDays++;
           let empCheck = Math.floor(Math.random() *10) %3;
           let empHrs = getWorkingHours(empCheck);
           totalEmpHrs += empHrs;
           empDailyWageArr.push(calcDailyWage(empHrs));
       }
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total days = "+totalWorkingDays+
             ", Total hrs = "+totalEmpHrs+", Emp wage = "+empWage);      

//UC 7A -Array helper function 
let totEmpWage = 0;    
//Calculating the Sum of Daily Wage
function sum(dailyWage) { totEmpWage += dailyWage; }
empDailyWageArr.forEach(sum);//Array Helper Function
console.log("UC7A - Total Employee days : "+ totalWorkingDays +", Total Hours : "+ totalEmpHrs +", Emp wage : "+ totEmpWage);

function totalWages(totalWage, dailywage) {
    return totalWage + dailywage;
}
console.log("UC7A - Emp wage with reduce : "+empDailyWageArr.reduce(totalWages, 0));//helper function

//UC7B - Show the day along with daily wage using Array map helper function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily wage map : ");
console.log(mapDayWithWageArr);

//UC7C - Show days when full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);//helper function
console.log("UC7C - Daily wage filter when FullTime wage Earned : ");
console.log(fullDayWageArr);

//UC7D - Find the first occurance when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time FullTime wage was earned on day : "+mapDayWithWageArr.find(findFullTimeWage));

//UC7E - Check if every element of full time wage is truly holding Full Time Wage.
function isFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check all elements have full Time Wage :"+fullDayWageArr.every(isFullTimeWage));

//UC7F - Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F - Check if there is any Part Time Wage : "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G - number of days the Employee Worked : "+empDailyWageArr.reduce(totalDaysWorked, 0));