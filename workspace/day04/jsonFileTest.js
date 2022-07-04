//settings.json 마지막 줄에 
// "javascript.validate.enable": false
// 를 작성하여 경고 표시를 없앨 수 있다.
let file = require('fs'); //node.js에 있는 모듈 import
let user = new Object();
let userJSON;

user.name = "한동석";
user.id = "hds1234";
user.pw = "1234";

//스트링기파이
userJSON = JSON.stringify(user)

//JS에서는 비동기를 지향하기 때문에 비동기 방식이 파일입출력에서 default이다.
// file.writeFile(경로, 작성할내용, 인코딩방식, 콜백함수(에러객체))
// file.writeFile('day04/user.json', userJSON, 'UTF-8', function(e){
//     if(e){
//         //오류 발생 시 오류 내용 출력
//         console.log(e);
//     }else{
//         console.log("파일 출력 성공!");
//     }
// });

// file.readFile(경로, 인코딩, 콜백함수(에러객체, 내용))
file.readFile('day04/user.json', 'UTF-8', function(e, data){
    let user = JSON.parse(data);
    console.log(user.name);
    console.log('아이디 : %s', user.id);
    console.log(user.pw);
});