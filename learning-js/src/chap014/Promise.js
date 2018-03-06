// Promise 는 성공하거나 실패하거나 둘 중에 하나일 뿐, 나중에 실패가 또 실패하지 않음
// 보통 이런 걸 결정됐다고 얘기한다고 함, setted


// resolve (성공
// reject (실패


function countdown(seconds) {
    return new Promise(function (resolve, reject) {
        for (let i = seconds; i >= 0; i--) {
            setTimeout(function () {
                // if(i ===3) return reject(new Error("Oh My god !! eror")); // 일부러 에러
                if (i > 0) console.log(i + '...');
                else resolve(console.log("go!"));
            }, (seconds - i) * 1000);
        }
    });
}

countdown(5).then(function () {
    console.log("countdown completed successfully");

}, function(err){
    console.log("countdown experiences an error: "+ err.message);
} );



const p = countdown(5);
p.then(function(){
    console.log("success");
});
p.catch(function(err){
   console.log(`fail .. ${err.message}`);
});

