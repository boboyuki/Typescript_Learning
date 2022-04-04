// enum 枚舉

// 0 1 2
// 0 -> 關播
// 1 -> 開播
// 2 -> 多人連線開播

enum LiveStatus {
  'streaming' = 0,
  'closed' = 1,
  'mutiple' = 2
}

let liveStatus = 0

if (liveStatus === LiveStatus.streaming) {
  // ....
}