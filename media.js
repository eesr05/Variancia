

function resultado(){
    var valor1 = document.calc.botao.value;
    var valor2 = document.calc.botao2.value;
    var media = parseInt(valor1 / valor2);
    total = parseInt(media);
    document.getElementById('botao3').setAttribute('value', total);
   
    return total;

}
resultado();
function retornar() {
    history.go(-1);
}
retornar();