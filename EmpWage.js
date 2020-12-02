//UC11 A - UC11 D
    let totalWages = empDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage >0)
                                            .reduce((totalWage,dailyHrsAndWage)=> totalWage+= dailyHrsAndWage.dailyWage,0);
    console.log("Total wage UC11A - "+totalWages);
    let totalHours = empDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours >0)
                                            .reduce((totalHours,dailyHrsAndWage)=>totalHours+= dailyHrsAndWage.dailyHours,0);
    console.log("Total hours UC11A - "+totalHours); 
    console.log("11B- Logging Full Work Days");
    empDailyHrsAndWageArray.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours == 8).
                            forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()));
    
    let partWorkingDaysString = empDailyHrsAndWageArray.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==4)
                                                        .map(dailyHrsAndWage=>dailyHrsAndWage.toString());
    console.log("\n11C- Part Working Days"+partWorkingDaysString);

    let noWorkingDays = empDailyHrsAndWageArray.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==0)
                                                .map(dailyHrsAndWage=>dailyHrsAndWage.dayNum);
    console.log("11D- Non working days: "+noWorkingDays);
}
