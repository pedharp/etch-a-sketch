const container = document.querySelector(".container");
const clearButton = document.getElementById('clear')
const setSizeButton = document.getElementById('set-size')

// [...Array(11)].map(e => Array(11).fill('foo')); 
let arr = [];
function createGrid(size=16){
    let range = new Array(size**2);
    for (let _ of range) {
        arr.push(document.createElement("div"))
    }

    arr.forEach((ele) => {
        container.appendChild(ele)
        ele.style.height= `${Math.floor(640 /16)}` + 'px'
        ele.style.width=   `${Math.floor(640 / 16)}` + 'px'
        ele.style.border="1px solid rgb(160,160,160)"
    });

}

clearButton.addEventListener('click', function(){
    clear(arr)
})

setSizeButton.addEventListener('click', function(){
    let size = prompt('Select size')

    let range = new Array(size**2);
    arr.forEach((ele)=>{
        container.removeChild(ele)
        console.log('removed')
    })
    arr = []
    for (let _ of range) {
        arr.push(document.createElement("div"))
    }
    arr.forEach((ele) => {
        container.appendChild(ele)
        ele.style.height= `${Math.floor(640 /size)}` + 'px'
        ele.style.width=   `${Math.floor(640 / size)}` + 'px'
        ele.style.border="1px solid rgb(160,160,160)"
    });
    addColor(arr)
    
})

function clear(square){
    square.forEach((ele) =>{
        ele.style.backgroundColor='#fff'
    })
}
function addColor(array){
    array.forEach((ele)=>{
        ele.addEventListener('mouseover', function(){
            ele.style.backgroundColor='black'
        })
    })
}

createGrid()
addColor(arr)