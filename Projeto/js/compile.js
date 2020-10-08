function teste(){

    var clique = window.document.getElementById('enviarMensagemBotao');

    for(var i = 0; i < 10; i++){
        if(clique.onclick){
        clique.innerHTML = 'Clicado';
        }
    }

    if(clique.onmouseleave){
        clique.innerHTML = 'Enviar';
    }
    console.log('Clicado');
}