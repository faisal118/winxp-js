class Icon {
    constructor(title,image) {
        this.title = title;
        this.image = image;
    }
}


const icons = [];
icons.push(new Icon('My Documents',"Icon796.png"));
icons.push(new Icon('My Computer',"Icon123.png"));
icons.push(new Icon('Recycle Bin',"Icon273.png"));


function drawIcons() {
    let desktop = document.querySelector('.desktop');
    icons.forEach(i=>{
        const icon = document.createElement("div");
        icon.classList.add('desktop-icon');

        const img = document.createElement("img");
        img.src='./img/icons/'+i.image;
        img.width = 32;
        img.height = 32;
        icon.appendChild(img);

        const text = document.createElement("div");
        text.classList.add('icon-title');
        text.innerHTML = i.title;
        icon.appendChild(text);

        desktop.appendChild(icon);
    });
}

drawIcons();