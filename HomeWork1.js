// Homework  1.1

function oddOrEven(number){
    if(!parseInt(number) ){
        return "Not a number";
    }else
        return (number % 2 === 0) ? `The ${number} is even` : `The ${number} is odd`;

}


// Homework 1.2

function isDivided(number1,number2){
    if(!parseInt(number1) || !parseInt(number2)){
        return "Not a number"
    }else{
        return (number1%number2 === 0 || number2%number1 ===0)?1:0}
}

// Homework 1.3

function toAdd(number){
    res="";
    if(!parseInt(number)){
        return "Not a number";
    }else{
        number = Math.abs(number);
        for(i=1;  i<=3; i++){
            res += number*i;
        }
        return res;
    }
}

// Homework 1.4

function digitRevers1 (num) {
        num = String(num);
        if(num.slice(-1)==0){
            return num;
        }else{
            let res =  num.slice(-1) + num.substr(0, num.length-1);
            return res;
        }
    }

// Homework 1.5

function avarage(num1,num2,num3, num4, num5){
    let avarage=(num1+num2+num3+num4+num5)/5;
    return avarage;
}

// homework 1.6

function sort(a,b,c){
    let array = [a, b, c];
    let tmp = 0;
    for (i = 0; i <array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] < array[j]){
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }

    }
    return array;
}

// Homework 1.7

function numberSign(num1,num2,num3) {
    let minus = 0;
    let array = [num1,num2,num3];

    for(i = 0; i < array.length; i++) {
        if( array[i]===0){
            return 'unsigned';
        }else if(array[i]<0)
            minus++;
    }
    return (minus==0 || minus%2==0)?'+':'-';
}

// Homework 1.8

function quadruple(a,b,c) {
    let x1 = 0, x2 = 0;
    if( a === 0){
        return 'Enter valid constans';
    }else {
        let det;
        det = Math.pow(b,2)- 4*a*c;
        if(det < 0){
            return 'Solution does not exsist';
        }  else if (det === 0){
            x1 = -b/(2*a);
            return `Solution is ${x1}`;
        } else {
            x1 =(-b + Math.sqrt(det))/(2*a);
            x2 =(-b - Math.sqrt(det))/(2*a);
            return `Solution is ${x1}, ${x2}`;
        }
    }
}

// Homework 1.9

    var n = +prompt();
    var i = 0;
    var j = 0;
    if(n % 2 ===0 &&! Math.floor(n /10) ){
            i++;
        }
    if(n % 3 ===0 && n % 10 === 1){
            j++;
        }
    }


// Homework 1.10

function checkDigit( num1, num2){
    let number = String(num2);
    if(num1 > 10){
        return "First numbr isn't digit";
    }else {
        for(i = 0; i < number.length; i++){
            if (number[i]==num1){
                return 'Yes'}
        }
        return 'No';
    }
}

// Homework 1.11

function digitRevers (num) {
        if(num < 10){
            return num;
        }else{
            num = String(num);
            return num.slice(-1) + num.slice(1, num.length-1) + num[0];
        }
    }


// Homework 1.12
"use strict";
function area(figureName, height, widthOrBase){
    if(height === 0 || widthOrBase === 0 || figureName!='triangle' || figureName!='rectangle'){
        return `Please enter only positives /or figure name/`;
    }
    If (figureName === "triangle") {
        return `Square of the triangle is ${ height * widthOrBase / 2}`;
    } else {
        return `Square of the rectangle is ${height * widthOrBase }`;
    }
}

// Homework 1.13

"use strict";
function digitDifference(num){
    num = String(num);
    let maxDigit = num[0];
    let minDigit = num[0];
    for(i = 1; i <= num.length; i++){
        if(num[i] > maxDigit){
            maxDigit = num[i];
        } else if(num[i] < minDigit){
            minDigit = num[i];
        }
    }
    return maxDigit - minDigit;
}

