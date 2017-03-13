
//记录当前位置
var currentP ;

//记录当前头部位置
var head = "top";

//定义方块起始位置
window.onload = function () {
    currentP = document.getElementById("66");
    var div1 = document.createElement("div");
    div1.style.width = "50px";
    div1.style.height = "15px";
    div1.style.backgroundColor = "blue";
    var div2 = document.createElement("div");
    div2.style.width = "50px";
    div2.style.height = "35px";
    div2.style.backgroundColor = "red";
   currentP.appendChild(div1);
   currentP.appendChild(div2);
};

//获取输入指令
function order() {
    var ipt = document.getElementById("ipt").value;
    if(ipt != ""){
        if(ipt!= "GO"&&ipt != "TUN LEF"&&ipt != "TUN RIG"&&ipt != "TUN BAC"){
            alert("输入无效，请输入GO、TUN LEF、TUN RIG或TUN BAC");
            document.getElementById("ipt").value = "";
        }else {
            if(ipt === "GO"){
                Go();
            }else if(ipt === "TUN LEF"){
                LEF();
            }else if(ipt === "TUN RIG"){
                RIG();
            }else if(ipt === "TUN BAC"){
                 BAC();
            }
        }
    }
}

function Go() {
    if(head === "top"){
        var currentId ;
        if((currentP.getAttribute("id").length)<=3){

            if(currentP.getAttribute("id")[2] === "0"){
                 currentId = currentP.getAttribute("id")-100 ;
            }else {
                 currentId = currentP.getAttribute("id") - 10 ;
            }
        }else {
            currentId = "910";
        }
        if(document.getElementById(currentId)!=null){
            currentP.innerHTML = "";
            currentP = document.getElementById(currentId);
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            currentP.appendChild(div1);
            currentP.appendChild(div2);
        }else {
            alert("移动不能超出格子空间！");
        }
    }else if(head === "bottom"){
        var currentId;
        if((currentP.getAttribute("id")[2])=== "0"){
            // console.log(currentP.getAttribute("id"));
             currentId = parseInt(currentP.getAttribute("id"))+100 ;
        }else {
             currentId = parseInt(currentP.getAttribute("id")) + 10;
        }
        if(document.getElementById(currentId)!=null){
            currentP.innerHTML = "";
            currentP = document.getElementById(currentId);
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            currentP.appendChild(div2);
            currentP.appendChild(div1);
        }else {
            alert("移动不能超出格子空间！");
        }

    }else if(head === "left"){
        var currentId
        if((currentP.getAttribute("id").length)<=3){
            if(currentP.getAttribute("id")[2] === "0"){
                 currentId = currentP.getAttribute("id")[0]+ 9 ;
            }else {
                currentId = currentP.getAttribute("id") - 1 ;
            }
        }else {
             currentId = "109";
        }
        if(document.getElementById(currentId)!=null){
            currentP.innerHTML = "";
            currentP = document.getElementById(currentId);
            var div1 = document.createElement("div");
            div1.style.width = "15px";
            div1.style.height = "50px";
            div1.style.float = "left";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "35px";
            div2.style.height = "50px";
            div2.style.float = "left";
            div2.style.backgroundColor = "red";
            currentP.appendChild(div1);
            currentP.appendChild(div2);
        }else {
            alert("移动不能超出格子空间！");
        }
    }else if(head === "right"){
        var currentId;
        if((currentP.getAttribute("id").length)===2){
            if(currentP.getAttribute("id")[1] === "9"){
                 currentId = currentP.getAttribute("id")[0]+10 ;
            }else {
                 currentId = parseInt(currentP.getAttribute("id")) + 1  ;
            }
        }else if((currentP.getAttribute("id").length)===3){
            if(currentP.getAttribute("id")[2]=== "9" ){
                 currentId = "1010";
            }else {
                 currentId = parseInt(currentP.getAttribute("id")) + 1 ;
            }
        }
        if(document.getElementById(currentId)!=null){
            currentP.innerHTML = "";
            currentP = document.getElementById(currentId);
            var div1 = document.createElement("div");
            div1.style.width = "15px";
            div1.style.height = "50px";
            div1.style.float = "left";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "35px";
            div2.style.height = "50px";
            div2.style.float = "left"
            div2.style.backgroundColor = "red";
            currentP.appendChild(div2);
            currentP.appendChild(div1);
        }else {
            alert("移动不能超出格子空间！");
        }
    }
}
function LEF() {
    if(head === "top"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "15px";
        div1.style.height = "50px";
        div1.style.float = "left";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "35px";
        div2.style.height = "50px";
        div2.style.float = "left";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div1);
        currentP.appendChild(div2);
        head = "left";
    }else if(head === "bottom"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "15px";
        div1.style.height = "50px";
        div1.style.float = "left";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "35px";
        div2.style.height = "50px";
        div2.style.float = "left";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div2);
        currentP.appendChild(div1);
        head = "right";
    }else if(head === "left"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "50px";
        div1.style.height = "15px";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "50px";
        div2.style.height = "35px";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div2);
        currentP.appendChild(div1);
        head = "bottom";
    }else if(head === "right") {
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "50px";
        div1.style.height = "15px";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "50px";
        div2.style.height = "35px";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div1);
        currentP.appendChild(div2);
        head = "top";
    }
}
function RIG() {
    if(head === "top"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "15px";
        div1.style.height = "50px";
        div1.style.float = "left";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "35px";
        div2.style.height = "50px";
        div2.style.float = "left";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div2);
        currentP.appendChild(div1);
        head = "right";
    }else if(head === "bottom"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "15px";
        div1.style.height = "50px";
        div1.style.float = "left";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "35px";
        div2.style.height = "50px";
        div2.style.float = "left";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div1);
        currentP.appendChild(div2);
        head = "left";
    }else if(head === "left"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "50px";
        div1.style.height = "15px";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "50px";
        div2.style.height = "35px";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div1);
        currentP.appendChild(div2);
        head = "top";
    }else if(head === "right") {
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "50px";
        div1.style.height = "15px";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "50px";
        div2.style.height = "35px";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div2);
        currentP.appendChild(div1);
        head = "bottom";
    }
}
function BAC() {
    if(head === "top"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "50px";
        div1.style.height = "15px";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "50px";
        div2.style.height = "35px";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div2);
        currentP.appendChild(div1);
        head = "bottom";
    }else if(head === "bottom"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "50px";
        div1.style.height = "15px";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "50px";
        div2.style.height = "35px";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div1);
        currentP.appendChild(div2);
        head = "top";
    }else if(head === "left"){
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "15px";
        div1.style.height = "50px";
        div1.style.float = "left";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "35px";
        div2.style.height = "50px";
        div2.style.float = "left";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div2);
        currentP.appendChild(div1);
        head = "right";
    }else if(head === "right") {
        currentP.innerHTML = "";
        var div1 = document.createElement("div");
        div1.style.width = "15px";
        div1.style.height = "50px";
        div1.style.float = "left";
        div1.style.backgroundColor = "blue";
        var div2 = document.createElement("div");
        div2.style.width = "35px";
        div2.style.height = "50px";
        div2.style.float = "left";
        div2.style.backgroundColor = "red";
        currentP.appendChild(div1);
        currentP.appendChild(div2);
        head = "left";
    }
}

