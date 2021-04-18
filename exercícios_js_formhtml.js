/*
   1 - Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo.
   Deve, então, apresentar como resposta o valor da entrada (50%) e restante em 12x.

*/
function calc(){
   var txtveic = document.getElementById('txtveic')
   var txtpreco = document.getElementById('txtpreco')
   var outveic = document.getElementById('outveic')
   var outpreco = document.getElementById('outpreco')

   var veiculo = txtveic.value 
   var valor = Number(txtpreco.value) 

   var valor1 = valor / 2
   var valor2 = Math.ceil(valor1 / 12)
   
   outveic.textContent = veiculo
   outpreco.textContent = `Entrada de R$ ${valor1} +12x de R$ ${valor2}` 
}

/*
   2 - Elaborar um programa para um restaurante que leia o preço por kg e o consumo em gramas de um cliente.
   Exiba o valor a ser pago.

*/
function calc(){
   var txtkg = document.getElementById('txtkg')
   var txtconsumo = document.getElementById('txtconsumo')
   
   var kg = Number(txtkg.value) 
   var consumo = Number(txtconsumo.value) 

   var total = (consumo * kg) / 1000
   
   outconsumo.textContent = `Valor a pagar R$ ${total}` 
}
/*
   3 - Elaborar um programa para uma lan house de um aeroporto. 
   O programa deve ler o valor de cada 15 min de uso de um computador e o tempo de uso por um cliente em minutos.
   Informe o valor a ser pago pelo cliente, sabendo que as frações de 15 minutos devem ser cobradas de forma integral.

*/
function calc(){
   var txtvalor = document.getElementById('txtvalor')
   var txttempo = document.getElementById('txttempo')
   var outvalor = document.getElementById('outvalor')

   var valor = Number(txtvalor.value) 
   var tempo = Number(txttempo.value) 

   var total = tempo / 15
   var total2 = Math.ceil(total)
   var final = total2 * valor
   
   outvalor.textContent = `Valor a pagar R$: ${final}`
}