let container = document.querySelector(".container")

let maxCells = 100

let cellList = document.getElementsByClassName("cell")

caselleGenerator(maxCells,container)

function caselleGenerator(maxCells,container){
    for(let i = 0; i < maxCells; i++){
        container.innerHTML += `<div class="cell" id="${i}"></div>`
    }
    
    for(let i = 0; i < cellList.length; i++){
        let currentCell = cellList[i]
        currentCell.addEventListener("click", function(){
            currentCell.classList.toggle("aqua")
            console.log(currentCell.id)
        })
    }
}
