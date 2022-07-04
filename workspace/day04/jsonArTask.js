// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array객체에 모두 담는다.
// JSON으로 변경시킨다.
// day04/shop.json으로 출력한다.
// readFile을 사용해서 day04/shop.json을 읽어온다.
// 기존의 JSON 내용을 Array객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

let file = require("fs");

//프로토타입 선언
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
    //JSON으로 변환된 값을 json에 저장
    this.json = JSON.stringify(this);
}

// mouse = new Product('마우스', 18900, 5);
// console.log(mouse);

//각 상품의 JSON을 담을 Array객체 선언
let products = new Array();
products.push(new Product('마우스', 18900, 5).json);
products.push(new Product('키보드', 38500, 9).json);
products.push(new Product('모니터', 187000, 3).json);

console.log(products);

// file.writeFile('day04/shop.json', "[" + products.toString() + "]", 'utf-8', function(e){
//     if(e){
//         console.log(e);
//     }else{
//         console.log("출력 성공!");
//     }
// });

file.readFile('day04/shop.json', 'utf-8', getTotal);

//총 가격과 총 재고를 담아줄 객체 선언
let sumObj = new Object();

function getTotal(e, datas){
    //JSON을 js object로 변환
    products = JSON.parse(datas);
    let totalPrice = 0;
    let totalStock = 0;
    //기존의 정보를 가격과 재고수를 곱한 값으로 변경
    //totalPrice에서 각 값을 누적합한다.
    products.map(function(v){return v.price * v.stock;}).forEach(function(v){totalPrice += v;});

    //기존의 정보를 재고수로 변경
    //재고 수를 totalStock에 누적합한다.
    products.map(function(v){return v.stock;}).forEach(function(v){totalStock += v;});

    //객체에 각 결과값을 프로퍼티로 담아준다.
    sumObj.totalPrice = totalPrice;
    sumObj.totalStock = totalStock;

    //결과를 담은 객체를 JSON으로 변환한 뒤 sum.json으로 출력한다.
    file.writeFile("day04/sum.json", JSON.stringify(sumObj), 'utf-8', function(e){
        if(e){
            console.log(e);
        }else{
            console.log("파일 출력 성공!");
        }
    });
}