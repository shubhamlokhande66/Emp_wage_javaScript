class EmployeePayrollData {
    //property
    id;
    salary;
    gender;
    startDate;
  
    //constructor
    constructor(...params) {
      this.id = params[0];
      this.name = params[1];
      this.salary = params[2];
      this.gender = params[3];
      this.startDate = params[4];
    }
    get name() {
      return this._name;
    }
    set name(name) {
      let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
      if (nameRegex.test(name)) this._name = name;
      else throw "Name is incorrect";
    }
  
    tostring() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const empDate =
        this.startDate == undefined
          ? "undefined"
          : this.startDate.toLocaleDateString("en-US", options);
      return (
        "id: " +
        this.id +
        " name: " +
        this.name +
        " salary : " +
        this.salary +
        " gender : " +
        this.gender +
        " startdate : " +
        this.startDate
      );
    }
  }
  try {
    let employeePayrollData = new EmployeePayrollData(1, "Jack", 60000);
    console.log(employeePayrollData.tostring());
    employeePayrollData.name = "Maddy";
    console.log(employeePayrollData.tostring());
    let newEmployeePayrollData = new EmployeePayrollData(
      1,
      "Liha",
      60000,
      "F",
      new Date()
    );
    console.log(newEmployeePayrollData.tostring());
  } catch (e) {
    console.log(e);
  }
  