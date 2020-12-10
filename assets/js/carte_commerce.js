<<<<<<< HEAD
/*var btnPopup = document.getElementById('btnDecouvrir');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal() {
    overlay.style.display='none';
    }*/

    $(".bouton_decouvrir").click(function(){
        $("#overlay").show();
    });
    
    $("#btnClose").click(function(){
        $("#overlay").hide();
    });
=======
$(".bouton_decouvrir").click(function(){
	$("#overlay").show();
});

$("#btnClose").click(function(){
	$("#overlay").hide();
});
>>>>>>> 689e83e9c938aaa40228b8af35dbb132ba3fabc4
