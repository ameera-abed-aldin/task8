var header=document.querySelector("h2");
var pergh=document.querySelector("p");
var btnBiggerFont=document.querySelector(".biggerFont")
var btnSmallerFont=document.querySelector(".smallerFont")

function getBigger(){
    header.style.fontSize="2.5rem";
    pergh.style.fontSize="2rem";

}
function getSmaller(){
    header.style.fontSize="1rem";
    pergh.style.fontSize=".5rem";

}

btnBiggerFont.onclick =getBigger;
btnSmallerFont.onclick =getSmaller;

