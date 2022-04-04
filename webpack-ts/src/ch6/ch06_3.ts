// ---- extends ---- 
// class Animal {
//   name: string
//   run() {
//     console.log('run....');
//   }
// }

// class Dog extends Animal {
//   run() {
//     console.log('dog run....');
//   }
// }
// class Cat extends Animal {}

// const d1 = new Dog()
// d1.run()

// const c1 = new Cat()
// c1.run()

// ---- constructor super ---- 
// class Animal {
//   name: string
//   constructor (name1: string) {
//     this.name = name1
//   }
//   run() {
//     console.log('run....', this.name);
//   }
// }

// class Dog extends Animal {
//   run() {
//     super.run()
//     console.log('dog run....', this.name);
//   }
// }

// const d1 = new Dog('ddd1')
// d1.run()

// // ---- abstract  ---- 
// abstract class Animal {
//   run() {
//     console.log('run....');
//   }
//   abstract hello(): void
// }

// // error
// // const a1 = new Animal()

// class Dog extends Animal {
//   hello() {
//     console.log("Hello Animal")
//   }
// }

// class Cat extends Animal {
//   hello() {
//     setTimeout(() => super.run(), 1000)
//     // setTimeout(function() { super.run() }, 1000)
//   }
// }

// const d1 = new Dog()
// d1.run()
// d1.hello()



