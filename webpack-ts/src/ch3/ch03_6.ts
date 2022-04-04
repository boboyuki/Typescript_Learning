// // union
// const arr7: (string | boolean)[] = []
// arr7.push(false)
// arr7.push('')

// let liveName: string | number
// liveName = 'bruce'
// liveName = 99
// liveName = false

// // never 永遠不可能發生
// if (typeof liveName === 'string') {
//   liveName.split()
// }
// function error(message: string): never {
//     throw new Error(message);
// }

// // TS 推論回傳值為 Never 
// function fail() {
//     return error("Something failed");
// }

// // 明確註記為 never 型別：函式不會有任何結束的執行點
// function infiniteLoop(): never {
//     while (true) {
//     }
// }

// // 若randow < 0.5 函式有終點，報錯
// function randomFail(): never{
//     let random = Math.random()
//     if(random >0.5){
//         throw new  Error('error')////Error: A function returning 'never' cannot have a reachable end point.
//     }
// }
// // 強制斷言 
// let liveName2 = 999

// // ....

// let liveName3 = liveName2 as unknown as string