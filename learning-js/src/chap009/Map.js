const u1 = {name: 'Cynthia'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};

const userRoles = new Map();

// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');


userRoles.set(u1, 'User').set(u2, 'User').set(u3, 'Admin'); // 메소드 체이닝이 가능.

// const User = Symbol();
// const Admin = Symbol();
// userRoles.set(u1, User).set(u2, User). set(u3, Admin); // 이런 것도 되지 않을까? Symbol 로 나오네 킁


console.log(userRoles);

const userRoles2 = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin']
    ]);

// 생성자에 배열로도 넘겨도됨

console.log(userRoles2);
console.log(userRoles2.get(u2)); // "User"

console.log(userRoles2.has(u4)) // has 는 key가 있나 없나를 물어봄
console.log(userRoles2.get(u4)) // 없는 대상이면 undefined 를 반환

console.log(userRoles2.set(u2,"SuperAdmin")); // 있는 key에 데이터를 set하면 update됨
console.log(userRoles2.size);
console.log(userRoles2);


for(let u of userRoles2.keys()){
    console.log(u.name);
}

for(let u of userRoles2.values()){
    console.log(u);
}

for(let u of userRoles2.entries()){
    console.log(`${u[0].name} : ${u[1]}`);  // u[0] 은 {} 객체이므로, 쉽게 알아보도록 객체의 프러퍼티인 name 을 호출했음
}

// 위를 좀 더 자연스럽게 '분해' 하면 이렇게 도 사용가능

for(let [u,r] of userRoles2.entries()){
    console.log(`${u.name} : ${r}`);
}

// entries는 Map의 기본 이터레이터 이므로, 아래처럼 생략이 가능

for(let [u,r] of userRoles2) {
    console.log(`${u.name} : ${r}`);
}

userRoles2.delete(u2);
console.log(userRoles2);

userRoles2.clear();
console.log(userRoles2);

