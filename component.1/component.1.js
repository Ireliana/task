
//保存整个页面高度和宽度
var wd;
var hg;

//保存当前可视区域高度和宽度
var sWithd;
var sHeight;


//获取页面高度和宽度
window.onload = window.onresize = function () {
     wd = document.documentElement.scrollWidth;
     hg = document.documentElement.scrollHeight;
    sWithd = document.documentElement.clientWidth;
    sHeight = document.documentElement.clientHeight;
    document.getElementById("container").innerHTML = "";
     creatArea();
     creatLog();
};
//实现遮罩层
function creatArea() {
    var area = document.createElement("area");
    area.id = "area";
    area.style.width = wd+"px";
    area.style.height = hg+"px";
    area.style.position = "absolute";
    area.style.top = "0px";
    area.style.left = "0px";
    area.style.backgroundColor = "darkgrey";
    area.style.opacity = "0.5";
    area.style.zIndex = "1000";
    area.onclick = function () {
        document.getElementById("container").innerHTML = "";
    };
    document.getElementById("container").appendChild(area);
}

//标志浮出层是否可移动
var moving = false;

//当前鼠标距离元素的距离
var left = 0;
var topY = 0;


//实现浮出层
function creatLog() {
   var log = document.createElement("div");
   log.id = "log";
   log.style.width = "500px";
   log.style.height = "300px";
   log.innerText = "这是一个浮出层，可拖动，点击登录可重新展现";
   log.style.textAlign = "center";
   log.style.position = "fixed";
   log.style.backgroundColor = "white";
   log.style.top = (sHeight-300)/2+"px";
   log.style.left = (sWithd-500)/2+"px";
   log.style.cursor = "pointer";
   var btn1 = document.createElement("button");
   var btn2 = document.createElement("button");
    btn1.style.width = "100px";
    btn1.style.height = "40px";
    btn1.innerText = "确定";
    btn2.style.width = "100px";
    btn2.style.height = "40px";
    btn2.innerText = "取消";
    log.appendChild(btn2);
    log.appendChild(btn1);
    btn1.onclick = btn2.onclick = function () {
        document.getElementById("container").innerHTML = "";
    };
    btn2.style.position = "absolute";
    btn2.style.bottom = "4px";
    btn2.style.right = "4px";
    btn1.style.position = "absolute";
    btn1.style.bottom = "4px";
    btn1.style.right = "108px";
    log.style.zIndex = "1001";

    log.addEventListener("mousedown",function (e) {
            var e = e||window.e;
        left = e.pageX - log.offsetLeft;
        topY = e.pageY - log.offsetTop;
        moving = true;

    });
    log.addEventListener("mousemove",function(e){
        if(moving === true){
            var e = e||window.e;
            var moveX = e.pageX - left;
            var moveY = e.pageY - topY;
            var eleWidth = log.offsetWidth;
            var eleHeight = log.offsetHeight;
            var maxWidth = document.documentElement.clientWidth - eleWidth;
            var maxHeight= document.documentElement.clientHeight - eleHeight;
             moveX = Math.min(maxWidth,Math.max(0,moveX));
             moveY = Math.min(maxHeight,Math.max(0,moveY));
                log.style.position = "absolute";
                log.style.left = moveX+"px";
                log.style.top = moveY+"px";
            }
    }
    );
    log.addEventListener("mouseup",function(e){
        moving = false;
        log.style.position = "fixed";
    });
    document.getElementById("container").appendChild(log);
}
//登录
function logIn() {
    creatArea();
    creatLog();
}