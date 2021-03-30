class Window {
    constructor(title,icon,x,y,w,h,i) {
        this.active = true;
        this.state = 0;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;    
        this.elem = document.createElement("div");   
        this.taskband = document.createElement("div");
        this.icon = icon;
        this.title = title;
        this.drag = false;
        this.dragX = 0;
        this.dragY = 0;
        this.dragLeft = 0;
        this.dragTop = 0;
        
        this.resizeW = 0;
        this.resizeH = 0;
        this.load();
    }
    activate() {
        deActAll();
        setTimeout(() => {
            this.active = true;
            
            this.taskband.classList.remove("taskbandInactive");
            this.taskband.classList.add("taskbandActive");
            if (this.state==0) {
                this.elem.classList.remove('normalInActive');
                this.elem.classList.add('normalActive');
            } else if (this.state==1) {
                this.elem.classList.remove('maxInActive');
                this.elem.classList.add('maxActive');
            }
        }, 0);
    }
    deactivate() {
        this.active = false;
        this.taskband.classList.add("taskbandInactive");
        this.taskband.classList.remove("taskbandActive");
        if (this.state==0) {
            this.elem.classList.add('normalInActive');
            this.elem.classList.remove('normalActive');
        } else if (this.state==1) {
            this.elem.classList.add('maxInActive');
            this.elem.classList.remove('maxActive');
        }
    }
    maximize() {
        this.w = parseInt(this.elem.style.width);
        this.h = parseInt(this.elem.style.height);
        this.x = parseInt(this.elem.style.left);
        this.y = parseInt(this.elem.style.top);
        this.elem.classList.remove("normalActive");
        this.elem.classList.add("maxActive");
        this.state=1;
        // this.elem.style.width = window.innerWidth+'px';
        // this.elem.style.height = (window.innerHeight-30)+'px';
        this.elem.style.width = 'unset';
        this.elem.style.height = 'unset';
        this.elem.style.top = '0px';
        this.elem.style.left = '0px';
        this.elem.style.bottom = '30px';
        this.elem.style.right = '0px';
    }
    normalize() {
        this.state=0;
        
        this.elem.classList.add("normalActive");
        this.elem.classList.remove("maxActive");
        
        this.elem.style.width = this.w+'px';
        this.elem.style.height = this.h+'px';
        this.elem.style.left = this.x+'px';
        this.elem.style.top = this.y+'px';
    }
    load() {
        this.elem.classList.add("window");
        this.elem.classList.add("normalActive");
        this.elem.style.width = this.w+'px';
        this.elem.style.height = this.h+'px';
        this.elem.style.left = this.x+'px';
        this.elem.style.top = this.y+'px';
        this.elem.style.zIndex = winZIndex;
        winZIndex++;


        this.elem.addEventListener('mousedown',e=>{
            
            this.elem.style.zIndex = winZIndex;
            winZIndex++;
            this.activate();
        });


        const topLeft = document.createElement("div");
        topLeft.classList.add("window-top-left");
        this.elem.appendChild(topLeft);

        
        const top = document.createElement("div");
        top.classList.add("window-top");

        top.addEventListener('mousedown',e=>{
            if (this.state==0) {
                this.dragX = window.pageX;
                this.dragY = window.pageY;
                this.dragLeft = parseInt(this.elem.style.left);
                this.dragTop = parseInt(this.elem.style.top);
                winDrag = true;
                winDragObj = this;
            }
            
        });


        top.addEventListener('dblclick',e=>{
            if (this.state == 0) {
                this.maximize();
            } else {
                this.normalize();
            }
        });



        this.elem.appendChild(top);

        const topRight = document.createElement("div");
        topRight.classList.add("window-top-right");
        topRight.addEventListener('mousedown',e=>{
            
        });
        this.elem.appendChild(topRight);

        const closeButton = document.createElement("div");
        closeButton.classList.add("close-button");
        closeButton.addEventListener('click',e=>{
            this.elem.remove();
            this.taskband.remove();
        });
        this.elem.appendChild(closeButton);

        const maximizeButton = document.createElement("div");
        maximizeButton.classList.add("maximize-button");
        maximizeButton.addEventListener('click',e=>{
            if (this.state == 0) {
                this.maximize();
            } else {
                this.normalize();
            }
        });
        this.elem.appendChild(maximizeButton);

        
        const minimizeButton = document.createElement("div");
        minimizeButton.classList.add("minimize-button");
        minimizeButton.addEventListener('mousedown',e=>{
            
        });
        this.elem.appendChild(minimizeButton);

        
        const left = document.createElement("div");
        left.classList.add("window-left");
        this.elem.appendChild(left);

        const right = document.createElement("div");
        right.classList.add("window-right");
        right.addEventListener('mousedown',e=>{
            this.dragX = window.pageX;
            this.resizeW = parseInt(this.elem.style.width);
            eResize = true;
            winDragObj = this;
        });
        this.elem.appendChild(right);


        const bottom = document.createElement("div");
        bottom.classList.add("window-bottom");
        bottom.addEventListener('mousedown',e=>{
            this.dragY = window.pageY;
            this.resizeH = parseInt(this.elem.style.height);
            sResize = true;
            winDragObj = this;
        });
        this.elem.appendChild(bottom);


        const bottomLeft = document.createElement("div");
        bottomLeft.classList.add("window-bottom-left");
        this.elem.appendChild(bottomLeft);


        const bottomRight = document.createElement("div");
        bottomRight.classList.add("window-bottom-right");
        this.elem.appendChild(bottomRight);
        bottomRight.addEventListener('mousedown',e=>{
            this.dragX = window.pageX;
            this.dragY = window.pageY;
            this.resizeW = parseInt(this.elem.style.width);
            this.resizeH = parseInt(this.elem.style.height);
            seResize = true;
            winDragObj = this;
        });
        

        const windowBody = document.createElement("div");
        windowBody.classList.add("window-body");
        this.elem.appendChild(windowBody);


        const wicon = document.createElement("img");
        wicon.src = 'img/icons/'+this.icon;
        wicon.width = '16';
        wicon.classList.add("window-icon");
        this.elem.appendChild(wicon);

        const wtitle = document.createElement("div");
        wtitle.innerText = this.title;
        wtitle.classList.add("window-title");
        this.elem.appendChild(wtitle);


        document.body.appendChild(this.elem);

        const tbleft = document.createElement("div");
        tbleft.classList.add("taskband-left");
        this.taskband.appendChild(tbleft);

        const tbright = document.createElement("div");
        tbright.classList.add("taskband-right");
        this.taskband.appendChild(tbright);



        
        const tbicon = document.createElement("img");
        tbicon.src = 'img/icons/'+this.icon;
        tbicon.width = '16';
        tbicon.classList.add("taskband-icon");
        this.taskband.appendChild(tbicon);

        const tbtitle = document.createElement("div");
        tbtitle.innerText = this.title;
        tbtitle.classList.add("taskband-title");
        this.taskband.appendChild(tbtitle);



        this.taskband.classList.add("taskbandInactive");



        this.taskband.addEventListener('mousedown',e=>{
            
            this.elem.style.zIndex = winZIndex;
            winZIndex++;
            this.activate();
        });
        document.querySelector(".taskband").appendChild(this.taskband);


    }
}


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