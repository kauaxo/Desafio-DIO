// Variável global usada no switch 
const boolean = true 

// Matriz de herois e seus respectivos exp
let herois = [
    ["mateus", 950],
    ["tedd", 1750],
    ["john", 4999],
    ["nic", 5001],
    ["pele", 8000],
    ["Jessica", 9000],
    ["kaua", 15000]
]

// Variável auxiliar para o while
let i = 0

// Estrutura de repetição para passar por toda a matriz 
while (i < herois.length){
    let nome = herois[i][0] // Variável nome recebe o só os nomes
    let exp = herois[i][1] // Variável exp recebe só os numeros
    let nivel = "" // Variavel sem valor na declaração

    // Estrutura de decisão 
    switch(boolean){
        case (exp <= 1000): 
            nivel = "Ferro"
            break
        case (exp >= 1001 && exp <= 2000):
            nivel = "Bronze"
            break
        case (exp >= 2001 && exp <= 5000):
            nivel = "Prata"
            break
        case (exp >= 5001 && exp <= 7000):
            nivel = "Ouro"
            break
        case (exp >= 7001 && exp <= 8000):
            nivel = "Platina"
            break
        case (exp >= 8001 && exp <= 9000):
            nivel = "Ascendente"
            break
        case (exp >= 9001 && exp <= 10000):
            nivel = "Imortal"
            break
        default:
            nivel = "Radiante"
            break
    }

    console.log("O Herói de nome " + nome + " está no nível de " + nivel)

    // Incrementa para passar para o próximo herói da matriz
    i++ 
}
