var value1; //объявление переменной
let value2;
const cnstvalue = 10;

//Инициализация т.е. присваивание значений
value1 = `привет ${cnstvalue} `;
value2 = 20;

//можно объявить переменную и сразу же ее инициализировать
var value3 = 30;

console.log(value1 + value2 + value3 + cnstvalue);
console.log(value2 + value3 + cnstvalue);

//Типы данных
//String  - это строка. Строка это все что в кавычках
//Number - это все числа, от 2^53 до -2^53
//bigInt = это то же самое 173217731278378120n
//Boolean = это булевые значение, может быть true false
//undefined - это тип, до инициализации переменной или та переменная которой не присвоено значение
// null - это отсутствие чего либо
// object - сложный тип
var bool = false;
var bigInt = 123912931289312n;
var number;
var string = "Ппрривет";
console.log(typeof(number));

var value4 = value3--;
console.log(value4);
alert("123");
var newvar = "";