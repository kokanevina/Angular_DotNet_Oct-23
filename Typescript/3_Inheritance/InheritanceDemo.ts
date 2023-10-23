class Employee{
    protected e:number;
    constructor(public employeeId=0,public employeeName="AAA", public employeeSalary=0){
    }

    getMonthlySalary():number{   // bydefault public
        return this.employeeSalary;
    }
}
class Trainer extends Employee{
    constructor(public extraPay=0,public trainerType="ABC"){
        super();
    }
    test(){
        this.e=0;
    }
}//protected property scope ended here
// intialization process is from superclass to subclass
// initialization sequence :superclass constructor to subclass constructor
// own cosntr: maintain calling seq , call superclass con from subclass using super


let employee=new Employee(111,"Poonam Pujari", 56000);
console.log(employee);
console.log(employee.getMonthlySalary());

let trainer1=new Trainer(900,"Techincal");  // subclass 
trainer1.employeeId=999;
trainer1.employeeName="Vina Patil";
trainer1.employeeSalary=90000;
console.log(trainer1);
console.log(trainer1.getMonthlySalary()); // superclass method  // 90000


