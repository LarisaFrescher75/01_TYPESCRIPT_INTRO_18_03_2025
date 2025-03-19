var age1 = 30;
age1 = '50';
// пример неявной типизации
//let x = 50;
//x = '50'
var flag = false;
flag = true;
// number, string, boolean, null, undefined        bigint(888888888888888n), symbol
var arr = [1, 2, 3, 4, 5];
// arr.push('5') Пример ошибки типизации
var arr1 = ["1", "2", "3"];
var arr2 = [1, '2', 3, '4'];
console.log("Hello");
// Переменные разных типов
//let productName = "Laptop"; // Название товара
var productName = "Laptop";
var price = 1499.99;
var inStrock = true;
var discount = null;
var warranty;
var productCode = 1010;
productCode = "A1010";
if (!discount) {
    discount = 5;
}
if (!warranty) {
    discount = 5;
}
// Массив чисел (цены товаров)
var prices = [499, 1299, 799, 2499, 1599];
//prices.push("2000"); // Ошибка должна быть в TS
// // Массив строк (названия товаров)
var products = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];
// Массив, содержащий только числа или только строки
var ids1 = ["ID001", "ID002", "ID003"]; // Только строки
var ids2 = [101, 102, 103]; // Только числа
// Массив с числами и строками одновременно
var mixedValues = [1, "two", 3, "four", 5, "six"];
// Массив булевых значений
var toggles = [true, false, false, true, true];
// type Person = {
//     name: string,
//     age: number
// }
var person = {
    name: "Bill",
    age: 38
};
var direction = 'left';
direction = 'right';
direction = 'up';
direction = 'down';
//direction = 'eight';
