// const box = document.querySelector('.box');
// box.addEventListener('click', toggleColor);

// function toggleColor() {
//     if (document.querySelector(".box").style.backgroundColor == "black"){
//       document.querySelector(".box").style.backgroundColor = "white";
//     } else{
//         document.querySelector(".box").style.backgroundColor = "black"
//     }
// }
let gridSize = document.querySelector('#size-form');
let reset = document.getElementById('gridReset');
let sketchContainer = document.querySelector('.sketchContainer');
gridSize.addEventListener('submit', buildGrid);
reset.addEventListener('click',resetGrid);



function resetGrid(){
    let grid = document.querySelector('.sketchContainer');
    grid.remove();
        let newContainer = document.createElement('div');
    newContainer.className = 'sketchContainer';
    document.body.appendChild(newContainer);

}

function buildGrid(e){
    e.preventDefault();

    //get input value
    let size = document.getElementById('item').value;
    console.log(size);

    for(let i = 0; i < size; i++){
        //create X new divs. 
        let div = document.createElement('div');
        //add class
        div.className = 'sketchGrid';
        //give div a black border
        div.style.borderColor = 'black';
        //give dive a solid border
        div.style.borderStyle = 'solid';
        //append new div
        sketchContainer.appendChild(div);
    }
}

