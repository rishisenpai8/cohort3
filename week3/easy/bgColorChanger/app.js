function changeBackgoundColor(color){
    document.body.style.backgroundColor = color

}
function changeH1Color(){
    document.h1.style.color = white
}

document.getElementById('Red').onclick = function(){
    changeBackgoundColor('red')
    changeH1Color()
}
document.getElementById('Green').onclick = function(){
    changeBackgoundColor('green')
    changeH1Color()
}
document.getElementById('Blue').onclick = function(){
    changeBackgoundColor('blue')
    changeH1Color()
}
document.getElementById('Choose-color').onclick = function(){
    let color =  prompt("Enter a color Name or Hex code");
    changeBackgoundColor(color)
}
document.getElementById('Default').onclick = function(){
    changeBackgoundColor('white')
}

