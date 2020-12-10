$(".tagRecherche").click(function(){
    var tag = $(this).text().trim();
    var recherche = $("#inputRecherche").val();
    if(recherche === ""){
        $("#inputRecherche").val(tag);
    }else{
        $("#inputRecherche").val(recherche+" "+tag);
    }
    rechercheUpdate();
});

$("#inputRecherche").keyup(rechercheUpdate);

function rechercheUpdate(){
    var termes = document.querySelector("#inputRecherche").value.replace(/\s+/g, ' ').split(" ");
    var cartes = document.querySelectorAll(".carte_commerce");
    cartes.forEach(function(carte, index){
        var tags = carte.querySelector(".tags").value.split(",");
        var tag;
        var final = true;
        for (i = 0; i < termes.length; i++) {
            console.log(termes[i]);
            for (j = 0; j < tags.length; j++){
                tag = tags[j].trim();
                if(tag.toLowerCase().startsWith(termes[i].toLowerCase())){
                    final = true;
                    break;
                }
                final = false;
            }

        }
        if(!final){
            $(carte).hide();
        }else{
            $(carte).show();
        }
    });
}