const fs = require('fs');
const path = require('path');

// path.join() // 은 운영자에 맞추어 구분자를 처리해줌
let fPath = 'hello.txt';
fs.writeFile(path.join(__dirname, fPath), 'hello from Node!', function (err) {
    // __dirname 은 node 에서 지정한 약어이다, 현재 작업될 path의 약어
    console.log(__dirname);
    if (err) return console.error('error writeing to file');

});

fs.readFile(path.join(__dirname, fPath), {encoding: 'utf8'}, function (err, data) {
    if (err) return console.error("Error reading;");
    console.log(`readFile: ${data}`);
});


//여기까지는 비동기 방법

//지금부터는 동기적인 방법

try {
    // fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'wow');
    console.log('jajaja'+fs.readFileSync(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'}));
} catch (err) {
    console.error('error write fing');
}

// 파일이 있는 지 체크

fs.readdir(__dirname, function(err, files){
   if(err) return console.error('Ubable to read directory contents');
   console.log(`contents of ${__dirname}`);
   console.log(files.map(f => '\t' + f).join('\n'));
});