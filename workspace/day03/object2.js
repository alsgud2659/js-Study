var account = new Object();
account.owner = "한동석";
account.code = "1234";
account.balance = 15000;
account.deposit = deposit;
account.withdraw = withdraw;

function deposit(money){
    this.balance += money;
}

function withdraw(money){
    this.balance -= money;
    return money;
}

account.deposit(50000);
console.log(account['balance']);
console.log(account.withdraw(30000) + "원 출금 후 잔액 : " + account.balance + "원");