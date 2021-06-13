
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.fullName = function () {
  return this.name + ' ' + this.surname;
}



function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
  return this.fullName() + ' ' + this.salary;
}

Employee.prototype.getSalary = function () {
  return this.salary;
}

Employee.prototype.increaseSalary = function () {
  this.salary += this.salary * 10 / 100;
}





function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
  return this.specialization;
}





function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
  return this.department;
}
Manager.prototype.changeDepartment = function (newDep) {
  this.department = newDep;
}






var employee1 = new Employee('Marko', 'Markovic', 'programmer', 5000);
//console.log(employee1.getData());
//console.log(employee1.getSalary());
console.log(employee1.increaseSalary());
console.log(employee1);

var developer1 = new Developer('Pera', 'Peric', 'developer', 6000, 'front-end');
//console.log(developer1.getSpecialization());

var manager1 = new Manager('Jovan', 'Jovanovic', 'manager', 7000, 'head front-end')
//console.log(manager1);

// console.log(manager1.getDepartment());
// console.log(manager1.changeDepartment('head back-end'));
// console.log(manager1.department);