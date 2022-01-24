// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

let isZero = false      

for(i =0; i < array.length - 1; i++ ){
    for(j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === 0){
            isZero = true
        }
    }
}

if (isZero) {
    console.log("True")
} else {
    console.log("False")
}