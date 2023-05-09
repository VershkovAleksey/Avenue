const http = require("http");
const fs = require("fs");

http.createServer(async (request, response) => {

    if (request.url == "/hello") {
        fs.readFile("hello.html", (error, data) => response.end(data));
    }
    else if (request.url == "/user") {

        const buffers = [];   // буфер для получаемых данных
        // получаем данные из запроса в буфер
        for await (const chunk of request) {
            buffers.push(chunk);
        }
        console.log(buffers);
        // получаем строковое представление ответа
        
        let userName = Buffer.concat(buffers).toString();
        console.log(userName);
        userName = userName + " Smith";
        response.end(userName);
    }
    else {
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(5050, () => console.log("Сервер запущен по адресу http://127.0.0.1:5050")); // хост LiveServer'a