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
    title: string
  ) {
    super(name, nickName, employeeDOB);
    this.title = title;
  }
  getNickName() {
    return this.employeeNickName;
  }
  delegateTasks() {
    console.log(
      `${
        this.employeeName
      } aka ${this.getNickName()}: Please delegate the task.`
    );
  }
  printManagerInformation() {}
}
