/* class Student{
  constructor(name="john",roll_no=2){
    this.name = name;
    this.roll_no = roll_no;
  }
  
  display(){
    console.log(this.name+" "+this.roll_no);
  }
}

var x = new Student("vaibhav",1);
//console.log(x.name+" "+x.roll_no);
x.display();

var y = new Student();
//console.log(y.name+" "+y.roll_no);
y.display(); */
//-------------------------------------------------------------------------
/*
class Triangle{
  // let side1;
  // let side2;
  // let side3;
  
  constructor(side1,side2,side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  // calculate_area(){
  //   return side1*side2*side3;
  // }
  
  calculate_area(){
    return this.side1*this.side2*this.side3;
  }
  
  calculate_perimrter(){
    return this.side1+this.side2+this.side3;
  }
}

var tri = new Triangle(3,4,5);

let area=tri.calculate_area();
console.log(area);

let peri = tri.calculate_perimrter();
console.log(peri);
*/
//---------------------------------------------------------------------------
/*
class Employee{
  
  constructor(name,year_of_joining,address){
    this.name = name;
    this.year_of_joining = year_of_joining;
    this.address = address;
  }
  print_details(){
    console.log(this.name+" "+this.year_of_joining+" "+this.address);
  }
  
}

var emp = new Employee("ram",1992,"Bangalore");
emp.print_details();

var emp2 = new Employee("shyam",2010,"Lucknow");
emp2.print_details();
*/

class Employee{
  
  getinfo(salary,working_hr){
    this.salary = salary;
    this.working_hr = working_hr;
  }
  
  Addsal(){
    if(this.salary < 500){
      this.salary = this.salary + 10;
    }
  }
  
  Addwork(){
    if(this.working_hr > 6){
      this.salary = this.salary + 5;
    }
  }
}

var emp = new Employee();
emp.getinfo(400,7);
emp.Addsal();
emp.Addwork();
console.log(emp.salary);


var emp1 = new Employee();
emp1.getinfo(600,8);
emp1.Addsal();
emp1.Addwork();
console.log(emp1.salary);