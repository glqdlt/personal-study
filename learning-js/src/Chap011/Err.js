
const err = new Error('invalid email');

function validDateEmail(email){
    // return email.match(/@/) ? email : err;
    return email.match(/@/) ? email : new Error(`Invalid email ${email}`);
}

const email = "Jane2doe.com";

const validatedEmail = validDateEmail(email);
if(validatedEmail instanceof Error){
    console.error(`Err : ${validatedEmail.message}`);
}else{
    console.log(`valid email: ${validatedEmail}`);
};

const email2 = null;

try{
    const validatedEmail = validDateEmail(email2);
    console.log('if??');
    if(validatedEmail instanceof Error){
        console.error(`Error:::::: ${validatedEmail.message}`);
    }else{
        console.log(`validatedEmail:::: ${validatedEmail}`);
    }
}catch(err){
    // console.error(`Error catch : ${err.message} , ${err}`); // if 문 까지 타지 않는다.
}



// 강제로 일으키기

function billPay(amount, account){
    if(amount > account) {
        throw new Error(`Insufficient funds`);
    }
}

// console.log(billPay(2,1)); // 강제로 error 가 나옴


function a(){
    console.log(`a: calling b`);
    b();
    console.log(`a: done`);
}

function b(){
    console.log(`b: calling c`);
    c();
    console.log(`b done`);
}

function c(){
    console.log(`c: throwing err`);
    throw new Error(`c error`);
    console.log('c done');
}

function d(){
    console.log(`d: calling c`);
    c();
    console.log(`d: done`);
}


try{
    a();
}catch(err){
    console.log(err.stack);
}

try{
    d();

}catch(err){
    console.log(err.stack);
}finally{
    console.log("im finally~~");
}