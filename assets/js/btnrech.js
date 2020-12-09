const btnr = document.querySelector('.btnrech');

btnr.addEventListener('click', function (event){
    
    if( $("#formDiv").hasClass("show") ){
        $("#formDiv").removeClass("show");
    }else{
        const panel = document.querySelector('#searchDiv');
        panel.classList.add('down');
    }

})
