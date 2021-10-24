
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

        // creo la numerazione
        let numGriglia = document.createElement('p')
        elGriglia.appendChild(numGriglia)
        numGriglia.innerHTML = index + 1

        // elGriglia.addEventListener("click", bombClick);
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

    numQuadrati = 100

    creaGriglia(numQuadrati)
    let bombPosition = bombGenerator(numQuadrati)
    console.log(bombPosition);
    //console.log(typeof bombPosition);

    let allCells = document.getElementsByClassName("cella")
    console.log(allCells);
    for (let index = 0; index < allCells.length; index++) {
        const singleCell = allCells[index];

        singleCell.addEventListener("click", function () {
            let numberCell = this.innerText;
            // console.log(numberCell);
            // console.log(typeof numberCell);
            if (bombPosition.includes(Number(numberCell))) {
                // console.log("Bomb detected");
                // la cella si colora di rosso
                singleCell.style.background = "red";

            } else {
                // la cella si colora di azzurro
                singleCell.style.background = "lightblue";
            }
        })
    }

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
