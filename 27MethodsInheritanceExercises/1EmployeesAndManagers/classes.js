class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + ' ' + this.surname;
  }
}


class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname)

    this.job = job;
    this.salary = salary;
  }

  getData() {
    return this.getFullName() + ' ' + this.salary;
  }

  getSalary() {
    console.log('The salary is: ' + this.salary);
  }

  increaseSalary() {
    this.salary += this.salary * 10 / 100;
  } 
}



class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary)

    this.specialization = specialization;
  }
  getSpecialization() {
    console.log('The specialization is: ' + this.specialization);
  }

}




class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary)

    this.department = department;
  }
  getDepartment() {
    console.log('The department is: ' + this.department);
  }

  changeDepartment(newDep) {
    this.department = newDep;
  }
}


var employee1 = new Employee('Marko', 'Markovic', 'tester', 3000);
console.log(employee1.getData());
employee1.getSalary(); 
employee1.increaseSalary();
employee1.getSalary();


var developer1 = new Developer('Pera', 'Peric', 'developer', 6000, 'front-end');
developer1.getSpecialization()


var manager1 = new Manager('Jovan', 'Jovanovic', 'manager', 7000, 'head front-end');
manager1.getDepartment();
manager1.changeDepartment('head back-end');
manager1.getDepartment();