//상품명, 가격, 재고를 JS객체에 프로퍼티로 담는다.
//JSON형식으로 변환한 뒤, day04/product.json으로 출력한다.
//day04/product.json에 있는 JSON형식을 JS Object타입으로 변환한다.
//각 프로퍼티를 출력한다.

let file = require('fs');
let product = new Object();
let productJSON;

product.name = "굴렁쇠";
product.price = 4900;
product.stock = 4;

productJSON = JSON.stringify(product);

file.writeFile('day04/product.json', productJSON, 'UTF-8', function(e){
    if(e){
        console.log(e);
    }else{
        console.log("파일 출력 성공!");
    }
});

file.readFile('day04/product.json', 'UTF-8', function(e, data){
    let product = JSON.parse(data);
    console.log(product.name);
    console.log('가격 : %d원', product.price);
    console.log(product.stock);
});