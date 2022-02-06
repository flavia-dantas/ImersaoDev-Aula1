function calcular() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "") {
    alert("Verificar se todas as notas foram digitadas");
  } else {
    var media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
  }
  if (media > 10) {
    alert("Verificar os valores digitados, a média está maior que 10 !");
  } else if (media < 0) {
    alert("Verificar os valores digitados, a média está menor que 0!");
  } else {
    if (media >= 7) {
      resultado.innerHTML = `<p>Sua Média é: ${media}</p>`;
      resultado.innerHTML += "Parabéns você foi APROVADO";
    } else {
      resultado.innerHTML = `<p>Sua Média é: ${media}</p>`;
      resultado.innerHTML += "Infelizmente você está REPROVADO";
    }
  }
}