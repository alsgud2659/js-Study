document.getElementById("change").onclick = getResult;

function changeToHangle(number){
    var hangle = "공일이삼사오육칠팔구";
    var result = "";
    const $p = $("#result");
    const $div = $("#round");
    var check = false;

    number = number.trim();
    if(isNaN(number)){
        $p.text("숫자만 입력해주세요.");
        $div.text("4");
        return;
    }
    
    number = parseFloat(number) + "";

    //0.2, .2 : 영점이
    if(number < 1){
        result += '영';
        check = true;
    }

    $div.text("3");

    for(let i in number){
        if(check){
            check = false; 
            continue;
        }

        let char = hangle[number.charAt(i)];

        if(!char) {
            result += '점';
            $div.text("2");
            continue;
        }
        result += char;
    }
    $p.text(result);
}

function getResult(){
    const input = $("input[name='input']").val();
    changeToHangle(input);
}

