let var1;
let var2 = undefined;
var1;


// 이것은 안됨
// {
//     x;
//     let x=3;
//     console.log(x);
// }

// 기존에는 됬었음 이게 호이호스팅
// {
//     x;
//     var x = 3;
//     console.log(x);
// }

// 사실 이것은 아래와 같이 엔진에서 이해함

// {
//     var x;
//     x;
//     x=3;
//     x;
//
// }

// 이것이 let 이 만들어진 이유.