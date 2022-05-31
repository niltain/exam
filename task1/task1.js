function findMax(arr,max){
    max = arr[0]
    for (let i = 1; i <arr.length; i++){
    if (max<arr[i]){
        max = arr[i]
    }
    }
   return max
}
let array = [5,3,4,6,2,12,5,24]
let result = findMax(array)
document.write(result)


