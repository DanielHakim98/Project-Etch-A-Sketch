/*create nodes*/
const title=document.createElement('h1');
const divMain=document.createElement('div');
const divGrid=document.createElement('div');
const divCell=document.createElement('div');
const divControl=document.createElement('div');
const btnReset=document.createElement('button');
const btnErase=document.createElement('button');
const btnColor=document.createElement('button');
const btnRainbow=document.createElement('button');
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
btnRainbow.textContent="Rainbow";
title.textContent="Etch A Sketch";

divControl.append(btnReset,btnErase,btnColor);
divControl.append(btnRainbow);


divMain.appendChild(divGrid);
divMain.appendChild(divControl);
body.appendChild(divMain);
divMain.insertBefore(title,divGrid);
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
    e.target.style.backgroundColor='brown';
}


btnReset.addEventListener('click',resetAll);
function resetAll(e){
    gridCell.forEach((cell)=>{
        console.log(cell);
        cell.style.backgroundColor='white';
    });
}


btnErase.addEventListener('click',eraseAll)
function eraseAll(e){
    gridCell.forEach((cell)=>{
        cell.removeEventListener('mouseover',colorGrid);
        cell.removeEventListener('mouseover',rainbowGrid);

        cell.addEventListener('mouseover',whitening);
    } )   
}
function whitening(e){
    e.target.style.backgroundColor='white';
}


btnColor.addEventListener('click',coloring)
function coloring(e){
    gridCell.forEach((cell)=>{
        cell.removeEventListener('mouseover',whitening);
        cell.removeEventListener('mouseover',rainbowGrid);

        cell.addEventListener('mouseover',colorGrid);
    })
}


btnColor.addEventListener('dblclick',(e)=>{
    gridCell.forEach(e=>{
        e.style.backgroundColor='brown';
    })
})


btnRainbow.addEventListener('click',rainbowing)
function rainbowing(e){
    gridCell.forEach((cell)=>{
        cell.removeEventListener('mouseover',whitening);
        cell.removeEventListener('mouseover',colorGrid);

        cell.addEventListener('mouseover',rainbowGrid);
    })
}
function rainbowGrid(e){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.classList.remove('color');
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}


btnRainbow.addEventListener('dblclick',(e)=>{
    gridCell.forEach((cell)=>{
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        cell.style.backgroundColor=`rgb(${randomR}, ${randomG}, ${randomB})`;
    });
})

