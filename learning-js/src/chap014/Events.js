const EventEmitter = require('events').EventEmitter;

class countdown extends EventEmitter {

    constructor(sec, superstitious) {
        super();
        this.seconds = sec;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function (resolve, reject) {

            for (let i = countdown.seconds; i >= 0; i--) {
                timeoutIds.push(setTimeout(function () {
                    
                    // 13일 때
                    if (countdown.superstitious && i === 13){
                        // 다 취소하고, 에러로 넘김.
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("oh my goodddd"));
                    }
                    countdown.emit('tick',i);
                    if(i===0){
                        resolve();
                    }
                }, (countdown.seconds -i)*1000))
            }
        });
    };
};


const c = new countdown(15, true);
c.on('tick', function (i) {
    if (i > 0) console.log(i + '...');
});
c.go()
    .then(function () {
        console.log("go!");
    })
    .catch(function (err) {
        console.error(err.message);
    });


