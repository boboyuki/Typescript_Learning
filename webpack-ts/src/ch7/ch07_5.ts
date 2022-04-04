// // keyof
// interface UserCard {
//   name: string
//   age: number
//   cardTitle: string
//   cardDesc: string
// }

// type T1 = keyof UserCard

// // 'name' | 'age' | 'cardTitle' | 'cardDesc'
// const a: T1 = 'name'


// // 泛型
// function getValue<T, K extends keyof T> (obj: T, key: K): T[K] {
//   return obj[key]
// }
