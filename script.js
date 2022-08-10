const container = document.querySelector(".container");
const clearButton = document.getElementById('clear')
const slider = document.getElementById('set-size')
const colorful = document.getElementById('colors')
const normalMode = document.getElementById('normal')
normalMode.classList.add("normal-mode")
const sizeText = document.querySelector("p")

sizeText.style.fontSize='11px'
sizeText.innerHTML= `${slider.value}x${slider.value}`

let arr = [];
function createGrid(size=16){
    let range = new Array(size**2);
    for (let _ of range) {
        arr.push(document.createElement("div"))
    }
    let formula = 480/size
    arr.forEach((ele) => {
        container.appendChild(ele)
        ele.style.height=  `${formula}` + 'px'
        ele.style.width=   `${formula}` + 'px'
    });
}

clearButton.addEventListener('click', function(){
    clear(arr)
})
colorful.addEventListener("click",  function(){
    colorful.classList.toggle('raibow-activated')
    normalMode.classList.toggle('normal-mode')
    randColor(arr)
})
normalMode.addEventListener('click', function(){
    colorful.classList.toggle('raibow-activated')
    normalMode.classList.toggle('normal-mode')
    addColor(arr)
})

// slider will generate a new grid based on its input value
slider.oninput = function(){
    size = +this.value
    sizeText.innerHTML = `${size}x${size}` 
    arr.forEach((ele)=>{
        container.removeChild(ele)
        console.log('removed')
    })
    arr = []
    createGrid(size)
    if (normalMode.classList.contains('normal-mode')){
        addColor(arr)

    } else{
        randColor(arr)
    }

}

function clear(square){
    square.forEach((ele) =>{
        ele.style.backgroundColor='#fff'
    })
}

function addColor(array){
    let color = '#242223'
    array.forEach((ele)=>{
        ele.addEventListener('mouseover', function(){
            ele.classList.add('normal-color')
            ele.style.backgroundColor=color
        })
    })
}

function randColor(array){
    array.forEach((ele)=>{ 
        ele.addEventListener('mouseover', function(){
            if (ele.classList.contains('normal-color')){
                ele.classList.remove('normal-color')
                ele.classList.add('rainbow')
            } else {
                ele.classList.add('rainbow')
            }
            let r = randomIntFromInterval(0, 255)
            let g = randomIntFromInterval(0, 255)
            let b = randomIntFromInterval(0, 255)
            ele.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
            console.log(ele)         
        })
    })
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
createGrid()
addColor(arr)