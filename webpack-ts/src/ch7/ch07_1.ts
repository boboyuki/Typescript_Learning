// function hello(text: string) {
//   console.log(text);
// }

// function hello2(text: number) {
//   console.log(text);
// }

// hello('bruce')
// hello2(999)
// T = type
function hello<T, U>(text: T, text2: U): U {
  let data: T = text
  let data2: U = text2
  console.log(text, text2);
  return data2
}

hello<string, number>('bruce', 999)
hello<number, boolean>(100, true)