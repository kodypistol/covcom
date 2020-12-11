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
var txtprogr = form.querySelector('.txtprog');
function checkProgression() {
    var progress = 0;

    inputs.forEach(function (input) {
        if (input.value.length > 0) {
            progress += 1;
        }
    });

    

    var percent = (progress / inputs.length) * 100;
    percentElement.style.width = Math.round(percent) + '%';

    progresstext.innerText = "Votre Progression : " + Math.round(percent) + '%';
    let coulg = false;
    // percentElement.style.background= #0B9710;
    console.log(percent)
    if (percent > 80 && coulg === false) {
        percentElement.classList.add('green');
        progresstext.innerText = "Vous avez bientot fini ! : " + Math.round(percent) + '%';

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
    if($(this).children("img").attr("src") === "assets/icons/remove.svg"){
        $(this).children("img").attr("src","assets/icons/upload.svg")
        $(this).parent().children("input").val("");
    }else{
        $(this).parent().children("input").click();
    }
});

$(".upload input").change(function(){
    $(this).next().children("img").attr("src","assets/icons/remove.svg")
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
    var prevJour = $(".jour_selected").text();
    var newJour = $(this).text();
    $(".jour_selected").removeClass("jour_selected");
    $(this).addClass("jour_selected");
    $(jourInputSelector(prevJour)).hide();
    $(jourInputSelector(newJour)).show();
});

$(jourInputSelector($(".jour_selected").text())).show();

function jourInputSelector(jour){
    return "#matin"+jour+"1,"+"#matin"+jour+"2,"+"#aprem"+jour+"1,"+"#aprem"+jour+"2";
}

function resetJour(){
    var jour = $(".jour_selected").text();
    $(jourInputSelector(jour)).val("");
}
