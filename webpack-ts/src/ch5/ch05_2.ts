// 泛型
// <>

// T -> type
function print<T>(data: T) {
  let name: T
  console.log(data)
}

// function print(data: string) {
//   console.log(data)
// }

// function print(data: number) {
//   console.log(data)
// }

// function print(data: boolean) {
//   console.log(data)
// }

// 使用
print<string>('bruce')
print<number>(99)
print<boolean>(true)

