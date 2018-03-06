const fs = require('fs');

// const fname = 'may_or_may_not_exist.txt';
const fname = 'C:\\Users\\iw.jhun\\Documents\\pgadmin.log'; // read가 된다. 근데 내용이 이미 error log 라서 console에 error로그처럼 나와서 ㅋㅋㅋ 깜짝ㄴ로럤네
fs.readFile(fname, function (err, data) {

    if (err) return console.error(`error reading file ${fname} : ${err.message}`);
    console.log(`${fname} contents: ${data}`);

});

