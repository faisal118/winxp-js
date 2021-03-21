class Icon {
    constructor(title,image) {
        this.title = title;
        this.image = image;
        this.selected = false;
        this.index = icons.length;
        this.elem = document.createElement("div");
        this.elem.classList.add('desktop-icon');
        this.elem.addEventListener('mousedown',e=>{
            this.select();
        });
        const img = document.createElement("img");
        img.src='./img/icons/'+this.image;
        img.width = 32;
        img.height = 32;
        this.elem.appendChild(img);

        const text = document.createElement("div");
        text.classList.add('icon-title');
        text.innerHTML = this.title;
        this.elem.appendChild(text);

    }
    select() {
        this.elem.classList.add('icon-selected');
        iconsUnSelect(this.index);
    }
    unSelect() {
        this.elem.classList.remove('icon-selected');
    }
}

function iconsUnSelect(ind) {
    icons.forEach(i=>{
        if (i.index!=ind) {
            i.unSelect();
        }
    });
}


const icons = [];
icons.push(new Icon('My Documents',"Icon796.png"));
icons.push(new Icon('My Computer',"Icon123.png"));
icons.push(new Icon('Recycle Bin',"Icon273.png"));


function drawIcons() {
    let desktop = document.querySelector('.desktop');
    icons.forEach(i=>{
        
        desktop.appendChild(i.elem);
    });
}

drawIcons();