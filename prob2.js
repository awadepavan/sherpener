//------------------------------------------------------------------
/*
class count_objects
{
    //Write the code here
     static i = 0 ;

    // constructor() {
    //     count_objects.i++;
    // }
    
    constructor(){
      count_objects.i++;
    }

    
}
//Do Not change the Below  Code



var a = new count_objects();
var b = new count_objects();
var c = new count_objects();
console.log(count_objects.i);
var d = new count_objects();
console.log(count_objects.i);
var e = new count_objects();
console.log(count_objects.i);
*/
//------------------------------------------------------------------
/*
//Write the code Below
class PARENT{
  
  print(){
    console.log("This is parent class");
  }
}
class CHILD extends PARENT{
  
  print(){
    console.log("this is child class");
    super.print();
  }
}

//Do Not change the Below  Code

var obj_parent = new PARENT();
obj_parent.print();

var obj_child = new CHILD();
obj_child.print();
*/
//------------------------------------------------------------------
//Write the code Below
class Member{
  
  constructor(Name,Age,phone_number,Addess,Salary){
    this.Name = Name;
    this.Age = Age;
    this.phone_number = phone_number;
    this.Addess= Addess;
    this.Salary = Salary;
  }
  
  printSalary(){
    console.log(this.Salary);
  }
}
class Employee extends Member{
  
  constructor (Name,Age,phone_number,Addess,Salary,specialization){
    super(Name,Age,phone_number,Addess,Salary);
    this.specialization = specialization;
  }
  
  print_details(){
    console.log(this.Name);
    console.log(this.specialization);
    super.printSalary();
  }
}
class Manager extends Member{
  
   constructor (Name,Age,phone_number,Addess,Salary,department){
    super(Name,Age,phone_number,Addess,Salary);
    this.department = department;
  }
  
  print_details(){
    console.log(this.Name);
    console.log(this.department);
    super.printSalary();
  }
  
}

//Do Not change the Below  Code

var obj = new Employee("Ram",25,"7003","Bangalore",1000,"cse");
obj.print_details();

var obj1 = new Employee("Shyam",250,"8098","Chennai",2000,"civil");
obj1.print_details();

var obj_Man = new Manager("babu",100,"1234","Bangalore",1000,"JP");
obj_Man.print_details();

var obj1_Man = new Manager("Rao",250,"456","Kerala",3000,"GC");
obj1_Man.print_details();
