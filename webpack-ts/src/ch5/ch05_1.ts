// // js
// // function get(a, b) {
// //   return a + b
// // }

// // ts
// function get(a: number, b: string, c: boolean) {
//   return a + b
// }
// get(99, '', true)

// // 可選的參數
// function setUser(name: string, age?: string) {
//   if (typeof age === 'string') {
//     return age.split('')
//   }
// }

// // return type
// function getNum () {
//   return 100
// }

// function getName(): string {
//   return ''
// }

// // type
// type Info = {
//   name: string,
//   age: number
// }

// function creatUserInfo(info: Info) {
//   console.log(info.name)
//   return info
// }

// // never 
// function getUserData(): never {
//   throw new Error('...')
// }

// // void
// function hello() {
//   console.log()
// }

// // 構建函數
// // new 
// type CardObj = {
//   name: string
// }

// type CardCreator = {
//   new(name: string): CardObj
// }
// // function car () {
// //   this.name = ''
// // }
// // const c1 = new car()

// function createCard (cardCreator: CardCreator) {
//   return new cardCreator('bruce')
// }

// // return [] (避免union情況的發生)
// function getArr() {
//   // return [0, 1, 'bruce'] as const
//   return [0, 1, 'bruce'] as [number, number, string]
// }

// const [id, age, userName] = getArr()