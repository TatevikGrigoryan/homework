//Homework 2.1

function chekPrime(num) {
    debugger;
    for (i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) return 'no';
    }
    return 'yes';
}

//Homework 2.2

function fibonachi(n) {
    if (n <= 1) return 0;
    if (n <= 2) return 1;
    return fibonachi(n - 1) + fibonachi(n - 2);
}


//Homework 2.3

function fibonachi(n) {
    if (n <= 1) return 0;
    if (n <= 2) return 1;
    return fibonachi(n - 1) + fibonachi(n - 2);
}

function fibonachiBefore(n) {
    let arr = [0];
    let i = 0;
    while (arr[i] < n) {
        i++;
        arr[i] = fibonachi(i + 1);
    }
    return arr.slice(0, arr.length - 1);
}


//Homework 2.4

function digitProductSum(num) {
    if (num === 0) return 'Cannot calculate.'
    num = String(num);
    let product = 1;
    let sum = 0;
    for (i = 0; i <= num.length - 1; i++) {
        product *= num[i];
        sum += +num[i];
    }
    if (product >= sum) {
        return product % sum === 0 ? `Quotient is ${product / sum}.` : `Remainder is ${product % sum}.`;
    } else return 'Cannot calculate';
}


//Homework 2.9

function interval(a, b, num) {
    if (a > b) return 'b must be greater or equal a';
    let arr = [a];
    let step = (b - a) / (num - 1);
    for (i = 1; i < num; i++) {
        arr[i] = a + step * i;
    }
    return arr;
}


//Homework 2.10

function secondMaxIndex(...num) {
    let arr = num;
    let secondMax = arr[0]
    let max = Math.max(...arr);
    for (index in arr) {
        if (secondMax <= arr[index] && !(arr[index] === max))
            secondMax = arr[index];
    }
    return arr.indexOf(secondMax);
}


//Homework 2.11

function arrayPad(padAmount, repeat, ...num) {
    let arr = num;
    if (arr.length < padAmount) return 'Invalid padding amount';
    let before = arr.slice(0, padAmount);
    let after = arr.slice(-padAmount, arr.length);
    for (i = 1; i <= repeat; i++) {
        arr = before.concat(arr);
        arr = arr.concat(after);
    }
    return arr;
}
