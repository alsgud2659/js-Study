//Array()로 객체를 선언할 때
//용량을 정수로 전달하면, 미리 그 만큼을 할당해 놓는다.
// let datas = new Array(7);
// 7칸 뒤에 값이 붙기 때문에 push()를 사용하는 것이 적절하지 않다.
// datas.push("월");
// datas.push("화");
// datas.push("수");
// datas.push("목");
// datas.push("금");
// datas.push("토");
// datas.push("일");

// let index = 0;
// datas[index++] = "월";
// datas[index++] = "화";
// datas[index++] = "수";
// datas[index++] = "목";
// datas[index++] = "금";
// datas[index++] = "토";
// datas[index++] = "일";

// console.log(datas.toString());

//new Array(초기값,...);
let week = new Array("월", "화", "수", "목", "금", "토", "일");
week.forEach(function(v){console.log(v);});