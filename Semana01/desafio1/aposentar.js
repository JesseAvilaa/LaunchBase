// Crie um programa para calcular a aposentadoria de uma pessoa

const nome = 'Gabriela'
const sexo = 'Feminino'
const idade = 30
const contribuicao = 10

const total = idade + contribuicao

// Se a pessoa estiver aposentada:
if ( total >= 60 ) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar`)
}