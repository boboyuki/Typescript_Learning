// this js
class CarInfo {
  title: string = 'bruce汽車'

  constructor() {
    // this.title = ''
  }

  hello () {
    // TODO del
    console.log('this.title', this, this.title);
  }
  // hello = () => {
  //   // TODO del
  //   console.log('this.title', this, this.title);
  // }
}

const cc = new CarInfo()

// 真正執行的地方
// this = cc
cc.hello()

// const hello2 = cc.hello
// // this = global (window)
// hello2()

const xxxCar = {
  title: 'xxxx汽車',
  hello2: () => {}
}

// 真正執行的地方
// this = xxxCar
xxxCar.hello2 = cc.hello
xxxCar.hello2()