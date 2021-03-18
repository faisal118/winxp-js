function logMeIn() {
    document.querySelector('#xplogo').style.display = 'none';
    document.querySelector('.right-panel').classList.remove('right-panel-active');
    document.querySelector('#myUser').style.opacity = 1;

    document.querySelector('.welcome').style.display = 'block';
    document.querySelector('.subtext').style.display = 'block';
    document.querySelector('.turnbutton').style.display = 'none';
    document.querySelector('.footertext').style.display = 'none';
    setTimeout(() => {
        document.querySelector('.login-screen').style.display = 'none';
    }, 3000);
}