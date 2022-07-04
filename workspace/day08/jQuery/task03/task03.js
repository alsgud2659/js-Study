const $input = $("input[name='pw']");
const $div = $("#toggle");
const $img = $("#img");
const $onBtn = $("#on");
const $offBtn = $("#off");
const $wrap = $("div.wrap");
const $result = $("#result");
var check = false;
var policeCount = 0;

$input.on('keyup', function(e){
    if(e.keyCode == 13){
        SuperCar.engineStart();
    }
});

$onBtn.on('click', function(){
    SuperCar.engineStart();
});

$offBtn.on('click', function(){
    SuperCar.engineStop();
});

$div.on('click', function(){
    let type = $input.attr('type');
    if(type == 'password'){
        $input.attr('type', 'text');
        $div.css("background-image", "url('img/eye.jpg')");
    }else{
        $input.attr('type', 'password');
        $div.css("background-image", "url('img/noeye.jpg')");
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
    if(check){
        $result.text("이미 켜져있습니다");
        return;
    }
    if(SuperCar.prototype.pw == $input.val()){
        $wrap.css('visibility', 'hidden')
        $input.val("");
        $img.css('background-image', "url('img/시동켜기.gif')");
        check = true;
        $result.text("시동 켜짐");
    }else{
        policeCount++;
        $result.text("비밀번호 오류: " + policeCount + "회");
        if(policeCount == 3){
            $wrap.css('visibility', 'hidden')
            $result.text("비밀번호 오류: " + policeCount + "회");
            setTimeout(function(){
                $img.css("background-image", "url('img/경찰.png')");
                $onBtn.hide();
                $offBtn.hide();
                $result.text("경찰 출동");
            }, 2000);
        }
    }
}

SuperCar.engineStop = function(){
    if(!check){
        $result.text("이미 꺼져있습니다");
        return;
    }
    $img.css('background-image', "url('img/시동끄기.gif')");
    check = false;
    $result.text("시동 꺼짐");
    $wrap.css('visibility', 'visible');
}