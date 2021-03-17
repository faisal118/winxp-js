const startMenu = document.querySelector('.startMenu');
const startButton = document.querySelector('.startButton');
let startShow = false;


window.addEventListener('click', function(e){
    if (startMenu.style.display == 'none') {
        if (startButton.contains(e.target)){
            startMenu.style.display = 'block';
        }
    } else {
        if (startMenu.contains(e.target)){
            
        } else{
            startMenu.style.display = 'none';
        }
    }
});

let winDrag = false;
let winDragObj = 0;
window.addEventListener('mousemove', function(e){
    window.pageX = e.pageX;
    window.pageY = e.pageY;
    if (winDrag) {
        winDragObj.elem.style.left = winDragObj.dragLeft - (winDragObj.dragX - e.pageX) +"px";
        winDragObj.elem.style.top = winDragObj.dragTop - (winDragObj.dragY - e.pageY) +"px";
    }
});

window.addEventListener('mouseup', function(e){
    winDrag = false;
});
let winZIndex = 0;
const windows = [];
windows.push(new Window(100,100,500,300));
windows.push(new Window(400,140,500,300));

