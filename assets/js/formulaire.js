function countChar(val) {
    var len = val.value.length;
    if (len > 240) {
        val.value = val.value.substring(0, 240);
    } else {
        $('#charNum').text(("(" + (240 - len) + (" caractères restants).")));

        if (len < 10) {
            $('#charNum').addClass("is-red");
        } else {
            $('#charNum').removeClass("is-red");
        }
    }
};


var form = document.querySelector('#formDiv');
var inputs = form.querySelectorAll('input, textarea');
var percentElement = form.querySelector('.percentage');
function checkProgression () {
    var progress = 0;

    inputs.forEach(function(input){
        if (input.value.length > 0){
            progress += 1;
        }
    });

    var percent = (progress/inputs.length)*100;
    percentElement.style.width=percent+'%';
}

inputs.forEach(function(input){
    input.addEventListener('input',function(){
        checkProgression()
    });
});

$(".overlayUpload").click(function(){
    console.log("click");
    console.log($(this).parent().children("input").click());
});

$("#add_mots-cles").click(function(){
    var mot = $("#input_mots-cles").val();
    if(mot !== ""){
        var caseVide = $("#table_mots-cles td:hidden").first();
        caseVide.children("span").text(mot);
        caseVide.show();
        $("#input_mots-cles").val("");
    }
});

$(".case_mot a").click(function(){
    $(this).parent().hide();
});