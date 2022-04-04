// overload function重載

// 多個一樣的名稱的function 

// function getData(data: string) {
//   // ....
// }

// function getData2(data: number) {
//   // ....
// }

// overload

type Info2 = {}

function getData(data: string): string[]
function getData(data: number): number
function getData(data: boolean): boolean
function getData(data: Info2): Info2
function getData(data: unknown): unknown {
  console.log();
  if (typeof data === 'string') return []
  if (typeof data === 'number') return 999
  // 判斷 Info2
  // return 某個data
  return false
}

getData(99)
getData('')
getData(false)

// error
function hello2(data: string): string[]
function hello2(data: number): number
function hello2(data: number | string): number | string[] {
  return 999
}