let greeting = document.getElementById("greeting")
let btn = document.getElementById("btn")

btn.addEventListener(('click'), ()=>{
 console.log("fixed")
 greeting.style.fontFamily= (`'Mountains of Christmas', cursive`)
 greeting.innerText =("🎄🎅Merry Christmas! 🎁❄️")
})