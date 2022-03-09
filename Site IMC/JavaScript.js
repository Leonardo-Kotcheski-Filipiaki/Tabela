contador = 0
function batata(){
    event.preventDefault()

nome=document.getElementById("name")
peso = document.getElementById("weight")
altura = document.getElementById("height")
bodyTabela=document.getElementById("tbody")

var pesoimc = peso.value
var alturaimc = parseFloat(altura.value)
var alturadiv = parseFloat(alturaimc / 100)
var imc = Number(pesoimc / (alturadiv * alturadiv))
var aviso
console.log(imc)
if (imc <= 18.5){
    aviso = "Abaixo do Peso!"
}else if(imc >= 18.6 && imc <=24.9){
    aviso = "Peso Normal!"
}else if(imc >= 25 && imc <=29.9){
    aviso = "Sobrepeso!"
}else if (imc >= 30 && imc <=34.9){
    aviso = "Obesidade Grau 1"
}else if (imc >= 35 && imc <= 39.9){
    aviso = "Obesidade Grau 2"
}else if (imc >= 40){
    aviso = "Obesidade Morbida"
}
contador++
thnContador = document.createElement("td")
thnNome=document.createElement("td") //cria as tabelas, cada thnTarara é a tabela de um negócio diferente, 
thnPeso=document.createElement("td")
thnAltura=document.createElement("td")
thnIMC=document.createElement("td")
thnAviso = document.createElement("td")

tr=document.createElement("tr")

thnContador.append(contador)
thnNome.append(nome.value) // ele passa o valor dos inputs pro thn
thnPeso.append(peso.value)
thnAltura.append(altura.value)
thnIMC.append(imc.toFixed(1)) // to fixed limita as casas decimais
thnAviso.append(aviso)

tr.append(thnContador)
tr.append(thnNome) // e esse passa os valores de cada thn pra tabela
tr.append(thnPeso)
tr.append(thnAltura)
tr.append(thnIMC)
tr.append(thnAviso)

bodyTabela.append(tr) // esse para tudo pra tabela  
}