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
        var final = true;
        var i, version;
        for (i = 0; i < termes.length; i++) {
            if(i === termes.length-1){
                version = "begin";
            }else{
                version = "full";
            }
            if(matchTags(termes[i], tags, version)){
                final = final && true;
            }else{
                final = final && false;
            }
        }
        if(!final){
            $(carte).hide();
            $(carte).next(".separateur_carte").hide();
        }else{
            $(carte).show();
            $(carte).next(".separateur_carte").show();
        }
        if($(".carte_commerce").length === $(".carte_commerce:hidden").length){
            $("#aucunResultat").show();
        }else{
            $("#aucunResultat").hide();
        }
    });
}

function matchTags(terme, tags, version){
    terme = terme.toLowerCase();
    var tag, i, check;
    for (i = 0; i < tags.length; i++){
        tag = tags[i].trim().toLowerCase();
        if(version === "begin"){
            check = tag.startsWith(terme);
        }
        if(version === "full"){
            check = (tag === terme);
        }
        if(check){
            return true;
        }
    }
    return false;
}