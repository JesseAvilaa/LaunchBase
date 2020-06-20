// Funções e estruturas de repetição
// Outra solução (Com for...of)

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

for (usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}