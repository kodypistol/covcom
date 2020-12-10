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
var progresstext = form.querySelector('.progressiontext');
function checkProgression() {
    var progress = 0;

    inputs.forEach(function (input) {
        if (input.value.length > 0) {
            progress += 1;
        }
    });

    

    var percent = (progress / inputs.length) * 100;
    percentElement.style.width = Math.round(percent) + '%';
    progresstext.innerText = Math.round(percent) + '%';
    let coulg = false;
    // percentElement.style.background= #0B9710;
    console.log(percent)
    if (percent > 80 && coulg === false) {
        percentElement.classList.add('green');
        coulg = true;
      // percentElement.style.color = "#0B9710"
    } else {
        percentElement.classList.remove('green');

    }
};


inputs.forEach(function (input) {
    input.addEventListener('input', function () {
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
        var newCase = $("#ref_case_mot").clone().removeAttr("id");
        newCase.children("span").text(mot);
        newCase.children("a").click(function(){
            $(this).parent().remove();
        });
        $("#liste_mots-cles").append(newCase);
        $("#input_mots-cles").val("");
    }
});

$("#add_mots-cles").click(function(){
    var mot = $("#input_mots-cles").val();
    if(mot !== ""){
        var newCase = $("#ref_case_mot").clone().removeAttr("id");
        newCase.children("span").text(mot);
        newCase.children("a").click(function(){
            $(this).parent().remove();
        });
        $("#liste_mots-cles").append(newCase);
        $("#input_mots-cles").val("");
    }
});

$(".barre_jour").click(function(){
    $(".jour_selected").removeClass("jour_selected");
    $(this).addClass("jour_selected");
});