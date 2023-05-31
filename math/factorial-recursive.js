function recursiveFactorial(n, tag) {
  console.log(tag, n, 'start')

  if (n === 0) {
    console.log(tag, n, 'base case')

    return 1
  }
  console.log(tag, n, 'middle')
  const value = recursiveFactorial(n - 1, `lặp n=${n-1}:`)
  console.log(tag, n, 'value của f(n - 1) = ', value, 'end')
  return n * value
}

// console.log(recursiveFactorial(0)) // 1
// console.log(recursiveFactorial(1)) // 1
console.log(recursiveFactorial(5, 'khởi động n=5:')) // 120


/*
  Vòng đệ quy như là async 
  => khi đụng hàm đệ quy, sẽ ngừng code phía dưới hàm đệ quy
  => đẩy tất cả code phía trên hàm đệ quy vào call stack cho đến base case (n===0) hoặc return undefined
  => thoát ra vòng hiện tại, vòng lại, chạy code phía dưới đệ quy của vòng trước đó
*/

/*
khởi động n=5: 5 start
khởi động n=5: 5 middle

=> đụng đệ quy 1. Đẩy hết code trong vòng đệ quy tiếp theo vào stack cho đến khi gặp base case
lặp n=4: 4 start
lặp n=4: 4 middle
lặp n=3: 3 start
lặp n=3: 3 middle
lặp n=2: 2 start
lặp n=2: 2 middle
lặp n=1: 1 start
lặp n=1: 1 middle
lặp n=0: 0 start
lặp n=0: 0 base case => đụng base case

=> thoát đệ quy, chạy có phía dưới đệ quy theo vòng ngược lại
lặp n=1: 1 value của f(n - 1) =  1 end
lặp n=2: 2 value của f(n - 1) =  1 end
lặp n=3: 3 value của f(n - 1) =  2 end
lặp n=4: 4 value của f(n - 1) =  6 end
khởi động n=5: 5 value của f(n - 1) =  24 end

*/