//homework 3.1

function creatX(n){
let res = '\n';
for(let i = 0; i < 2*n-1 ; i++){
	for(let j = 0; j < 2*n-1; j++){
	if(j ===i || j === 2*n-i-2){
		res +='*';	
		}else{
		res +=' '
        }
	}
res +='\n';
}
return res;
}

//homework 3.2

function frequency(arr){
let length=arr.length;
let res={};
for(i = 0; i < arr.length; i++){
let qanak = 1;
	for(j = i+1; j < arr.length; j++){
		if(arr[i] === arr[j]){
				qanak++;
			arr.splice([j],1);
			}
		}
	res[arr[i]] = qanak/length;
	}
return res;
}


// homework 3.3

function numberStringCount(arr){
let numberCount = 0;
let stringCount = 0;
for(let i = 0; i < arr.length; i++){
	 if(typeof(arr[i]) === "number"){
			numberCount++;
		}else{
			stringCount++;
		}	
	}

return `Numbers: ${numberCount}, Strings:${stringCount}`;
}

//homework 3.4

function longestWord(sentence){
debugger;
let longestWord = '';
let word = sentence[0];
for (i = 1; i < sentence.length; i ++){
		if(sentence[i] === ' ' || sentence[i] === '-' || sentence[i] === ','|| i === sentence.length-1 ){
			 if(i === sentence.length-1 && sentence[i]!=='.' && sentence[i] !== '!' && sentence[i] !== '?'){
					word += sentence[i];
             }
			if(longestWord.length <= word.length){
				longestWord = word;
			}
			word ='';
			// payman, vorpeszi storaketic heto grvac bacat@ bac toxni
			(sentence[i] === ',' && sentence[i+1] === ' ')? i += 2: i ++;
		}
	word += sentence[i];
}
return longestWord;
}

//homework 3.5


function getLongestSubString(string){
let longestSubstring = '';
let tmp = '';
let index;
for(let i = 0; i <= string.length; i ++ ){
	if( string[i] ===' ' || tmp.indexOf(string[i]) === -1){
		tmp += string[i];
	 }else {
		//durs enq hanum bacat@ ete ayn skzbum e
		if (tmp[0] === ' '){
			tmp = tmp.slice(1);
		}
		//durs enq hanum bacat@ ete ayn verjum e
		if(tmp[tmp.length - 1] === ' '){
			tmp = tmp.slice(0, tmp.length-1)
		}
		if(longestSubstring.length <= tmp.length){
			longestSubstring = tmp; 
     	}
		index = tmp.indexOf(string[i]);// gtnum enq ayn index@ vorum pahvox element@ krknvel e
		tmp = tmp.slice(index+1) + string[i];
		}
	}
return longestSubstring;
}


//homework 3.6

function charReverse(str){
let res = '';
let temp = Math.floor(str.length/3);
	for(i = 0; i < temp*3; i += 3){
		res += str[i+1]+str[i+2]+str[i];
	}
return res + str.slice(temp*3,str.length);
}

// homework 3.7

function productBiggestNegative(arr){
let maxNegative = -Infinity;
let isNegative = 0;
let res = 1;
if(arr.length === 1){
	return'Invalid Argument'; 
	}
for(i = 0; i < arr.length; i ++){
	for(j = 0; j < arr[i].length; j ++){
		if(!parseInt(arr[i][j]) && arr[i][j] !== -Infinity && arr[i][j] !== Infinity && arr[i][j] !==0 && arr[i][j] !==-0 ){
			return 'array\'s  element is not a numbers';
        }
		if(arr[i][j] < 0  && maxNegative <= arr[i][j]){
			maxNegative = arr[i][j];
			isNegative = true;
        }
    }
if(isNegative === true){
res *= maxNegative;
maxNegative = -Infinity;
isNegative = false;
}
}
if(isNegative === 0){
	return 'No negatives';
	}
return res;
}

//homework 3.8

function getArray(arr){
let key;
let res = [];
let arr1= [];
	for(i = 0; i < arr.length-2; i++){
		arr1.push(arr[i]);
		for(j = i + 1; j < arr.length-1;j++){
		arr1.push(arr[j]);
			for(l = j + 1; l < arr.length; l++){
				arr1.push(arr[l]);
				res.push(arr1);
				arr1 = arr1.slice(0,2);
			}
			arr1 = arr1.slice(0,1);
        }
arr1 = [];
	}
for(let i in res){
console.log(res[i]);
}
}

