
const button = document.getElementById("confirm");
var tempTr;
var tempText;

button.onclick = confirm;

function confirm(){
    const input = document.getElementById("input");
    const trs = document.querySelectorAll("tbody tr");
    var check = false;

    if(tempTr){
        tempTr.style.background = "#fff";
        tempTr.firstElementChild.innerHTML = tempText;
    }

    trs.forEach((tr) => {
        let td = tr.firstElementChild;
        if(input.value == td.innerHTML){
            tempTr = tr;
            tempText = td.innerHTML;

            td.innerHTML = '★' + td.innerHTML;
            tr.style.background = "#ef5350";
            check = true;
        }
    });

    if(!check){
        alert("다시 시도해주세요.");
    }
}