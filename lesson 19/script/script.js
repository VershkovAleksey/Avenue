//калькулятор

function getAverage(array) {
    let srednee = 0;
    for (elem of array) {
        srednee = srednee + elem;
    }
    let numbers = "5 + 2".split("+");
    console.log(array.length);
    return srednee / array.length;
}
console.log(getAverage([2, 3, 4]));

// + - * / 

function getSum(num1, num2) {
    return num1 + num2;
}
function getMinus(num1, num2) {
    return num1 - num2;
}
function getMultiply(num1, num2) {
    return num1 * num2;
}
function getDiv(num1, num2) {
    return num1 / num2;
}

function getExpression() {
    let expressionArr = [];
    let expression = prompt("Введите ваше выражение: ");
    if (expression.indexOf("+") !== -1) {
        expressionArr.push("+");
        let numbers = expression.split("+");
        expressionArr.push(parseInt(numbers[0].trim()));
        expressionArr.push(parseInt(numbers[1].trim()));

    }
    else if (expression.indexOf("-") !== -1) {
        expressionArr.push("-");
        let numbers = expression.split("-");
        expressionArr.push(parseInt(numbers[0].trim()));
        expressionArr.push(parseInt(numbers[1].trim()));
    }
    else if (expression.indexOf("*") !== -1) {
        expressionArr.push("*");
        let numbers = expression.split("*");
        expressionArr.push(parseInt(numbers[0].trim()));
        expressionArr.push(parseInt(numbers[1].trim()));
    }
    else if (expression.indexOf("/") !== -1) {
        expressionArr.push("/");
        let numbers = expression.split("/");
        expressionArr.push(parseInt(numbers[0].trim()));
        expressionArr.push(parseInt(numbers[1].trim()));
    }
    else {
        alert("Введено неверное выражение. Введите выражение формата 'Number' operationn 'Number'");
    }
    console.log(expressionArr);
    return expressionArr;
}

function Calculation() {
    while (true) {
        let expression = getExpression();
        if (expression[0] === '+') {
            alert(getSum(expression[1], expression[2]));
        }
        else if (expression[0] === '-') {
            alert(getMinus(expression[1], expression[2]));
        }
        else if (expression[0] === '*') {
            alert(getMultiply(expression[1], expression[2]));
        }
        else if (expression[0] === '/') {
            alert(getDiv(expression[1], expression[2]));
        }

    }
}
//Calculation();

// конец калькулятора
//Поиск наибольшего элемента в массива;
function getBiggest(array) {
    let digit = array[0];
    for (let i = 0; i <= array.length; i++) {
        if (digit < array[i])
            digit = array[i];
    }
    return digit;
}

// вывод элементов больше нуля и меньше 10
/* function getRangeFromZeroToTen(array) {
    let resultArr = [];
    for (item of array) {
        if (item > 0 && item < 10)
            resultArr.push(item);
    } 3514
    3145
    console.log(resultArr);
    for (let i = 0; i < resultArr.length; i++) {
        for (let j = 0; j < resultArr.length; j++) {
            let temp = 0;
            if (resultArr[i] > resultArr[i + 1]) {
                temp = resultArr[i];
                resultArr[i] = resultArr[i + 1];
                resultArr[i + 1] = temp;
            }
        }


    }
    console.log(resultArr);

} */
function getMinimal(array) {
    let temp = array[0];
    for (item of array) {
        if (item < temp) {
            temp = item;
        }
    }
    return temp;
}
console.log(getMinimal([3, 4, 5, 1, -2, 15, 23, -100]));


function getMinAndMax(array) {
    let temp1 = array[0];
    let temp2 = array[0];
    for (item of array) {
        if (item > temp1) {
            temp1 = item;
        }
        if (item < temp2) {
            temp2 = item;
        }
    }
    return [temp1, temp2];
}

console.log(getMinAndMax([3, 4, 5, 1, -2, 15, 23, -100]));