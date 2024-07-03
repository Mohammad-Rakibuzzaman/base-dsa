function binarySearch(arr, tar){

    let l = 0;
    let r = arr.length - 1;


    while( l <= r){
        
        let m = Math.floor((l + r) / 2);

        if (arr[m] === tar){
            return m;

        } else if (arr[m] < tar) {
            l = m + 1;           
        } else {
            r = m - 1;  
        }
    }

    return -1;
}


let arr = [24, 27, 29, 66, 98, 111];
let tar = 88;
let result = binarySearch(arr, tar);

console.log(result);





// let arr = [2, 45, 1, 2]

// let r = arr.length - 1;

// console.log(r)
// let a = 2;

// let b = 1;

// console.log(b / a);
// console.log(b % a);