// page 307


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
                    if (countdown.superstitious && i === 13) {
                        // 다 취소하고, 에러로 넘김.
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("oh my goodddd"));
                    }
                    countdown.emit('tick', i);
                    if (i === 0) {
                        resolve();
                    }
                }, (countdown.seconds - i) * 1000))
            }
        });
    };
};

function launch(name) {
    return new Promise(function (resolve, reject) {
        console.log(`call ${name || "noname"}`);
        if (Math.random() < 0.5) {
            return;
        }
        console.log("Lift off!");
        setTimeout(function () {
            resolve("In orbit!");
        }, 2 * 1000);
    });
};

function addTimeout(fn, timeout) {
    if (timeout === undefined) timeout = 1000;
    return function (...args) {
        return new Promise(function (resolve, reject) {
            const tid = setTimeout(reject, timeout, new Error("Promise timed out"));
            fn(...args)
                .then(function (...args) {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch(function (...args) {
                    clearTimeout(tid);
                    reject(...args);
                });
        });
    };
};


const c = new countdown(15).on('tick', i => console.log(i + '...'));

c.go()
    .then(addTimeout(launch("jhun"), 11*1000))
    .then(function (msg) {
        console.log(msg);
    })
    .catch(function (err) {
        console.log("Houston, we have a problem..."+ err.message);
    });
