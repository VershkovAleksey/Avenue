/* function call(){
    console.log("какая то функция call");
}

try{
    call();
    callSome();
}
catch(error){
    console.log(error);
}
console.log("Дальнейшие инструкции"); */
/* class Person{
    constructor(name, age){
        this.name = name;
        if(age < 0)
            throw "Возраст должен быть больше нуля";
        this.age = age;
    }
    print(){ console.log(`Name: ${this.name}  Age: ${this.age}`);}
}
var tom;
try{
    tom = new Person("Tom", -123);
}
catch(error){
    console.log(error);
}
tom.print();    // Name: Tom  Age: -123 */
/* var searchForm = document.forms["search"];
function check(e){
    console.log(searchForm.elements["key"].value);
}

for(var i=0; i<searchForm.elements.length;i++)
    document.write(searchForm.elements[i].name + "<br/>");
searchForm.elements["send"].focus();
searchForm.elements["send"].blur(); */
// обработчик изменения текста
/* function onClick(e) {
    // получаем элемент printBlock
    var keyBox = document.search.key;
    document.search.action="PostForm";
    var val = keyBox.value;
    if (val.length > 5) {
        alert("Недопустимая длина строки");
        e.preventDefault();
    }
    else
        alert("Отправка разрешена");
}

var sendButton = document.search.print;
sendButton.addEventListener("click", onClick); */
var enabledBox = document.search.enabled;
function onclick(e){
    var printBlock = document.getElementById("printBlock");
    var enabled = e.target.checked;
    printBlock.textContent = enabled;
}
enabledBox.addEventListener("click", onclick);

function onclick(e){
    var printBlock = document.getElementById("printBlock");
    var language = e.target.value;
    printBlock.textContent = "Вы выбрали: " + language;
}
for (var i = 0; i < myForm.languages.length; i++) {
    myForm.languages[i].addEventListener("click", onclick);
}
// обработка потери фокуса



/* var messageBox = document.search.message;
// обработчик ввода символа
function onkeypres(e){
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");
    // получаем введенный символ
    var val = String.fromCharCode(e.keyCode);
    // добавление символа
    printBlock.textContent += val;
}
function onkeydown(e){
    if(e.keyCode===8){ // если нажат Backspace
     
        // получаем элемент printBlock
        var printBlock = document.getElementById("printBlock"), 
            length = printBlock.textContent.length;
        // обрезаем строку по последнему символу
        printBlock.textContent = printBlock.textContent.substring(0, length-1);
    }
}
function clear(e){
    var printBlock = document.getElementById("printBlock");
    printBlock.textContent = "";
}
messageBox.addEventListener("keypress", onkeypres);
messageBox.addEventListener("keydown", onkeydown);
messageBox.addEventListener("blur", clear); */