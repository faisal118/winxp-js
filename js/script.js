const startMenu = document.querySelector('.startMenu');
const startButton = document.querySelector('.startButton');
let startShow = false;


window.addEventListener('mousedown', function(e){
    if (startMenu.style.display == 'none') {
        if (startButton.contains(e.target)){
            startMenu.style.display = 'block';
            startButton.classList.add("startButtonActive");
            startButton.classList.remove("startButtonOver");
        }
    } else {
        if (startMenu.contains(e.target)){
            
        } else{
            startMenu.style.display = 'none';
            startButton.classList.remove("startButtonActive");
            startButton.classList.add("startButtonOver");
        }
    }
});

// make it ready to publish
let winDrag = false;
let winDragObj = 0;
let eResize = false;
let sResize = false;
let seResize = false;
window.addEventListener('mousemove', function(e){
    window.pageX = e.pageX;
    window.pageY = e.pageY;
    if (winDrag) {
        winDragObj.elem.style.left = winDragObj.dragLeft - (winDragObj.dragX - e.pageX) +"px";
        winDragObj.elem.style.top = winDragObj.dragTop - (winDragObj.dragY - e.pageY) +"px";
    }
    if (eResize&&e.pageX>parseInt(winDragObj.elem.style.left)) {
        winDragObj.elem.style.width = winDragObj.resizeW - (winDragObj.dragX - e.pageX) +"px";
        if (parseInt(winDragObj.elem.style.width)<120) {
            winDragObj.elem.style.width = '120px';
        }
    }
    if (sResize&&e.pageY>parseInt(winDragObj.elem.style.top)) {
        winDragObj.elem.style.height = winDragObj.resizeH - (winDragObj.dragY - e.pageY) +"px";
        if (parseInt(winDragObj.elem.style.height)<40) {
            winDragObj.elem.style.height = '40px';
        }
    }
    if (seResize) {
        winDragObj.elem.style.width = winDragObj.resizeW - (winDragObj.dragX - e.pageX) +"px";
        if (parseInt(winDragObj.elem.style.width)<120) {
            winDragObj.elem.style.width = '120px';
        }
        winDragObj.elem.style.height = winDragObj.resizeH - (winDragObj.dragY - e.pageY) +"px";
        if (parseInt(winDragObj.elem.style.height)<40) {
            winDragObj.elem.style.height = '40px';
        }
    }
});

window.addEventListener('mouseup', function(e){
    winDrag = false;
    eResize = false;
    sResize = false;
    seResize = false;
});
let winZIndex = 0;



const windows = [];
windows.push(new Window(100,100,500,300));
windows.push(new Window(400,140,500,300));

