const fs = require('fs');

fs.appendFileSync('hello.txt', 'Привет, Матвей!');

fs.appendFile('hello.txt', 'Студент группы ИСП-420п', function (error) {
    if (error) throw error; // если возникла ошибка

    console.log(
        'Запись файла завершена. Содержимое файла:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data); // выводим считанные данные
});
