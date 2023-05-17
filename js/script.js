const divInfo = document.getElementById("iinfo");
const divDescricao = document.getElementById("idescricao");
const divProjetos = document.getElementById("iprojetos");

const botaoInfo = document.querySelector(".eu");
const botaoDesc = document.querySelector(".desc");
const botaoProjetos = document.querySelector(".projeto");



function mudarInfo(){
    divInfo.style.display = "block"
    divDescricao.style.display = "none"
    divProjetos.style.display = "none"

    botaoInfo.classList.add("ativo");
    botaoDesc.classList.remove("ativo");
    botaoProjetos.classList.remove("ativo");

}

function mudarDesc(){
    divInfo.style.display = "none"
    divDescricao.style.display = "block"
    divProjetos.style.display = "none"

    botaoInfo.classList.remove("ativo");
    botaoDesc.classList.add("ativo");
    botaoProjetos.classList.remove("ativo");

}

function mudarProj(){
    divInfo.style.display = "none"
    divDescricao.style.display = "none"
    divProjetos.style.display = "block"

    botaoInfo.classList.remove("ativo");
    botaoDesc.classList.remove("ativo");
    botaoProjetos.classList.add("ativo");

}