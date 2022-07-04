/* 함수가 아닌 다른 영역(제어문 영역)에서는 scope를 판단하지 않는다. */
if(10 > 1){
    var data4 = 10; //지역변수 같지만 함수의 scope가 아니기 때문에 영역 밖에서도 사용 가능하다.
}

console.log(data4);

for(var i=0; i<10; i++){

}

console.log(i); //for영역에서 선언된 i가 함수 안에 선언된 지역변수가 아니기 때문에 밖에서도 사용 가능하다.

var x;  // 전역변수

function f(){
    var y;  // 지역변수
    x = 10; // 전역변수
    y = 10; // 지역변수
    z = 10; // 전역변수
}

f();    // 함수 사용

console.log(x); console.log(z); /* console.log(y); */
//전역 변수      전역 변수          지역 변수(scope 밖에서 사용 불가)
