function recursiveFibonacci(n, tag) {
  console.log(tag, 'start', n)
  if (n < 2) {
    console.log(tag, 'base case', n)
    return n
  }

  console.log(tag, 'middle', n)

  const a = recursiveFibonacci(n - 1, `trước n=${n - 1}:`)
  console.log(tag, `value f(n-1) của n=${n}`, a)

  const b = recursiveFibonacci(n - 2, `sau n=${n - 2}:`)
  console.log(tag, `value f(n-2) của n=${n}`, b)

  console.log(tag, 'result', a + b)

  return  a + b
}

// console.log(recursiveFibonacci(0)) // 0
// console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(5, 'khởi động n=5:')) // 5

/*
  Vòng đệ quy như là async 
  => khi đụng "hàm đệ quy đầu tiên", sẽ ngừng code phía dưới "hàm đệ quy đầu tiên"
  => đẩy tất cả code phía trên "hàm đệ quy đầu tiên" vào call stack cho đến base case (n===0) hoặc return undefined
  => thoát ra vòng hiện tại, vòng lại, chạy code phía dưới đệ quy của vòng trước đó
  => "hàm đệ quy thứ 2" dùng biểu thức đã có ở "hàm đệ quy 1"
*/

/* 
khởi động n=5: start 5
khởi động n=5: middle 5
  => đụng đệ quy 1, đẩy hết code vòng đệ quy 1 tiếp theo vào stack cho đến khi đụng base case để out ra
  trước n=4: start 4
  trước n=4: middle 4
  trước n=3: start 3
  trước n=3: middle 3
  trước n=2: start 2
  trước n=2: middle 2
  trước n=1: start 1
  trước n=1: base case 1 -> [f(1) = 1]
  => thoát đệ quy 1, code chạy xuống phía dưới, theo vòng ngược lại

  => chạy code phía dưới cho n=2
  trước n=2: value f(n-1) của n=2 1
  => đụng đệ quỵ 2, đẩy hết code phía trên đệ quy 2 tiếp theo vào stack cho đến khi đụng base case
    sau n=0: start 0
    sau n=0: base case 0 => out đệ quy 2
  trước n=2: value f(n-2) của n=2 0
  trước n=2: result 1 => out vòng n = 2

  => chạy code phía dưới cho n=3
  trước n=3: value f(n-1) của n=3 1
  => đụng đệ quỵ 2, đẩy hết code phía trên đệ quy 2 tiếp theo vào stack cho đến khi đụng base case
    sau n=1: start 1
    sau n=1: base case 1 => out đệ quy 2
  trước n=3: value f(n-2) của n=3 1
  trước n=3: result 2 => out vòng n = 3

  => chạy code phía dưới cho n=4
  trước n=4: value f(n-1) của n=4 2
  => đụng đệ quỵ 2, đẩy hết code phía trên đệ quy 2 tiếp theo vào stack cho đến khi đụng base case
    sau n=2: start 2
    sau n=2: middle 2
     => đụng đệ quy 1, đẩy hết code phía trên đệ quy 1 tiếp theo vào stack cho đến khi đụng base case
      trước n=1: start 1
      trước n=1: base case 1
    sau n=2: value f(n-1) của n=2 1
    => đụng đệ quỵ 2, đẩy hết code phía trên đệ quy 2 tiếp theo vào stack cho đến khi đụng base case
      sau n=0: start 0
      sau n=0: base case 0
    sau n=2: value f(n-2) của n=2 0
    sau n=2: result 1 => out đệ quy 2
  trước n=4: value f(n-2) của n=4 1
  trước n=4: result 3 => out vòng n = 4

=> chạy code phía dưới cho n=5
khởi động n=5: value f(n-1) của n=5 3
  => đụng đệ quy 2, đẩy hết code phía trên đệ quy 2 tiếp theo vào stack cho đến khi đụng base case
  sau n=3: start 3
  sau n=3: middle 3
    => đụng đệ quy 1
    trước n=2: start 2
    trước n=2: middle 2
    trước n=1: start 1
    trước n=1: base case 1 -> thoát đệ quy 1
  
    trước n=2: value f(n-1) của n=2 1
      => đụng đệ quy 2
      sau n=0: start 0
      sau n=0: base case 0
    trước n=2: value f(n-2) của n=2 0
    trước n=2: result 1
  sau n=3: value f(n-1) của n=3 1
    => đụng đệ quy 2
    sau n=1: start 1
    sau n=1: base case 1
  sau n=3: value f(n-2) của n=3 1
  sau n=3: result 2
khởi động n=5: value f(n-2) của n=5 2
khởi động n=5: result 5
*/