
function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var vejaMais=document.getElementById("vejaMais");
    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        vejaMais.innerHTML="veja mais";

    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        vejaMais.innerHTML="ocultar";
    }
}
function criarTopico(){
    var criarTopico=document.getElementById("criarTopico");
    var novoTopico=document.getElementById("novoTopico");
    var topicoEnviado=document.getElementById("topicoEnviado");
    var outroTopico=document.getElementById("outroTopico");

    if(criarTopico.style.display === "none"){
        criarTopico.style.display="inline";
        novoTopico.style.display="none";
        topicoEnviado.style.display="none";
        outroTopico.style.display="none";
        

    }else {
        criarTopico.style.display="none";
        novoTopico.style.display="inline";
        topicoEnviado.style.display="none";
        outroTopico.style.display="none";
    }
    
}
function topicoEnviado(){
    var criarTopico=document.getElementById("criarTopico");
    var novoTopico=document.getElementById("novoTopico");
    var topicoEnviado=document.getElementById("topicoEnviado");
    var outroTopico=document.getElementById("outroTopico");
    
    if(novoTopico.style.display === "none"){
        criarTopico.style.display="none";
        novoTopico.style.display="inline";
        topicoEnviado.style.display="none";
        outroTopico.style.display="none";
        

    }else{
        criarTopico.style.display="none";
        novoTopico.style.display="none";
        topicoEnviado.style.display="inline";
        outroTopico.style.display="none";
    }
    
}

function enviarOutro(){
    var criarTopico=document.getElementById("criarTopico");
    var novoTopico=document.getElementById("novoTopico");
    var topicoEnviado=document.getElementById("topicoEnviado");
    var outroTopico=document.getElementById("outroTopico");

    if(criarTopico.style.display === "none"){
        criarTopico.style.display="none";
        novoTopico.style.display="inline";
        outroTopico.style.display="none"; 

    }else {
        criarTopico.style.display="none";
        novoTopico.style.display="inline";
        topicoEnviado.style.display="none";
        outroTopico.style.display="none";
    }
    
}

