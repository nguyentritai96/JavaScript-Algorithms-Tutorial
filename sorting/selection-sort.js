function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // Sau n lần loop => tìm ra được phần tử nhỏ thứ n đó ở đầu mảng

    
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

const numbers = [8, 20, -2, 4, -6];
selectionSort(numbers);
console.log(numbers);