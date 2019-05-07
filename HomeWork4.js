// homework 4.1

function newLargerArray(arr, num) {
    var res = [];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > num) {
            res.push(arr[i])
        }
    }
    if (res.length === 0) return 'Such values do not exist.'
    return res;
}

//homework 4.2

function getEvenDigitNumber(num) {
    for (let i = String(num).length - 1; i >= 0; i--) {
        if (String(num)[i] % 2 !== 0) {
            num += Math.pow(10, String(num).length - 1 - i);
        }
    }
    return num;
}

function getNewArrayBetween(num1, num2) {
    let arr = [];
    num1 = getEvenDigitNumber(num1);
    if (num1 > num2) return 'Such numbers does not exist.';
    do {
        arr.push(num1);
        num1 = getEvenDigitNumber(num1 + 2);
    } while (num1 <= num2)
    return arr;

}

// homework 4.3

function digitsOddOrNot(num) {
    if (num < 10) {
        if (num % 2 === 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return (digitsOddOrNot(num % 10) && digitsOddOrNot(Math.floor(num / 10)));
    }
}


//Homeworrk 4.4

function getMinimalPositive(arr) {
    arr = arr.filter(i => i >= 0);
    if (arr.length === 1){ 
            return arr[0];
    } else if (arr.length === 0) 
            return -1;
     if (arr[0] < arr[1]) {
        arr.splice(1, 1);
        return getMinimalPositive(arr);
       }
        arr.splice(0, 1);
        return getMinimalPositive(arr);
}
//homework 4.5

function getViolatIndex(arr) {
    var res = arr.filter((a, b) => {
        if (a - b > 0) return a;
    });
    if (res.length === 0) return -1;
    return arr.indexOf(res[0]) + 1;
}
