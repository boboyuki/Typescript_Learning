// static 靜態（可以被共用的東西？）

class Bank {
  private static balance: number = 1000
  static withdraw(money: number) {
    if (this.balance <= 0) return
    this.balance -= money
  }
  static getBalance() {
    return this.balance
  }
}

// const bb1 = new Bank()
// const bb2 = new Bank()
// Bank.balance = 99999
// console.log(Bank.balance);

function userAWithdraw(money: number) {
  Bank.withdraw(money)
  console.log(Bank.getBalance())
}

function userBWithdraw(money: number) {
  Bank.withdraw(money)
  console.log(Bank.getBalance())
}

userAWithdraw(200)
userAWithdraw(500)

