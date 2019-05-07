//homework 5.1
/*Given an array. Write a recursive function that removes the
first element and returns the given array. (without using
arr.unshift(),assign second element to first, third element to
second...)*/

function getArrWithoutFirstElem(arr, res=[]){
	if(arr.length <= 1){
		return [];
	}
	res.push(arr[1]);
	getArrWithoutFirstElem(arr.splice(1), res);
	return res;
}

//homework 5.2
/*Given an array of nested arrays. Write a recursive function
that flattens it. (Hint create function that concats arrays).*/
function concatArray(arr, res = []){
	if(arr.length === 0){
		return arr;
	}
if(Array.isArray(arr[0])){
 concatArray(arr[0],res);
}else{
res.push(arr[0]);
}
res.concat(concatArray(arr.splice(1),res));
return res;;
}


//homework 5.3
/*Given a number. Write a function that calculates its sum of
the digits and if that sum has more than 1 digit find the sum of
digits of that number. Repeat that process if needed and return
the result.*/

function singleSumOfDigits(num){
while( num >= 10 ){
let sum = 0;
	for(let i = 0; i < String(num).length; i++){
		sum += +String(num)[i]
    }
	num = sum;
   }
return num;
}


//homework5.4
/*Given an array and a number N.  Write a recursive
function that rotates an array N places to the left. (Hint: to
add element to the beginning use arr.unshift())*/

function arrayRotate(arr, num){
	if(num === arr.length || num === 0){
		return arr;
	}
	arr.unshift(arr[arr.length-1]);
	arr.pop(arr[arr.length-1]);
	return arrayRotate(arr, ++num);
}


//homework 5.5
/*Given an object. Invert it (keys become values and values
become keys). If there is more than key for that given value
create an array.*/

 function getNewObject(obj){
	let res = {};
	outer: for(objkey in obj){
 	debugger;
 		for(reskey in res){
			if(reskey === String(obj[objkey])){
			
			if(Array.isArray(res[reskey])){
				res[reskey].push(objkey);
			}else{
				let ar1=[];
				ar1.push(res[reskey]);
				ar1.push(objkey);
				res[obj[objkey]] = ar1;
            }
   			continue outer;
			}
		}
		res[obj[objkey]] = objkey;
	}
return res;
 }


//homework 5.6
/*[
{ book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
{ book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
{ book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
{ book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
{ book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
{ book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.*/
function listSort(arrlist){
debugger;
let res = arrlist.filter( index => index.readStatus === true );
res = res.sort( (a,b)=> { return b.percent - a.percent} );
return res;
}
