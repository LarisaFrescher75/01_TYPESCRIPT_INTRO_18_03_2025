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


// Переменные разных типов
//let productName = "Laptop"; // Название товара

let productName : string = "Laptop";
let price : number = 1499.99;
let inStrock : boolean = true;
let discount : null | number = null;
let warranty: undefined | string;
let productCode : string | number = 1010;
productCode = "A1010";


if (!discount) {

    discount = 5;
}

if (!warranty) {

    discount = 5;
}

// Массив чисел (цены товаров)

const prices : number[] = [499, 1299, 799, 2499, 1599];
//prices.push("2000"); // Ошибка должна быть в TS



// // Массив строк (названия товаров)
 const products : string[] = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];


// Массив, содержащий только числа или только строки

 const ids1: string[] = ["ID001", "ID002", "ID003"]; // Только строки




 const ids2 : number[] = [101, 102, 103]; // Только числа

// Массив с числами и строками одновременно
const mixedValues : (string | number)[]= [1, "two", 3, "four", 5, "six"];

// Массив булевых значений
const toggles : boolean[]= [true, false, false, true, true];


interface IPerson {
    name: string,
    age: number  
}

// type Person = {

//     name: string,
//     age: number
// }



const person :IPerson = {

    name :"Bill",
    age: 38
    
}

type Direction = 'left' | 'right' | 'up'  |'down';
    
let direction: Direction= 'left';
direction = 'right';
direction = 'up';
direction = 'down';

//direction = 'eight'; ошибка типизации значения переменной direction

const sum = (a: number, b: number): string | number => {

   return (a + b > 100 ?
     a + b :
      a + b + ""
    );
}; 

console.log(typeof sum(2, 5));
//console.log(sum('2', 5));
//console.log(sum(true, 5));



 