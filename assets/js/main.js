

function executar(){
    var meuVideo = document.getElementById("meuVideo");
    
    if(meuVideo.pause)
    {
        meuVideo.play();
    }
    else{
        meuVideo.pause();
    }
}