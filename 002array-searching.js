function findElement(arr, n, key) {
    let i;
    for (i = 0; i < n; i++) {
      if (arr[i] == key) {
        return i;
      }
    }
    return -1;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let key = 3;
  let n = arr.length;
  
  let index = findElement(arr, n, key);
  
  if (index == -1) {
    console.log("Element not found");
  } else {
    console.log("Element found at index " + index);
  }
  