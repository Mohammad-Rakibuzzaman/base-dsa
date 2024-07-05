
function findElement(arr, n, key) {
    let i;
    for (i = 0; i < n; i++) {
      if (arr[i] == key) {
        return i;
      }
    }
    return -1;
  }
  
  function deleteElement(arr, n, key) {
    // Find position of element to be deleted
    let pos = findElement(arr, n, key);
  
    if (pos == -1) {
      console.log("Element not found");
      return n;
    }
  
    // Deleting element
    for (let i = pos; i < n - 1; i++) {        
      arr[i] = arr[i + 1];
    }
  
    return n - 1;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let key = 13;
  let n = arr.length;
  
  console.log("Array before deletion: " + arr);
  
  n = deleteElement(arr, n, key);
  
  console.log("Array after deletion: " + arr.slice(0, n));
  


// let arr = [5, 2, 3, 4, 5]
// let pos = 2;
// let n = arr.length;

// for (let i = pos; i < n; i++){
//     arr[i] = arr[i+1]; 
// }

// console.log(arr[1])





