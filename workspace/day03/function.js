/* JS에서는 오버로딩을 지원하지 않는다. */
// function add(num1, num2, num3){
//     return num1 + num2 + num3;
// }

// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(1, 3));
// console.log(add(1, 3, 5));

//가변인자 : 여러 개의 값을 전달받을 수 있는 매개변수
//...가변인자명
//몇 개의 값이 전달될 지 알 수 없을 때
//각각의 값이 공통요소일 때(순서가 상관없고, 특정 값만 가져올 필요 없을 때)
// function add(...args){
//     let total = 0;
//     for(let i=0; i<args.length; i++){
//         total += args[i];
//     }
//     return total;
// }

// console.log(add(1, 3));
// console.log(add(1, 3, 5));

//※ args의 문제점
//이름, 나이, 성별을 입력받고
//이름이 없다면 "무명(no name)"", 성별이 없다면 "선택 안함"을 대신 출력한다.
// function intro(age, ...args){
//     let nameMsg = args[0] ? args[0] : "무명(no name)";
//     let ageMsg = age + "살";
//     let genderMsg = args[1] ? args[1] : "선택 안함";

//     console.log(nameMsg);
//     console.log(ageMsg);
//     console.log(genderMsg);
// }

// intro(10);

//js에서는 매개변수의 개수대로 값이 전달될 필요 없다.
//age, name, gender 3개의 매개변수가 있다면,
//값은 0, 1, 2개 모두 들어올 수 있다.
//다만 전달받지 못한 매개변수에는 undefined값이 들어가게 되며,
//이 때 조건식으로 undefined를 사용하면 false로 판단한다.
// function intro(age, name, gender){
//     let nameMsg = name || "무명(no name)";
//     let ageMsg = age + "살";
//     let genderMsg = gender || "선택 안함";

//     console.log(nameMsg);
//     console.log(ageMsg);
//     console.log(genderMsg);
// }

// intro(10, "", "남자");
// 이름에 '남', '여'가 포함되지 않는 다고 가정한다.
function intro(age, name, gender){
    let nameMsg;
    let ageMsg = age + "살";
    let genderMsg;
    
    //외부에서 전달받은 값의 개수가 2개라면
    if(arguments.length == 2){
        //name변수에 들어온 값에 "남" 또는 "여"라는 문자열이 포함되어 있다면,
        if(name.includes("남") || name.includes("여")){
            genderMsg = name; //genderMsg에 name(성별)을 넣어주고
            nameMsg = "무명(no name)"; //이름은 입력받지 않았기 때문에 무명을 넣어준다.
        }else{
            nameMsg = name;
            genderMsg = "선택 안함";
        }
    }else{ //매개변수를 1개 전달했을 때 또는 3개 전달했을 때
        nameMsg = name || "무명(no name)";
        genderMsg = gender || "선택 안함";
    }

    console.log(nameMsg);
    console.log(ageMsg);
    console.log(genderMsg);
}

intro(20, '여자');

//문자열에 있는 includes()메소드에 조회할 값을 전달하면,
//포함되어 있을 때 true, 없을 때에는 false이다.
// console.log("ABC".includes("A"));
// console.log("ABC".includes("Z"));

//값이 없을 때 초기값을 설정한다.
//단, false로 취급되는 값이 들어오면 초기값이 들어가게 된다.
// var data;
// data = data || 10;
// console.log(data);

// undefined, "", 0은 조건식 자리에 작성하면 false로 판단한다.
// if(!undefined){
//     console.log("값 없음")
// }else{
//     console.log("값 있음")
// }

// === : 값과 타입 모두 같아야 true
// let data;
// console.log(data == undefined);
// console.log(typeof(data) === 'undefined');
// console.log(1 == "1");
// console.log(1 === "1");
// console.log(1 == true);
// console.log(1 === true);





