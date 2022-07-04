//{n} : n번 이상
var reg1 = new RegExp("\\d{3}-\\d{3}");
var reg2 = /\d{3}-\d{3}/;

// console.log(reg1.test("333-565"));
// console.log(reg2.test("333-565"));

reg1 = new RegExp("cat!");
reg2 = /cat!/;

// console.log(reg1.test("There is the cat!"));
// console.log(reg2.test("There is the cat."));

/* 문자 클래스 */
var reg = /[abc]/;  // 각 문자 'a', 'b', 'c' 중 한 개와 일치하면 참

// console.log(reg.test("apple"));
// console.log(reg.test("cool"));
// console.log(reg.test("element"));
// console.log(reg.test("dongsuk"));

reg = /[0123456789]/;

// console.log(reg.test("1"));
// console.log(reg.test("ABC1234"));
// console.log(reg.test("ABC"));

reg = /[0-9]/   //0부터 9까지 범위 지정

// console.log(reg.test("1"));
// console.log(reg.test("ABC1234"));
// console.log(reg.test("ABC"));

reg = /[a-z]/   //a부터 z까지 범위 지정

// console.log(reg.test("1"));
// console.log(reg.test("ABC123"));
// console.log(reg.test("abc"));

reg = /[abg-j]/ //a, b, g, h, i j

// console.log(reg.test("close"));
// console.log(reg.test("open"));
// console.log(reg.test("java"));

reg = /[a-zA-Z0-9]/

// console.log(reg.test("#"));
// console.log(reg.test("Korea123"));

reg = /[ㄱ-ㅎ]/

// console.log(reg.test("ㅅㄱ"));
// console.log(reg.test("ㅏㅏㅏㅏ"));

reg = /[ㅏ-ㅣ]/

// console.log(reg.test("아ㅏㅏㅏㅏㅏ"));
// console.log(reg.test("아"));

reg = /[가-힣]/

// console.log(reg.test("안녕 나의 작은 파랑새"));

/* 부정 문자 클래스 - []안에서 사용 */

reg = /[^0-9]/  // 숫자만 있으면 false, 숫자 외의 문자가 있는 지 검사

// console.log(reg.test("TEST001"));
// console.log(reg.test("123"));

/* 임의의 단어 한개 */
reg = /자..아/  //'자'로 시작하고 2개 문자 뒤에 '아'인 단어 검사

// console.log(reg.test("자바좋아"));
// console.log(reg.test("자기야아"));
// console.log(reg.test("자고있아"));
// console.log(reg.test("자기야자아?"));

/* 숫자 검사 - degit(아라비아 숫자) */

reg = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/

// console.log(reg.test("21-01-21 11:20"));
// console.log(reg.test("2022-02-15 13:22"));

/* 숫자 외의 문자가 있는 지 검사 */
reg = /\D/;

// console.log(reg.test("id"));
// console.log(reg.test("123"));

/* 단어 문자 검사 - word character*/
reg = /\w/

// console.log(reg.test("!@#$"));
// console.log(reg.test("Java"));
// console.log(reg.test("안녕하세요"));

/* 문자 외의 문자가 있는 지 검사 */

reg = /\W/

// console.log(reg.test("!@#$"))
// console.log(reg.test("안녕하세요!test"));
// console.log(reg.test("Java"));

/* 공백 문자 - space */

reg = /\s/;

// console.log(reg.test("oh! what`s your name?"));
// console.log(reg.test("ted"));

/* 공백이 아닌 문자 */

reg = /\S/

// console.log(reg.test("hello"));
// console.log(reg.test("hey, what`up"));
// console.log(reg.test("     "));

/* ^문자 : 입력의 시작부분 */
var reg = new RegExp("^a"); //a로 시작하는 지 검사

// console.log(reg.test("abc"));
// console.log(reg.test("bca"));

reg = new RegExp("^apple");

// console.log(reg.test("I like Apple!"));
// console.log(reg.test("apple, I like"));

/* 문자$ : 입력의 끝부분 */
reg = /z$/

// console.log(reg.test("xyz"));
// console.log(reg.test("xy"));

reg = /^가.이$/

// console.log(reg.test("가랑이"))

/* a로 시작하고 f로 끝나는 5글자 단어 검사 */
reg = /^a...f$/

// console.log(reg.test("aloof"));
// console.log(reg.test("abcdef"));

/* 문자* : 시작문자 포함 또는 연속 */
reg = /[[A-Z]0]*/ //대문자 뒤에 0이 있으면 true

// console.log(reg.test("0001"));
// console.log(reg.test("ABC"));
// console.log(reg.test("A00000000"));

/* 확장자가 .png인 파일 검사 */
reg = /[a-zA-Z0-9가-힣].png$/

// console.log(reg.test("가오리.png"));
// console.log(reg.test("a.png"));

/* 문자+ : 1회 이상 연속 */
input = "e";

reg = new RegExp(input + "+");
// console.log(reg.test("egg"));
// console.log(reg.test("toy"));

/* 문자? : 유무검사(0회 또는 1회) - 있다면 무조건 한 개만 있어야 할 때 사용*/
/* 다른 문자들 사이에서 사용하는 것이 올바르다. */

reg = /a-e?c/

// console.log(reg.test("a-c"))
// console.log(reg.test("a-ec"))
// console.log(reg.test("a-eec"))

reg = /\+82\s0?10-\d\d\d\d-\d\d\d\d/;

console.log(reg.test("+82 010-1234-1234"));
console.log(reg.test("+82 10-1234-1234"));
console.log(reg.test("+82010-1234-1234"));
console.log(reg.test("+82 010-123-1234"));