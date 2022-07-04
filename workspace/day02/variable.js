/* 
    author: Han
    contents: variable
*/
//동적 바인딩 : 컴파일 시 값에 따라 자료형이 동적으로 결정된다.
var data = 10;
console.log(data);
console.log(typeof(data));

var age;
console.log(age);

// hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당된다.
// 초기화 작업은 호이스팅 되지 않고 선언만 호이스팅된다.
console.log(data2);
var data2 = 10;
console.log(data2);

var data3 = "절대 수정 금지";
//되도록 var를 사용하여 변수를 선언한다.
data3 = "안녕";
console.log(data3);



