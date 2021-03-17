class Window {
    constructor(x,y,w,h) {
        this.active = true;
        this.state = 0;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;    
        this.elem = document.createElement("div");   
        this.load();
        this.drag = false;
        this.dragX = 0;
        this.dragY = 0;
        this.dragLeft = 0;
        this.dragTop = 0;
    }   
    load() {
        this.elem.classList.add("window");
        this.elem.style.width = this.w+'px';
        this.elem.style.height = this.h+'px';
        this.elem.style.left = this.x+'px';
        this.elem.style.top = this.y+'px';
        this.elem.style.zIndex = winZIndex;
        winZIndex++;

        this.elem.addEventListener('mousedown',e=>{
            
            this.elem.style.zIndex = winZIndex;
            winZIndex++;
        });

        const topLeft = document.createElement("div");
        topLeft.classList.add("window-top-left");
        this.elem.appendChild(topLeft);

        const top = document.createElement("div");
        top.classList.add("window-top");

        top.addEventListener('mousedown',e=>{
            this.dragX = window.pageX;
            this.dragY = window.pageY;
            this.dragLeft = parseInt(this.elem.style.left);
            this.dragTop = parseInt(this.elem.style.top);
            winDrag = true;
            winDragObj = this;
        });


        this.elem.appendChild(top);

        const topRight = document.createElement("div");
        topRight.classList.add("window-top-right");
        this.elem.appendChild(topRight);

        
        const left = document.createElement("div");
        left.classList.add("window-left");
        this.elem.appendChild(left);

        const right = document.createElement("div");
        right.classList.add("window-right");
        this.elem.appendChild(right);


        const bottom = document.createElement("div");
        bottom.classList.add("window-bottom");
        this.elem.appendChild(bottom);


        const bottomLeft = document.createElement("div");
        bottomLeft.classList.add("window-bottom-left");
        this.elem.appendChild(bottomLeft);


        const bottomRight = document.createElement("div");
        bottomRight.classList.add("window-bottom-right");
        this.elem.appendChild(bottomRight);

        

        const windowBody = document.createElement("div");
        windowBody.classList.add("window-body");
        this.elem.appendChild(windowBody);



        document.body.appendChild(this.elem);
    }
}