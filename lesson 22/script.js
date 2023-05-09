
var x = 0;

const myPromise = new Promise(function (resolve, reject) {
    console.log("Выполнение асинхронной операции");

    //resolve("Привет мир!");
    reject("X меньше или равен нулю");
});
myPromise.then(function (value) {
    console.log(`Из промиса получены данные: ${value}`);
},
    function (error) {
        console.log(`Возникла ошибка во время выполнения: ${error}`);
    });



const myPromise2 = new Promise(function (resolve, reject) {
    const x = 2;
    const y = 10;
    if (x > y) {
        resolve(x);
    }
    else if (x < y) resolve(y);
    else {
        reject("Числа равны");
    }
});
myPromise2.then(function (value) {
    console.log(`Большее число из двух: ${value}`)
},
function (error){
    console.log(error);
});