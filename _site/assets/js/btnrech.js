rechercheOuverte = false;

function ajustRecherche(){
    $("#searchDiv").height("calc(100% - "+($("#titleDiv").innerHeight()+$("#searchArea").innerHeight())+"px)");
}

function fermeRecherche(){
    $("#searchDiv").height("calc(100% - "+$("#titleDiv").innerHeight()+"px)");
}

$(".btnrech").click(function(){
    
    if( $("#formDiv").hasClass("show") ){
        $("#formDiv").removeClass("show");
        $(".bloc").removeClass("show");
    }else{
        if(rechercheOuverte){
            fermeRecherche();
            rechercheOuverte = false;
        }else{
            ajustRecherche();
            rechercheOuverte = true;
        }
    }

}); 

$(window).resize(function(){
    if(rechercheOuverte){
        ajustRecherche();
    }
});
