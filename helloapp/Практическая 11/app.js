const fs = require('fs');

let writeableStream = fs.createWriteStream('hello1.txt');
writeableStream.write('Привет !');
writeableStream.write('Это я - студент ВКСиИТ \n');
writeableStream.end('Андряков Матвей');
let readableStream = fs.createReadStream(
    'hello1.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});
