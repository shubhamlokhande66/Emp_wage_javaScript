//UC10 object creation
{
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyHrsAndWageArray = new Array();
    while((totalEmpHrs<=MAX_HRS_IN_MONTH)&&(totalWorkingDays<NUM_OF_WORKING_DAYS)){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random()*10)%3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs +=empHrs;
        empDailyHrsAndWageArray.push({
            dayNum : totalWorkingDays,
            dailyHours:empHrs,
            dailyWage:calcDailyWage(empHrs),
            toString() {
                return "\nDay" + this.dayNum + " => Working Hours is: "+this.dailyHours + " Wage earned = " +this.dailyWage
            },
        });
    }
    console.log("Printing objects: "+empDailyHrsAndWageArray);
}
