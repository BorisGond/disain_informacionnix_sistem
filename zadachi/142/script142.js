"use strict"
let num = 4;

if (num == 12 || num <= 2) {
	console.log('зима');
} else if (num <= 5) {
	console.log('весна');
} else if (num <= 8) {
	console.log('лето');
}
else if (num <= 11) {
	console.log('осень');
}

let b = "abcde"
if (b[0] == 'a') {
	console.log('да');
} else {
    console.log('нет')
}

let str = '12345';
if (str[0] == 1 || str[1] == 2 || str[2] == 3 ) {
	console.log('да');
} else {
    console.log('нет')
}

let num1 = 123;
let num2 = String(num1)
console.log(+num2[0] + +num2[1] + +num2[2])

let num3 = 222222;
let num4 = String(num3);
let num5 = (+num4[0] + +num4[1] + +num4[2]);
let num6 = (+num4[3] + +num4[4] + +num4[5]);
if(num5 == num6){
    console.log('да');
} else {
    console.log('нет')
}












