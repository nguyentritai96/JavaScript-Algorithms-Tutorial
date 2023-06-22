function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  const sortedArr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  const resultArr = [...sortedArr, ...leftArr, ...rightArr]
  return resultArr
}

const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr)) // [-6, -2, 4, 8, 20]





function mergeSort2(array) {
  if (array.length === 1) {
    return array
  }
  
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)

  const merged = merge2(
    mergeSort2(left),
    mergeSort2(right)
  )

  return merged
}

function merge2(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  

  return result.concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const numbers = [8, 20, -2, 4, -6]
console.log(mergeSort2(numbers))