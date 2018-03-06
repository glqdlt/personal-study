// class Log {
//
//     constructor() {
//         this.messages = [];
//     }
//
//     add(message) {
//         this.messages.push({message, timestamp: Date.now()});
//     }
//
//     [Symbol.iterator]() {
//         return this.messages.values;
//     }
//
// }
//
//
// const log = new Log();
//
// log.add("first day at sea");
// log.add("spotted whale");
// log.add("spotted another vessel");
//
//
// for(let entry of log){
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// }

// 이터레이터와 제네레이터는 되질 않으므로 패스하기로 한다.