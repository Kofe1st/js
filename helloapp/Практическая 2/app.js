const os = require('os');
const greeting = require('./greeting');
const User = require('./user.js');

let eugene = new User('Матвей', 32);
eugene.sayHi();
// получим имя текущего пользователя
let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));
