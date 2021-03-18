
const startupAudio = new Audio('./sound/startup.mp3');
const shutdownAudio = new Audio('./sound/shutdown.mp3');
function logMeIn() {
    document.querySelector('#xplogo').style.display = 'none';
    document.querySelector('.right-panel').classList.remove('right-panel-active');
    // document.querySelector('#myUser').style.opacity = 1;

    document.querySelector('.welcome').style.display = 'block';
    document.querySelector('.subtext').style.display = 'block';
    document.querySelector('.turnbutton').style.display = 'none';
    document.querySelector('.footertext').style.display = 'none';
    
    setTimeout(() => {
        startupAudio.play();
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.login-screen').style.display = 'none';
    }, 2000);

}

function logMeOut() {
    document.querySelector('.login-screen').style.display = 'block';
    document.querySelector('#xplogo').style.display = 'block';
    document.querySelector('.right-panel').classList.add('right-panel-active');
    // document.querySelector('#myUser').style.opacity = 0.5;
    document.querySelector('.welcome').style.display = 'none';
    document.querySelector('.subtext').style.display = 'none';
    document.querySelector('.turnbutton').style.display = 'block';
    document.querySelector('.footertext').style.display = 'block';
    
    shutdownAudio.play();
    // setTimeout(() => {
    //     shutdownAudio.play();
    // }, 1000);
    

}