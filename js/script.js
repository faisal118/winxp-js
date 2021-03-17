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