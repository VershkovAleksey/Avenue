/* var arrayFirst; //undefined
arrayFirst = ["Tom", "Bill", "Danil","Lilia"];

var copyArray = arrayFirst;
copyArray[1] = "Vlad";
console.log("первый массив после неглубокого копирования: " + arrayFirst);
copyArray = arrayFirst.slice();
copyArray[1] = "Aleksey";
console.log("Второй массив после глубокого копирования: " + copyArray);
console.log(arrayFirst);
// slice() с аргументами
console.log(arrayFirst.slice(2, 4));


arrayFirst.push("Vlad");

arrayFirst.pop();
console.log(arrayFirst);

var shifted = arrayFirst.shift();
console.log(shifted);

var deleted = arrayFirst.splice(-2);
console.log(deleted);
arrayFirst.push(deleted);
console.log(arrayFirst);

const hello = "привет мир. пока мир";
const bye1 = hello.slice(-8, -4); // с 8-го индекса с конца до 4 индекса с конца
console.log(bye1); //
const bye2 = hello.substring(-8, -4); // не работает
console.log(bye2); // */

function logInfo(){
    console.log("Привет мир");
}

function logInfo(message){
    console.log(message);
}
logInfo("javaaript");

function display(season, ...temps)
{
	console.log(season);
	for(index in temps)
	{
		console.log(temps[index]);
	}
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);
var expression = prompt("Введите выражение: ");
function sum(){
    if(expression != null && expression != undefined){
        
        return parseInt(numbers[0]) + parseInt(numbers[1]);
    }
}
function checkOperation(){
    var numbers = expression.split("+");
    console.log(numbers.length);
}
checkOperation();