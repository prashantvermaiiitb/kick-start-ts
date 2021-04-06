export default class Employee {
  employeeName: string;
  private employeeDOB: string;
  protected employeeNickName: string;
  constructor(name: string, nickName: string, employeeDOB: string) {
    this.employeeName = name;
    this.employeeNickName = nickName;
    this.employeeDOB = employeeDOB;
  }
  getDateOfbirth() {
    return this.employeeDOB;
  }
  greet() {
    console.log(`Hello ${this.employeeName}`);
  }
}
