function tryRemoveFromArray(array, index) {
    let arr1 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== index) {
            arr1.push(array[i]);
        }
    }
    if (arr1.length === 0) {
        return array;
    } else {
        return arr1;
    }
}

let array = [5, 3, 4, 6, 2, 12, 5, 24, 5,5,5,5, 4]
let number = 5
let result = tryRemoveFromArray(array, number)
document.write(result + "<br>" + number)
