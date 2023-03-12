function func(){
	let expression = prompt("Введите выражение");
	if(expression != null && expression != undefined){
		console.log(expression);
		var numbers;
		if((numbers = expression.split("+"))){
			console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
		}
		else if((numbers = expression.split("-"))){
			console.log(parseInt(numbers[0]) - parseInt(numbers[1]));
		}
		else if((numbers = expression.split("*"))){
			console.log(parseInt(numbers[0]) * parseInt(numbers[1]));
		}
		else if((numbers = expression.split("/"))){
			console.log(parseInt(numbers[0]) / parseInt(numbers[1]));
		}
		else console.log("неизвестное выражение");
	}
	else{
		let operation = prompt("Введите желемую операцию:");
		let firstVar = prompt("Введите первое число:");
		let secondVar = prompt("Введите второе число:");
	}
	
}
func();