function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = numberToInsert
  }
}

const arr = [8, 20, -2, 4, -6]
insertionSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]


function insertionSort2(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      // move number to the first position
      // Bóc ra và dời lên đầu
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      // Nếu nó lớn hơn thì thôi, không làm chi cả
      if (array[i] < array[i-1]) {
        // find where number should go
        // loop trong mảng đã sort rồi, trừ thằng đầu ra, chạy từ 1 -> i
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

const numbers = [8, 20, -2, 4, -6]
insertionSort2(numbers);
console.log(numbers);