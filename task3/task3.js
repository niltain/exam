function isFibonacci(num) {
    let a = 1;
    let b = 1;
    let c;
    do {
        c = a + b;
        a = b;
        b = c;
    } while (c < num)
    if (num === 1 ||c===num) {
        return true;
    } else {
        return false;
    }
}
let number = 5
console.log(isFibonacci(number))