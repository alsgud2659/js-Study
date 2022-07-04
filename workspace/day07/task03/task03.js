const input = document.querySelector("input[name='pw']");
const div = document.getElementById("toggle");
const img = document.getElementById("img");
const onBtn = document.getElementById("on");
const offBtn = document.getElementById("off");
const wrap = document.querySelector("div.wrap");
const result = document.getElementById("result");
var check = false;
var policeCount = 0;

input.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        SuperCar.engineStart();
    }
})

onBtn.addEventListener('click', function(){
    SuperCar.engineStart();
});

offBtn.addEventListener('click', function(){
    SuperCar.engineStop();
});

div.addEventListener('click', function(){
    let type = input.getAttribute('type');
    if(type == 'password'){
        input.setAttribute('type', 'text');
        div.style.backgroundImage = "url('img/eye.jpg')"
    }else{
        input.setAttribute('type', 'password');
        div.style.backgroundImage = "url('img/noeye.jpg')"
    }
});

function SuperCar(){
    this.pw = "0000";
}
//prototype
//객체를 만들지 않고 전체 객체에 공유할 때 사용한다.
//대신 메소드일 경우에는 사용하지 않고, 
//메소드가 아닌 프로퍼티에 접근할 때 사용한다.
SuperCar.prototype.pw = prompt("자동차 초기 비밀번호 입력");

SuperCar.engineStart = function(){
    console.log("들어옴");
    if(check){
        result.innerHTML = "이미 켜져있습니다";
        return;
    }
    if(SuperCar.prototype.pw == input.value){
        wrap.style.visibility = "hidden";
        input.value = "";
        img.style.backgroundImage = "url('img/시동켜기.gif')";
        check = true;
        result.innerHTML = "시동 켜짐";
    }else{
        policeCount++;
        result.innerHTML = "비밀번호 오류: " + policeCount + "회";
        if(policeCount == 3){
            wrap.style.visibility = "hidden";
            result.innerHTML = "비밀번호 오류: " + policeCount + "회";
            setTimeout(function(){
                img.style.backgroundImage = "url('img/경찰.png')";
                onBtn.style.display = "none";
                offBtn.style.display = "none";
                result.innerHTML = "경찰 출동";
            }, 2000);
        }
    }
}

SuperCar.engineStop = function(){
    if(!check){
        result.innerHTML = "이미 꺼져있습니다";
        return;
    }
    img.style.backgroundImage = "url('img/시동끄기.gif')";
    check = false;
    result.innerHTML = "시동 꺼짐";
    wrap.style.visibility = 'visible';
}