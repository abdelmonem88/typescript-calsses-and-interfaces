class Department {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  printDepName() {
    console.log(`Department name is ${this.name}`);
  }

  static staticMethod() {
    console.log('This is a ststic method');
  }
}

class ITDepartment extends Department {
  employees: string[];
  constructor() {
    super(1, 'IT');
    this.employees = ['men3m', 'walaa'];
  }

  addEployees(employee: string) {
    this.employees?.push(employee);
  }

  printEployees() {
    console.log(this.employees);
  }
}

const IT = new ITDepartment();
IT.addEployees('loka');
IT.printEployees();

Department.staticMethod();

console.log('**********************');
