const container = document.querySelector(".container");

// block.style.border = "3px solid black";
// block.style.width = "100px";
// block.style.height = "100px";

let range = new Array(256);
let count = 0
let arr = [];
for (let _ of range) {
    arr.push(document.createElement("div"))
}
arr.forEach((ele) => {
    ele.classList.add(`block` + count++);
    container.appendChild(ele)
    // ele.style.marginRight+=50 + 'px'
    // ele.style.marginBottom+=50 + 'px'

    ele.style.height="50px"
    ele.style.width="50px"
    ele.style.border="3px solid black"

});
console.log(arr);
