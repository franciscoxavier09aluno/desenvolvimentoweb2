function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura)
  if (imc < 18.5) {
    return "Abaixo do peso"
  } else if (imc < 25) {
    return "Peso normal"
  } else if (imc < 30) {
    return "Sobrepeso"
  } else {
    return "Obesidade"
  }
}

function executarIMC() {
  let resultadoIMC = calcularIMC(70, 1.75)
  console.log(resultadoIMC)
}

function manipularArray() {
  let numeros = [3, 7, 2, 9, 4]
  console.log("Maior:", Math.max(...numeros))
  console.log("Menor:", Math.min(...numeros))

  let dobro = numeros.map(function(n) {
    return n * 2
  })
  console.log("Dobro:", dobro)

  let maioresQue5 = numeros.filter(function(n) {
    return n > 5
  })
  console.log("Maiores que 5:", maioresQue5)
}

function manipularCarro() {
  let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    exibirInfo: function() {
      console.log("Marca: " + this.marca + " | Modelo: " + this.modelo + " | Ano: " + this.ano)
    }
  }

  carro.exibirInfo()
  carro.cor = "Preto"
  carro.ano = 2025
  console.log(carro)
}

class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo
    this.autor = autor
    this.ano = ano
  }

  detalhes() {
    console.log("Livro: " + this.titulo + " | Autor: " + this.autor + " | Ano: " + this.ano)
  }
}

function criarLivros() {
  let livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899)
  let livro2 = new Livro("A Cabana", "William Young", 2007)
  livro1.detalhes()
  livro2.detalhes()
}

function verificarPalindromo() {
  let palavra = prompt("Digite uma palavra:")
  console.log("Quantidade de caracteres:", palavra.length)

  let invertida = palavra.split('').reverse().join('')
  if (palavra === invertida) {
    console.log("É um palíndromo")
  } else {
    console.log("Não é um palíndromo")
  }
}

executarIMC()
manipularArray()
manipularCarro()
criarLivros()
verificarPalindromo()