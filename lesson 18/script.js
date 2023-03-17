/* var root = document.documentElement;
console.log(root);

function getChildren(elem) {

    for (var i in elem.childNodes) {

        if (elem.childNodes[i].nodeType === 1) {

            console.log(elem.childNodes[i].tagName);
            getChildren(elem.childNodes[i]);
        }
    }
}
getChildren(root);

var tag = document.querySelector(".article");
console.log(tag);
console.log(tag.innerText);
console.log(tag.innerHTML);
tag.innerHTML = tag.innerHTML + "<h1>Первый замененный абзац</h1>";
tag.setAttribute("class", tag.className + " article2");
//какая то логика
tag.setAttribute("class", "article");
function message(obj) {
    console.log(obj.type);
}

var clicks = 0;
function handlerOne(e){
     
    console.log(e);
}
function handlerTwo(e){
     
    clicks++;
    var newNode = document.createElement("p");
    newNode.textContent = "произошло нажатие " + clicks;
    document.body.appendChild(newNode);
}
var rect = document.getElementById("rect");
// прикрепляем первый обработчик
rect.addEventListener("mouseup", handlerOne);
// прикрепляем второй обработчик
rect.addEventListener("click", handlerTwo);


function moveRect(e){
     
    var blueRect = document.getElementById("blueRect");
    // получаем стиль для blueRect
    var cs = window.getComputedStyle(blueRect);
     
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
     
    switch(e.key){
         
        case "ArrowLeft":  // если нажата клавиша влево
            if(left>0)
                blueRect.style.marginLeft = left - 10 + "px";
            break;
        case "ArrowTop":   // если нажата клавиша вверх
            if(top>0)
                blueRect.style.marginTop = top - 10 + "px";
            break;
        case "ArrowRight":   // если нажата клавиша вправо
            if(left < document.documentElement.clientWidth - 100)
                blueRect.style.marginLeft = left + 10 + "px";
            break;
        case "ArrowDown":   // если нажата клавиша вниз
            if(top < document.documentElement.clientHeight - 100)
                blueRect.style.marginTop = top + 10 + "px";
            break;
    }
}
addEventListener("keydown", moveRect); */

function zeroToHaundredCount(minimum, maximum) {
    let i = minimum;
    let array = [];
    while (i <= maximum) {
        array.push(i);
        i++;
    }
    console.log(array);

}
function handredToZeroCount(maximum, minimum) {
    let array = [];
    for (let i = maximum; i >= minimum; i--) {
        array.push(i);
    }
    console.log(array);
}
function getEvenNumbers(minimum, maximum) {
    let array = [];
    for (let i = minimum; i <= maximum; i++) {
        if (i % 2 == 0)
            array.push(i);
    }
    console.log(array);
}

function getOddNumbers(minimum, maximum) {
    let array = [];
    for (let i = minimum; i <= maximum; i++) {
        if (i % 2 > 0)
            array.push(i);
    }
    console.log(array);
}

function getUserCommand() {
    let values = prompt("Введите два числа, у которых первое будет меньше чем второе");
    let numbers = values.split(',');
    let minimum = parseInt(numbers[0]);
    let maximum = parseInt(numbers[1]);
    var temp = 0;
    if (minimum > maximum) {
        temp = minimum;
        minimum = maximum;
        maximum = temp;
    }
    else if( minimum == maximum)
        alert("Введите разные числа");

    zeroToHaundredCount(minimum,maximum);
    handredToZeroCount(maximum, minimum);
    getEvenNumbers(minimum,maximum);
    getOddNumbers(minimum,maximum);
}

function getXArray(count){
    let array = [];
    for(let i = 0; i<=count - 1; i++){
        array.push(Math.floor(Math.random() * (1 - 0 + 1)) + 0);
    }
    console.log(array);
}
getXArray(10);
