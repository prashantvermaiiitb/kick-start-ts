export default class Employee {
  employeeName: string;
  private employeeDOB: string;
  protected employeeNickName: string;
  constructor(name: string, nickName: string, employeeDOB: string) {
    this.employeeName = name;
    this.employeeNickName = nickName;
  }
  greet() {
    console.log(`Hello ${this.employeeName}`);
  }
}
