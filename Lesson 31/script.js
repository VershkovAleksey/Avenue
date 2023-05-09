
let number = 100;
var varnum = 300;
{
    let number2 = 200;
    var varnum2 = 400;
}
let person =
{
    Name: "Aleksey",
    Age: 18,
    Height: 180,
    GetAge: function () {
        return this.Age;
    }
}

console.log(person.Name);
console.log(person.Age);
console.log(person.Height);
console.log(person);

console.log(person.GetAge());

function sqr(number, stepen) {
    let source = number;
    if (number > 0 || number < 0) {
        for (let count = 0; count <= stepen; count++) {
            number = number * source;
        }
        return number;
    }
    else {
        return 0;
    }
}
/* 
> - сравнение [левый операнд] > [правый операнд ] - возвращает true если левый операнд больше правого.
< - сравнение [левый операнд] < [правый операнд ] - возвращает true если правый операнд больше левого.
= - арифметический оператор, присваивает значение правого операнда левому [левый операнд] = [правый операнд].
== - логический оператор сравнения,  [левый операнд] == [правый операнд] - возвращает true, если правый операнд, равен левому операнду, по значению.
=== - логический оператор сравнения, [левый операнд] === [правый операнд] - возвращает true, если правый операнд, равен левому операнду, по значению и по типу.
>= - логический оператор сравнения,  [левый операнд] >= [правый операнд] - возвращает true, если правый операнд больше или равен левому операнду.
<= - логический оператор сравнения,  [левый операнд] <= [правый операнд] - возвращает true, если правый операнд меньше или равен левому операнду.
!= - логический оператор сравнения,  [левый операнд] != [правый операнд] - возвращает true, если правый операнд не равен левому операнду по значению.
!== - логический оператор сравнения,  [левый операнд] !== [правый операнд] - возвращает true, если правый операнд не равен левому операнду по значению и типу.
*/
let sqrresult = sqr(2, 5);
console.log(sqrresult);
console.log(sqr(2, 5));

function factor(digit) {
    if (digit === 0)
        return 1;
    let source = 1;
    digit = Math.abs(digit);
    for (let count = 1; digit + 1 > count; count++) {
        source = source * count;
    }
    return source;
}
console.log(factor(-5));

function printColumn(min, max) {
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }
    if (min !== max) {
        for (let count = min; count <= max; count++) {
            console.log(count);
        }
    }
}

printColumn(200, 100);
