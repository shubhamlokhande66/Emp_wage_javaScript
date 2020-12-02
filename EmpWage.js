//UC1

console.log("Welcome to Employee Wage Javascript")

//UC1--> IF-ELSE, checking empkoyee is present or absent
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random()*10) % 2;
    if (empCheck == IS_ABSENT){
        console.log("UC-1 Employee is absent.");
    } else {
    console.log("UC-1 Employee is prsent");
    }
}