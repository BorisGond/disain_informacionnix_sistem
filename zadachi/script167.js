//1
for (let i = 1; i <= 100; i++) {
    alert(i);
  }

//2
for (let i = 100; i >= 1; i--) {
    alert(i);
  }

//3
for (let i = 2; i <= 100; i += 2) {
    alert(i);
  }

//4
let arr1 = [];
for (let i = 0; i < 10; i++) {
  arr1.push("x");
}
alert(arr1); 

//5
let arrr = []
for( let i = 1; i <= 10;i++) {
	arrr.push(i)
	alert(arrr)
}

//6
let arr2 = [2, 5, 15, -1, 8, 0, 11];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 0 && arr2[i] < 10) {
    (alert[i]);
  }
}

//7
let arr3 = [2, 5, 15, -1, 8, 0, 11];
let hasFive = false;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 5) {
    hasFive = true;
    break;
  }
}
if (hasFive) {
  alert('В массиве есть элемент со значением 5');
} else {
  alert('В массиве нет элемента со значением 5');
}

//Задание 8
let arr4 = [2, 5, 15, -1, 8, 0, 11];
let sum3 = 0;
for (let i = 0; i < arr4.length; i++) {
  sum3 += arr4[i];
}
alert('Сумма элементов массива: ' + sum3);
//9
let arr5 = [2, 5, 15, -1, 8, 0, 11];
let sum1 = 0;
for (let i = 0; i < arr5.length; i++) {
  sum1 += arr5[i] ** 2;
}
alert('Сумма квадратов элементов массива: ' + sum1);
//10
let arr6 = [2, 5, 15, -1, 8, 0, 11];
let sum2 = 0;
for (let i = 0; i < arr6.length; i++) {
  sum2 += arr6[i];
}
let average = sum2 / arr6.length;
alert('Среднее арифметическое элементов массива: ' + average);
//11
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
alert('Факториал числа ' + num + ' равен: ' + factorial);
//12
const arr22 = [];
for (let i = 10; i >= 1; i--) {
  arr22.push(i);
}
alert(arr22); 
//13
let array1 = [-4,0,2,5,-12];
let a = 0;
for( let i of array1){
  if(i >= 0){
    a += i
  }
}
alert(array1); 
//14
let arr7 = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr7.length; i++) {
  let ae = String(arr7[i])[0];

  if (ae === "1" || ae === "2" || ae === "5") {
    alert(arr7[i]);
  }
}
//15
let arr11 = [10, 20, 30, 50, 235, 3000];
let rev = arr11.reverse();
alert(rev)
//16
let arr12 = [10, 1, 2, 50, 4, 3000];
for (let i = 0; i < arr12.length-1; i++){
  if(i==arr12[i]){console.log(i)}
}
//17
let arr13 = [1,2,3,4,5,6];
for (let i of arr13){
  document.write(i + "<br>")
}
//18
let arr14 = [1,2,3,4,5,6];
for (let i of arr14){
  document.write(i + "<p>")
}
//19
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for(let i of week){
  if(i =='Суббота' || i == 'Воскресенье'){
    document.write(`<br>`+`<b>`+ i + `<br>`)
  }else{
    document.write(`<br>`+ i + `<br>`)
  }
}
//20
const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day =  Date().getDay();
for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === day) {
    alert($,daysOfWeek,[i]);
  } else {
    alert(daysOfWeek[i]);
  }
}
//21
let obj3 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let i = 1; i < 8; i++){
  obj3['employee'+ i] *=1.1
}
alert(obj3)
//22

let obj2 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let i = 1; i < 8; i++){
  if(obj2['employee'+ i] <= 400){
    obj2['employee'+i] *= 1.1
  }
}
alert(obj2)
//23
let arr17 = [1, 2, 3, 4, 5];
let arr27 = [6, 7, 8, 9, 10];
let obj23 = {};

for (let i = 0; i <= 4; i++) {
	let key = keys[i];
	let value = values[i];
	
	obj23[key] = value;
}

alert(obj23);

//24
let obj6 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let keys = Object.keys(obj6);
let sum8 = 0;
let sum80 = 0;

for(i = 0; i < 5; i ++){
  sum8 += +keys[i]
  sum80 += obj[keys[i]]
}
alert(sum8/sum80)
//25
let obj4 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
let sum9 = [];
let sum90 = [];
for(let key in obj4){
  sum9.push(key)
  sum90.push(obj4[key])
}
alert(sum9);
alert(sum90);
//26
let obj7 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let sum0 = [];
let sum = [];
for(let key in obj){
  sum0.push(obj[key])
}
for( let i of sum0){
  if(+String(i)[0] == 1 || +String(i)[0] == 2){
    sum.push(i)
}
}
alert(sum)
//27
let arr26 = ['a', 'b', 'c', 'd', 'e'];
let obj21 = {};

for(let i = 0; i < arr21.length; ++i){
    obj21[i+1] = arr26[i]
}
alert(obj21) 
//28
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for(let i = 0; i < arr.length; ++i){
    obj[arr[i]] = i+1
}
alert(obj)