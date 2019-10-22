// import math
// amostra= float(input('Digite a quantidade de elementos da amostra: '))
// n = amostra - 1
// quadrado = float(input('Digite a soma dos numeros ao quadrado: '))
// total= quadrado/n
// dp= math.sqrt(total)
// print('A variancia é: ', total)
// print('O desvio padrao é de: ',dp)
//var amostra = parseInt(document.getElementById("botao1")).value;
//var n = (amostra - 1);
//var quadrado = parseInt(document.getElementById("botao2")).value;

function resultado (){
    var amostra = document.calc.botao.value;
    var quadrado = document.calc.botao2.value;
    var n = amostra - 1;
    total = (quadrado / n);
    //alert("A variancia é de: " + total.toFixed(2));
    document.getElementById('botao3').setAttribute("value", total);  //Colocando o resultado no botao
    return total;
   

}
//alert(resultado);
//console.log('Resultado dessa merda: '+ total);
resultado();



function retornar() {
    history.go(-1);
}

retornar();









































































//  function amostra (){
//     var elem = parseFloat(document.getElementsById("botao1").value);
//     // var n = parseInt(elem )- 1;
//     var quadrado = parseFloat(document.getElementsById("botao2").value);
//      //total1 = (quadrado / n);
//     var resultado = total1;
    

//     document.calc.total1 = resultado;
//     alert("A variancia é de: " + resultado);
//     sub();
//  }

//  function sub (){
//      resultado = parseInt(document.getElementById("botao1").value)
//      - 1;
//  }
// function total(){
//     tot = 
// }