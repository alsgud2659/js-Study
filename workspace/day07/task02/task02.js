document.getElementById("change").onclick = getResult;

function changeToHangle(number){
    var hangle = "공일이삼사오육칠팔구";
    var result = "";
    const p = document.getElementById("result");
    const div = document.getElementById("round");
    var check = false;

    number = number.trim();
    if(isNaN(number)){
        p.innerHTML = "숫자만 입력해주세요.";
        div.innerHTML = "4";
        return;
    }
    
    number = parseFloat(number) + "";

    //0.2, .2 : 영점이
    if(number < 1){
        result += '영';
        check = true;
    }

    div.innerHTML = "3";

    for(let i in number){
        if(check){
            check = false; 
            continue;
        }

        let char = hangle[number.charAt(i)];

        if(!char) {
            result += '점';
            div.innerHTML = "2";
            continue;
        }
        result += char;
    }
    p.innerHTML = result;
}

function getResult(){
    const input = document.querySelector("input[name='input']").value;
    changeToHangle(input);
}

