// Funções e estruturas de repetição
// Outra solução:

const usuarios = [
    {
        nome: "Jessé",
        tecnologias: ["React", "Node.JS"]    
    },
    {
        nome: "Hugo",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Gabriela",
        tecnologias: ["HTML", "Node.js"]
    }
]

for (let a = 0; a < usuarios.length; a++) {
    // Jessé trabalha com React, Node.JS
    // Hugo trabalha com HTML, CSS
    // Gabriela trabalha com HTML, Node.js

    // a: unica variavel que esta dinamica
    console.log(`${usuarios[a].nome} trabalha com ${usuarios[a].tecnologias.join(', ')}`)
}