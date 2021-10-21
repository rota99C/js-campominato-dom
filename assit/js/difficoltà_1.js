
let container = document.querySelector('.container')

// creo la funzione per generare la griglia di ogni livello
function creaGriglia(numero) {
    container.innerHTML = ""
    for (let index = 0; index < numero; index++) {
        let radice = Math.sqrt(numero)
        container.style.width = radice * 100 + "px"
        container.style.maxWidth = radice * 100 + "px"
        const elGriglia = document.createElement('div')
        elGriglia.className = ('cella')
        container.appendChild(elGriglia)

        let numGriglia = document.createElement('p')
        elGriglia.appendChild(numGriglia)
        numGriglia.innerHTML = index + 1

        /* elGriglia.addEventListener("click", function () {
            elGriglia.classList.add("azzurro");
        }); */
    }
}

// creo la funzione per generare le 16 bombe ad ogni livello
function bombGenerator(numero) {
    let bombe = []
    while (bombe.length < 16) {
        let bomb = Math.floor(Math.random() * numero) + 1;
        if (!bombe.includes(bomb)) {
            bombe.push(bomb)
        }
    }
    return bombe
}

document.querySelector(".btn1").addEventListener("click", function () {
    numQuadrati = 100;
    creaGriglia(numQuadrati)
    let bombPosition = bombGenerator(numQuadrati)
    // console.log(bombPosition);

})

document.querySelector(".btn2").addEventListener("click", function () {
    numQuadrati = 81;
    creaGriglia(numQuadrati)
    let bombPosition = bombGenerator(numQuadrati)
    // console.log(bombPosition);
})


document.querySelector(".btn3").addEventListener("click", function () {
    numQuadrati = 49;
    creaGriglia(numQuadrati)
    let bombPosition = bombGenerator(numQuadrati)
    // console.log(bombPosition);
})

// creo la funzione per la quale le celle si colorano di azzurro o rosso al click

let cella = document.querySelector(".cella")

cella.addEventListener("click", function () {
    this.classList.add("azzurro");
})

/* In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando
il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

//collego punteggio
const punteggio = document.querySelector(".punteggio")


