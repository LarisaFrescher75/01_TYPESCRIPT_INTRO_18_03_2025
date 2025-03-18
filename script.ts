let age : number = 30;// числа до 2 в 53 степени(а также  NaN)
// age = '50' - ошибка типизации

let age1: number | string = 30;
age1 = '50';


// пример неявной типизации
//let x = 50;
//x = '50'

let flag: boolean = false;
flag = true;


// number, string, boolean, null, undefined        bigint(888888888888888n), symbol


const arr: number[] =[1, 2, 3, 4, 5];
// arr.push('5') Пример ошибки типизации


const arr1: number[]  | string[] = ["1", "2", "3"];

const arr2: (number  | string)[] = [ 1, '2', 3, '4'];

console.log("Hello");



