function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
}

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]


function bubbleSort2(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // Sau n lần loop => tìm ra được phần tử lớn thứ n đó ở cuối mảng
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

const numbers = [8, 20, -2, 4, -6]
bubbleSort2(numbers)
console.log(numbers) // [-6, -2, 4, 8, 20]
