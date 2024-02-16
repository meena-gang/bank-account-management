let bankAccounts = [];
let flag = 0;
function BankAccount(accountNumber,name,type,balance){
    this.accountNumber = accountNumber,
    this.name = name,
    this.type = type,
    this.balance = balance,
    this.deposit = function(amount){
       this.balance += amount;
    }
    this.withdraw = function(amount){
        if(amount > this.balance){
            console.log("Insufficient balance")
        }
        else{
        this.balance -= amount;
        }
    }
    this.checkBalance = function(){
        console.log(this.balance)
    }
    this.isActive = function(){
        if(this.balance >  0){
            return true;
            
        }
        else{
              return false;
        }
    }
    bankAccounts.push(this);
    
}

let account1 = new BankAccount(105,"meena","saving",0);
let account2 = new BankAccount(104,"saurabh","current",0);
let account3 = new BankAccount(103,"gunu","current",0);
let account4 = new BankAccount(102,"raja","saving",0);
let account5 = new BankAccount(101,"rahul","saving",0);



account1.deposit(500);
account1.checkBalance();
account2.deposit(2000);
account2.withdraw(100);
account2.checkBalance();
account4.deposit(20000);
account4.withdraw(1000);
account4.checkBalance();
console.log(account3.isActive());


function toatalBalance(){
    let toatalBalance = 0;
    bankAccounts.forEach(obj => {
        if(obj.isActive()){
          toatalBalance += obj.balance;
        }
    })
    console.log(toatalBalance);
}

toatalBalance();
