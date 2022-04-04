// 1. 什麼是物件導向 OOP (Object-oriented programming)？

// 分類：會員功能（物件）
// 名字 age address
// - 新增資料
// - 更新資料
// - 刪除資料

// 2. 基本的class寫法，new是什麼？
// 3. constructor 建構函式？

// 物件的設計圖
class User {
  constructor(name1: string) {
    console.log('物件建立之前....');
    this.name = name1
  }
  // 成員 （屬性（變數）跟功能（function））

  // 屬性
  name: string
  age: number
  address: string

  // 會員功能
  add() {}
  update() {}
  delete() {}
}

// 拿到設計圖 -> ???? -> 建立出物件

const u1 = new User('bruce1')
const u2 = new User('bruce2')
const u3 = new User('bruce3')

// u1.name = 'bruce1'
// u2.name = 'bruce2'
// u3.name = 'bruce3'

console.log('u1', u1);
console.log('u2', u2);
console.log('u3', u3);
