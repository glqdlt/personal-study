// 와우 시벌 자바스크립트에는 GC 가 안 쓰이는 객체를 해체하지 않음 ㅡ;
// WeakMap은 GC 대상임

const SecretHolder = (function () {
    const secrets = new WeakMap();

    return class {

        setSecret(secret) {
            secrets.set(this, secret);
        }

        getSecret() {
            return secrets.get(this);
        }
    }

})();

const a = new SecretHolder();
a.setSecret('Secret A');
const b = new SecretHolder();
b.setSecret('Secret b');

console.log(a);
console.log(b);

console.log(a.getSecret());
console.log(b.getSecret());