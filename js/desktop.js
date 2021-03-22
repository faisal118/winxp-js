class Icon {
  constructor(title, image) {
    this.title = title;
    this.image = image;
    this.selected = false;
    this.index = icons.length;
    this.elem = document.createElement("div");
    this.elem.classList.add("desktop-icon");
    this.elem.addEventListener("mousedown", (e) => {
      setTimeout(() => this.select(), 0);
    });
    this.elem.addEventListener("dblclick", (e) => {
      windows.push(new Window(500, 200, 500, 300));
      windows[windows.length - 1].activate();
    });
    const img = document.createElement("img");
    img.src = "./img/icons/" + this.image;
    img.width = 32;
    img.height = 32;
    this.elem.appendChild(img);

    const text = document.createElement("div");
    text.classList.add("icon-title");
    text.innerHTML = this.title;
    this.elem.appendChild(text);
  }
  select() {
    this.elem.classList.add("icon-selected");
    // iconsUnSelect(this.index);
    this.selected = true;
  }
  unSelect() {
    this.elem.classList.remove("icon-selected");
    this.selected = false;
  }
}

const icons = [];
icons.push(new Icon("My Documents", "Icon796.png"));
icons.push(new Icon("My Computer", "Icon123.png"));
icons.push(new Icon("Recycle Bin", "Icon273.png"));

let desktop = document.querySelector(".desktop");
desktop.addEventListener("mousedown", (e) => {
  deActAll();
});

const menuItems = [
    {type:'item',name:'Arrange Icons By'},
    {type:'item',name:'Refresh'},
    {type:'sep'},
    {type:'item',name:'Paste'},
    {type:'item',name:'Paste ShortCut'},
    {type:'sep'},
    {type:'item',name:'New'},
    {type:'sep'},
    {type:'item',name:'Properties'}
];

desktop.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    const ctxMenus = document.querySelector('.context-menus');
    const ctx = document.createElement('div');
    ctx.classList.add('desktop-context-menu');
    ctx.style.top = ev.pageY+'px';
    ctx.style.left = ev.pageX+'px';

    menuItems.forEach(i=>{
        const item = document.createElement('div');
        if (i.type == 'item') {
            item.classList.add('context-menu-item');
            item.innerHTML = i.name;
            item.addEventListener('click',e=>{
                deActAll();
            });
        } else if (i.type == 'sep') {
            item.classList.add('context-menu-sep');
        }
        ctx.appendChild(item);
    });
    

    ctxMenus.appendChild(ctx);
    return false;
}, false);
function drawIcons() {
  let desktop = document.querySelector(".desktop");
  icons.forEach((i) => {
    desktop.appendChild(i.elem);
  });
}

drawIcons();
