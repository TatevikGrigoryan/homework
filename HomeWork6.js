/*Given an array of integers, find the pair of adjacent
elements that has the largest product and return that product.*/

//homework 6.1

function largestProduct(arr) {
    let res = -Infinity;
    let tmp;
    for (let i = 0; i < arr.length - 1; i++) {
        tmp = arr[i] * arr[i + 1];
        if (tmp > res) {
            res = tmp;
        }
    }
    return res;
}

/*Given an array of integers. All numbers are unique. Find the count of missing numbers between 
minimum and maximum elements to make integers sequence.*/

//homework 6.2

function missingNumCount(arr) {
    let res;
    arr.sort((a, b) => {
        return a - b
    });
    res = arr[arr.length - 1] - arr[0] + 1 - arr.length;
    return res;
}


/*Convert a long phrase to its acronym.*/

//homework 6.3

function acronym(phrase) {
    let res = '';
    phrase = phrase.split(' ');
    for (let i = 0; i < phrase.length; i++) {
        res += (phrase[i].slice(0, 1)).toUpperCase();
    }
    return res;
}

/*Given a string of digits, output all the contiguous 
substrings of length n in that string.*/

//homework 6.4

function substrings(str, num) {
    let res = [];
    for (let i = 0; i <= str.length - num; i++) {
        res.push(str.slice(i, num + i));
    }
    return res;
}


/*Create a function that builds a tree like object given an array with object which contains parent and id properties.*/

//homework 6.5

function buildTree(arr, res = {}) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parent === null) {
            res[arr[i].id] = {};
            arr.splice(i, 1);
            break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        tree(arr[i], res);
    }
    return res;
}

function tree(arr, res) {
    for (let key in res) {
        if (arr.parent == key) {
            res[key][arr.id] = {};
            return res;
        } else {
            tree(arr, res[key])
        }
    }
}