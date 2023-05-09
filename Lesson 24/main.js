import * as message from "./message.js";

let telegram = new message.Messanger();
telegram.send("Hello from telegram class");
message.sayHello();
console.log(message.welcome);
console.log(message.hello);