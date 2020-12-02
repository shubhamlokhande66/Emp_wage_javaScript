//UC9 Arrow functions
const findTotal = (totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
let count =0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArray.filter(dailyWage=>dailyWage>0)
                                    .reduce(findTotal,0);
console.log("UC 9A : Wage with arrow => function: "+totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value,key)=>{
    if(value==8) 
        fullWorkingDays.push(key);
    else if(value==4)
        partWorkingDays.push(key);
    else 
        nonWorkingDays.push(key);
});
console.log("Full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);