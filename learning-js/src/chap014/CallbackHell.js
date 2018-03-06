const fs = reuqire('fs');

fs.readFile('a.txt', function(err, dataA){
    if(err) console.error(err);
    fs.readFile('b.txt', function(err, dataB){
        if(err) console.error(err);
        fs.readFile('c.txt', function(err,dataC){
            if(err) console.error(err);
            setTimeout(function(){
                fs.writeFile('d.txt', dataA+ dataB+ dataC, function(err){
                    if(err) console.error(err);
                });
            },60 * 1000);
        });
    });
});

// wow


// try catch 를 했음에도 프로그램이 비정상적으로 에러 먹고 종료 된다, 이유는 try ..catch 는 자신을 선언한 함수에서만 적용 된다, 즉 readSkettchyFile 의 error에만 동작하고 .readFile의 콜백 익명 함수에서 일어나는 것은 동작하지 않는다.
function readSketchyFile(){
    try{
        fs.readFile('does_not_exits.txt',function(err,data){
            if(err) throw err;
        });
    }catch(err){
        console.log('warning: minor issus occured, program continuing');
    }
}
readSketchyFile();