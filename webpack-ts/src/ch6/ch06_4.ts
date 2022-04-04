// TS 成員類型 （公開，私有，受保護的）
// 修飾詞 public private protected

// class UserInfomation {
//   private name: string = 'bruce'
//   getName() {
//     return this.name
//   }
// }

// class StremerInfomation extends UserInfomation {
//   // hello() {
//   //   console.log(this.name);
//   // }
// }

// const sInfo = new StremerInfomation();
// console.log(sInfo.getName())


// JS 原生私有成員寫法（2020的新功能）

class UserInfomation {
  #name: string = 'bruce'
  getName() {
    return this.#name
  }
}

const u = new UserInfomation()
console.log(u.getName());

