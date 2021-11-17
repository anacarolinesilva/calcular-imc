/* 
Faça um programa JavaScript em que o usuário informará sua altura e peso e o programa calculará o seu IMC.
*/

function calcular() {
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value

    imc = (peso / (altura * altura)).toFixed(2)

    document.getElementById("resultado").innerHTML = "IMC: <strong>" + imc + "</strong>"
}
