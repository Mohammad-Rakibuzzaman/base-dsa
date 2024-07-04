
// Traversing over arr[]

// let arr = [1, 2, 3, 4, 5]

// for (let x of arr)
//     console.log(x)


// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }




// javascript Program to Insert an element
// at a specific position in an Array
function insertElement(arr, n, x, pos)
{
    // shift elements to the right
    // which are on the right side of pos
    let i = n - 1;
    for (i; i >= pos; i--)
    {
        arr[i + 1] = arr[i];
    }
    arr[pos] = x;

    return arr;
}

let arr = [1, 2, 3, 7, -2]

let x = 25;
let pos = 3;

let result = insertElement(arr, arr.length, x, pos);

console.log(result);



