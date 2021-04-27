
function resultado(){

    var nome = document.getElementById("nome");
    var av1 = document.getElementById("av1");
    var av2 = document.getElementById("av2");
    var av3 = document.getElementById("av3");
    var resultadoFinal = document.getElementById("resultado");
    
    var nome = (nome.value);
    var av1 = Number(av1.value);
    var av2 = Number(av2.value);
    var av3 = Number(av3.value);
    
    if(av1 < av3){av3 = av1}
    if(av2 < av3){av3 = av2}
    
    var media = (av1 + av2) / 2
    
        if (av1 < 4 || av2 < 4 || media < 6) {resultadoFinal.textContent= `${nome}, você foi reprovado.`}
    
        else{resultadoFinal.textContent= `Parabéns ${nome}, você foi aprovado.`}
        }
    
    document.getElementById("btnresult").addEventListener("click", resultado)