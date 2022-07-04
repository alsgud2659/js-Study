// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하여 사용한다.

function User(id, pw, name, age){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age || 1;
    this.intro = function(){
        with(console){
            log(this.id);
            log(this.pw);
            log(this.name);
            log(this.age);
        }
    };
}

han = new User('hds1234', '1234', '한동석', 20);
hong = new User('hgd1234', '3434', '홍길동');

console.log(han);
console.log(JSON.stringify(han));

han.intro = intro;

function intro(){
    console.log("자기소개");
}

han.intro();
hong.intro();