// extends 一般用法

// interface
// interface A {
//   name: string
// }
// interface B extends A {}

// const b: B = { name: '' }

// class
// class AA {}
// class BB extends AA {}


// 在條件判斷上的extends
// type T1 = string extends boolean ? string : number
// const a: T1 = ''
// 子介面
// type T2 = B extends A ? string : number

// 誰能滿足誰？
// interface C { name: string }
// interface D { name: string, age: number }
// type T3 = D extends C ? string : number

// 基本泛型用法
// type TT1 = 'bruce' extends 'bruce' ? string : number
// type TT1<T> = T extends 'bruce' ? T : number
// type res = TT1<'aaa'>

// Union泛型用法
// type TT2 = 'bruce' | 'bruce2' extends 'bruce' ? string : number

// type TT3<T> = T extends 'bruce' ? string : number
// type R1 = TT3<'bruce' | 'bruce2'> 

// 1. 'bruce' -> T = string
// 2. 'bruce2' -> T = number
// string | number

// never 是所有類型的子類別
// type N1 = never extends 'bruce' ? string : number

// type N2<T> = T extends 'bruce' ? string : number
// 被當成一個空的union
// type R3 = N2<never> 

// type TT4<T> = [T] extends ['bruce'] ? string : number
// type R2 = TT4<'bruce' | 'bruce2'> 