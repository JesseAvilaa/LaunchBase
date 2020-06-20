// Funções e estruturas de repetição

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

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com as seguintes tecnologias ${usuario.tecnologias.join(', ')}`)
}
