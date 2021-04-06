import Employee from "./Employee";
/**
 * ? Usage of the interface here because ssee the number of properties for the object
 */
export default class Manager extends Employee {
  title: string;
  constructor(
    name: string,
    nickName: string,
    employeeDOB: string,
    title: string = "manager"
  ) {
    super(name, nickName, employeeDOB);
    this.title = title;
  }
  getNickName() {
    return this.employeeNickName;
  }
  delegateTasks() {
    // console.log("directly writing DOB...", this.employeeDOB); //! private data member only
    console.log("fetching date of birth ... ", this.getDateOfbirth());
    console.log(
      `${
        this.employeeName
      } aka ${this.getNickName()}: Please delegate the task and your DOB is ${super.getDateOfbirth()}`
    );
  }
  printManagerInformation() {}
}
