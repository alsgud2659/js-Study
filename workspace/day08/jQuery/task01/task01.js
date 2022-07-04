
// const button = document.getElementById("confirm");
const $button = $("#confirm");
var $tempTr;
var tempText;

$button.on("click", function(){
    confirm();
});

function confirm(){
    const $input = $("#input");
    const $trs = $("tbody tr");
    var check = false;

    if($tempTr){
        $tempTr.css('background', "#fff");
        $tempTr.children().first().text(tempText);
    }

    $trs.each(function(index, tr){
    // $.each($trs, function(index, tr){
        let $td = $(tr).children().first();
        if($input.val() == $td.text()){
            $tempTr = $(tr);
            tempText = $td.text();

            $td.text('★' + $td.text());
            $(tr).css('background', '#ef5350');
            check = true;
        }
    })

    if(!check){
        alert("다시 시도해주세요.");
    }
}