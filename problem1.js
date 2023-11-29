function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
}
BankAccount.prototype.deposit = function (_amount) {
    this.balance += _amount;
    console.log(`deposite of ${_amount} is successfull to bank account number ${this.accountNumber}`)
}
BankAccount.prototype.withdraw = function (_amount) {
    if (this.balance >= _amount) {
        this.balance -= _amount;
        console.log(`withdraw of ${_amount} is successfull from bank account number ${this.accountNumber}`)
    } else {
        console.log("insuficiat balance")
    }
}
BankAccount.prototype.checkBalance = function () {
    console.log(this.balance)
}
BankAccount.prototype.isActive = function () {
    if (this.balance > 0) {
        console.log('active account')
    } else {
        console.log('account not active yet')
    }
}


const Account1 = new BankAccount(2341241234324, 'aniket', 'saving', 100)
Account1.deposit(900);
Account1.withdraw(100)
Account1.checkBalance();


const Account2 = new BankAccount(456234532133, 'pratik', 'saving', 100)
Account2.deposit(900)
Account2.withdraw(100)
Account2.checkBalance();


function getTotalBalance(){
    let total = 0;
    for(let item in arguments){
        total += arguments[item].balance
    }
    console.log("total balance of active accounts is " , total)
}


getTotalBalance(Account1 , Account2)