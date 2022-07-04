var account = {
    owner: "한동석",
    code: "1234",
    balance: 15000,
    deposit: function(money){this.balance += money;},
    withdraw: function(money){this.balance -= money;},
    show_balance: function(){return this.balance;}
};

with(console){
    log(account);
    log(account.owner);
    log(account['owner']);
    log(account['balance']);
    account.deposit(50000);
    log(account.show_balance());
}