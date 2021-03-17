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

let winZIndex = 0;



const windows = [];
windows.push(new Window(100,100,500,300));
windows.push(new Window(400,140,500,300));

