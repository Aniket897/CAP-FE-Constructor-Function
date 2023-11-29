function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.deposit = function(_amount){
        this.balance += _amount;
        console.log(`deposite of ${_amount} is successfull`)
    }
    this.withdraw = function(_amount){
        if(this.balance >= _amount){
            this.balance -= _amount;
            console.log(`withdraw of ${_amount} is successfull`)
        }else{
            console.log("insuficiat balance")
        }
    }
    this.checkBalance = function(){
        console.log(this.balance)
    }
    this.isActive = function(){
        if(this.balance > 0){
            console.log('active account')
        }else{
            console.log('account not active yet')
        }
    }
}


const Account1 = new BankAccount(Date.now(), 'aniket', 'saving' , 100)
Account1.deposit(900)
Account1.withdraw(100)
Account1.checkBalance();


const Account2 = new BankAccount(Date.now(), 'pratik', 'saving' , 100)
Account2.deposit(900)
Account2.withdraw(100)
Account2.checkBalance();