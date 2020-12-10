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
function checkProgression() {
    var progress = 0;

    inputs.forEach(function (input) {
        if (input.value.length > 0) {
            progress += 1;
        }
    });

    

    var percent = (progress / inputs.length) * 100;
    percentElement.style.width = percent + '%';
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