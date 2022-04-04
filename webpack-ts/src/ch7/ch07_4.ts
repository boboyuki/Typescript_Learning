// 在infer之前，補充extends用法 (Array)
// function sliceArr<T>(a: T) {
//   console.log(a.length)
// }

// function sliceArr<T extends Array<number>>(a: T) {
//   console.log(a.length)
// }



// infer用法
// var a = 100
// type TT1<T> = T extends Array<infer P> ? P : never;
// type R1 = TT1<['bruce', 1]>
// type R2 = TT1<number>


// function用法
// type ParamType<T> = T extends (param1: infer P) => any ? P : never

// type R1 = ParamType<(a: number) => void>

// interface UserCard { name: string }
// type R2 = ParamType<(a: UserCard) => void>

// type R3 = ParamType<[]>