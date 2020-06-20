//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa

const nome = 'Jessé'
const peso = 70
const altura = 1.93
const sexo = 'Masculino'

const imc = peso / (altura * altura);

// Se o imc maior ou igual a 30: Jessé você está acima do peso:
if ( imc >= 60 ) {
    console.log(`${nome} você está acima do peso`)
}

// Se o imc menor que 29.9: Jessé você não está acima do peso:
if ( imc < 29.9 ) {
    console.log(`${nome} você não está acima do peso`)
}

