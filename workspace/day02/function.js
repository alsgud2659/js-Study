// 1~10까지 출력하는 함수
function printFrom1To10(){
    let total = 0;
    for(let i=0; i<10; i++){
        console.log(i + 1);
    }
}

printFrom1To10();

// 1~10까지의 합을 출력하는 함수
function getTotalFrom1To10(){
    let total = 0;
    for(let i=0; i<10; i++){
        total += i + 1;
    }
    console.log(total);
}

getTotalFrom1To10();

// 1~n까지의 합을 출력하는 함수
function getTotalFrom1(end){
    let total = 0;
    for(let i=0; i<end; i++){
        total += i + 1;
    }
    return total;
}

console.log(getTotalFrom1(10));