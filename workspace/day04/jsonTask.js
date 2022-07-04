//상품명과 가격을 JSON으로 만든다.
//위 JSON을 Object 객체로 변환한다.
//각각의 프로퍼티를 출력한다.
//JSON으로 변환한 뒤 출력한다.
let productJSON = '{"name": "마우스", "price": 18000}';
let product = JSON.parse(productJSON);
console.log(product.name);
console.log(product.price + "원");

productJSON = JSON.stringify(product);
console.log(productJSON);