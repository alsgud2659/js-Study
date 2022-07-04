function changeToHangle(number){
    var hangle = "공일이삼사오육칠팔구";
    var result = "";
    number = number.trim();

    for(let i in number){
        result += hangle[number.charAt(i)];
    }
    console.log(result);
}

changeToHangle('1234');