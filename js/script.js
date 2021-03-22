const loader = document.querySelector('.boot-loader');
let loaderleft = 227;
//  loaderleft = 372;
// document.body.style.cursor  = "none";
// document.body.style.cursor  = "url(./img/mouse_cursor.png)"


function updateClock() {
    var d = new Date(); 
    const clock = document.querySelector('.clock');
    clock.innerHTML =  d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});  
}
updateClock();

setInterval(() => {
    updateClock();
}, 60000);

setTimeout(()=>{
    const loading = setInterval(()=>{
        if (Math.random()*4>0.5) {
    
            loaderleft+=8;
        }
        if (loaderleft>380) {
            loaderleft = 235;
        }
        loader.style.marginLeft = loaderleft+'px';
    },80);
    
    setTimeout(()=>{
        clearInterval(loading);
        
        document.querySelector('.boot-stage').style.display = 'none';
        
    },6000);

    
    setTimeout(()=>{
        document.querySelector('.boot-screen').style.display = 'none';
    },10000);
},3000);



const startMenu = document.querySelector('.startMenu');
const startButton = document.querySelector('.startButton');
let startShow = false;


window.addEventListener('mousedown', function(e){
    if (startMenu.style.display == 'none') {
        if (startButton.contains(e.target)){
            startMenu.style.display = 'block';
            startButton.classList.add("startButtonActive");
            startButton.classList.remove("startButtonOver");
            deActAll();
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
windows.push(new Window(500,200,500,300));
windows[windows.length-1].activate();


function deActAll() {
    windows.forEach(w=>w.deactivate());
    icons.forEach(i=>i.unSelect());

    if(document.querySelector('.desktop-context-menu')) {
        document.querySelector('.desktop-context-menu').remove();
    }
}

