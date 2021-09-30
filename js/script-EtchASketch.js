/*create nodes*/
const divMain=document.createElement('div');
const divGrid=document.createElement('div');
const divCell=document.createElement('div');
const divControl=document.createElement('div');
const btnReset=document.createElement('button');
const btnErase=document.createElement('button');
const btnColor=document.createElement('button');
/*grab body selector*/
const body=document.querySelector('body');

/*set class for each divs and append it to DOM*/
divCell.setAttribute('class','grid-child');
divGrid.setAttribute('class','grid-container');
divControl.setAttribute('class','control');
divMain.setAttribute('class','main');

btnReset.textContent="Reset";
btnErase.textContent="Erase";
btnColor.textContent="Color";

divControl.append(btnReset,btnErase,btnColor);


divMain.appendChild(divGrid);
divMain.appendChild(divControl);
body.appendChild(divMain);

/*append each cells to grid area */
for(let i=0; i<16; i++){
    for(let j=0;j<16;j++){
    divGrid.appendChild(divCell.cloneNode());
    }
}


const gridCell=document.querySelectorAll('.grid-child');
console.log(gridCell);

gridCell.forEach((cell)=>{
    cell.addEventListener('mouseover',colorGrid);
});
function colorGrid(e){
    e.target.classList.remove('erase')
    e.target.classList.add('color');
    console.log(e.target);
}



btnReset.addEventListener('click',resetAll);
function resetAll(){
    gridCell.forEach((cell)=>{
        cell.classList.remove('color');
    });
}

btnErase.addEventListener('click',eraseAll)
function eraseAll(e){
    gridCell.forEach((cell)=>{
        cell.removeEventListener('mouseover',colorGrid);
        cell.addEventListener('mouseover',whitening);
    } )   
}
function whitening(e){
    e.target.classList.remove('color');
}

btnColor.addEventListener('click',coloring)
function coloring(e){
    gridCell.forEach((cell)=>{
        cell.removeEventListener('mouseover',whitening);
        cell.addEventListener('mouseover',colorGrid);
    })
}