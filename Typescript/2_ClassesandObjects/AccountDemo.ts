// 1st letter capital

class BankAccount{
    // instance variables, camel case
    private accountNumber:number;
    private customerId:number;
    accountType:string;
    accountBalance:number;

    get accNum(){
        return this.accountNumber;
    }
    set accNum(accountNumber){
        this.accountNumber=accountNumber;
    }

    get custId(){
        return this.customerId;
    }
    set custId(customerId){
        this.customerId=customerId;
    }
    //instance method, camel case
    deposit(depAmount:number):number
    {
        this.accountBalance=this.accountBalance+depAmount;
        return this.accountBalance;
    }
    // implement withdraw method
    getDetails():string{
       // return "Account Number:"+this.accountNumber+" Customer Id:"+this.customerId+" Account Type:"+this.accountType+" balance:"+this.accountBalance
        return `Account Number : ${this.accountNumber}
                Customer Id: ${this.customerId}
                type: ${this.accountType}
                balance: ${this.accountBalance}`
    }
}
// new keyword : new object created

let account1:BankAccount // custom types
account1=new BankAccount();  // default constructor called   //1.
console.log(account1.getDetails());
console.log("--------");
console.log(account1);
// state change    //2.
account1.accNum=7878787878;
account1.custId=111111
account1.accountType="Savings";
account1.accountBalance=10000;
console.log(account1);

let account2=new BankAccount();
account2.accNum=8898787878;
account2.custId=121212
account2.accountType="Savings";
account2.accountBalance=15000;
console.log(account2);

account1.deposit(5000); 
console.log(account1);
console.log(account2);