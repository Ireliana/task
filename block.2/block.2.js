
//记录当前位置
var currentP ;

//记录当前头部位置
var head ;

//记录盒子初始头部；
var boxHead ;

//定义方块起始位置
window.onload = function () {
    currentP = document.getElementById("66");
    head = "top";
    boxHead = "top";
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
        if(ipt!= "GO"&&ipt != "TUN LEF"&&ipt != "TUN RIG"&&ipt != "TUN BAC"&& ipt!= "TRA LEF"&& ipt!="TRA TOP"&& ipt!="TRA RIG"&&ipt!="TRA BOT" &&ipt!="MOV LEF"&&ipt!="MOV TOP"&&ipt!="MOV RIG"&&ipt!="MOV BOT"){
            alert("输入无效，请输入GO、TUN LEF、TUN RIG或TUN BAC");
            document.getElementById("ipt").value = "";
        }else {
            if(ipt === "GO"){
                Go();
            }else if(ipt === "TUN LEF"){
                if(boxHead ==="top"){
                    topLEF();
                }if(boxHead === "bottom"){
                    bottomLEF();
                }if(boxHead === "left"){
                    leftLEF();
                }if(boxHead === "right"){
                    rightLEF();
                }

            }else if(ipt === "TUN RIG"){
                if(boxHead ==="top"){
                    topRIG();
                }if(boxHead === "bottom"){
                    bottomRIG();
                }if(boxHead === "left"){
                    leftRIG();
                }if(boxHead === "right"){
                    rightRIG();
                }

            }else if(ipt === "TUN BAC"){
                if(boxHead ==="top"){
                    topBAC();
                }if(boxHead === "bottom"){
                    bottomBAC();
                }if(boxHead === "left"){
                    leftBAC();
                }if(boxHead === "right"){
                    rightBAC();
                }
            }else if(ipt === "TRA LEF"){
                traLEF();
            }else if(ipt === "TRA TOP"){
                traTOP();
            }else if(ipt === "TRA RIG"){
                traRIG();
            }else if(ipt === "TRA BOT"){
                traBOT();
            }else if(ipt === "MOV LEF"){
                movLEF();
            }else if(ipt === "MOV TOP"){
                movTOP();
            }else if(ipt === "MOV RIG"){
                movRIG();
            }else if(ipt === "MOV BOT"){
                movBOT();
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
                currentP.style.animationFillMode = "none";
                currentP = document.getElementById(currentId);
                var div1 = document.createElement("div");
                div1.style.width = "50px";
                div1.style.height = "15px";
                div1.style.backgroundColor = "blue";
                var div2 = document.createElement("div");
                div2.style.width = "50px";
                div2.style.height = "35px";
                div2.style.backgroundColor = "red";
                $(div1).hide();
                $(div2).hide();
                currentP.appendChild(div1);
                currentP.appendChild(div2);
                $(div1).fadeIn(2000);
                $(div2).fadeIn(2000);
                boxHead = "top";
        }else {
            alert("移动不能超出格子空间！");
        }
    }else if(head === "bottom"){
        var currentId;
        if((currentP.getAttribute("id")[2])=== "0"){
            currentId = parseInt(currentP.getAttribute("id"))+100 ;
        }else {
            currentId = parseInt(currentP.getAttribute("id")) + 10;
        }
        if(document.getElementById(currentId)!=null){
            currentP.innerHTML = "";
            currentP.style.animationFillMode = "none";
            currentP = document.getElementById(currentId);
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div2);
            currentP.appendChild(div1);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "bottom";
        }else {
            alert("移动不能超出格子空间！");
        }
    }else if(head === "left"){
        var currentId;
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
            currentP.style.animationFillMode = "none";
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
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div1);
            currentP.appendChild(div2);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "left";
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
            currentP.style.animationFillMode = "none";
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
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div2);
            currentP.appendChild(div1);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "right";
        }else {
            alert("移动不能超出格子空间！");
        }
    }
}
function topLEF() {
    if(head === "top"){
        currentP.style.animation = "topTopLEF 2s forwards";
        head = "left";
    }else if(head === "bottom"){
        currentP.style.animation = "topBottomLEF 2s forwards";
        head = "right";
    }else if(head === "left"){
        currentP.style.animation = "topLeftLEF 2s forwards";
        head = "bottom";
    }else if(head === "right") {
        currentP.style.animation = "topRightLEF 2s forwards";
        head = "top";
    }
}
function topRIG() {
    if(head === "top"){
        currentP.style.animation = "topTopRIG 2s forwards";
        head = "right";
    }else if(head === "bottom"){
        currentP.style.animation = "topBottomRIG 2s forwards";
        head = "left";
    }else if(head === "left"){
        currentP.style.animation = "topLeftRIG 2s forwards";
        head = "top";
    }else if(head === "right") {
        currentP.style.animation = "topRightRIG 2s forwards";
        head = "bottom";
    }
}
function topBAC() {
    if(head === "top"){
        currentP.style.animation = "topTopBAC 2s forwards";
        head = "bottom";
    }else if(head === "bottom"){
        currentP.style.animation = "topBottomBAC 2s forwards";
        head = "top";
    }else if(head === "left"){
        currentP.style.animation = "topLeftBAC 2s forwards";
        head = "right";
    }else if(head === "right") {
        currentP.style.animation = "topRightBAC 2s forwards";
        head = "left";
    }
}
function bottomLEF() {
    if(head === "top"){
        currentP.style.animation = "bottomTopLEF 2s forwards";
        head = "left";
    }else if(head === "bottom"){
        currentP.style.animation = "bottomBottomLEF 2s forwards";
        head = "right";
    }else if(head === "left"){
        currentP.style.animation = "bottomLeftLEF 2s forwards";
        head = "bottom";
    }else if(head === "right") {
        currentP.style.animation = "bottomRightLEF 2s forwards";
        head = "top";
    }
}
function bottomRIG() {
    if(head === "top"){
        currentP.style.animation = "bottomTopRIG 2s forwards";
        head = "right";
    }else if(head === "bottom"){
        currentP.style.animation = "bottomBottomRIG 2s forwards";
        head = "left";
    }else if(head === "left"){
        currentP.style.animation = "bottomLeftRIG 2s forwards";
        head = "top";
    }else if(head === "right") {
        currentP.style.animation = "bottomRightRIG 2s forwards";
        head = "bottom";
    }
}
function bottomBAC() {
    if(head === "top"){
        currentP.style.animation = "bottomTopBAC 2s forwards";
        head = "bottom";
    }else if(head === "bottom"){
        currentP.style.animation = "bottomBottomBAC 2s forwards";
        head = "top";
    }else if(head === "left"){
        currentP.style.animation = "bottomLeftBAC 2s forwards";
        head = "right";
    }else if(head === "right") {
        currentP.style.animation = "bottomRightBAC 2s forwards";
        head = "left";
    }
}
function leftLEF() {
    if(head === "top"){
        currentP.style.animation = "leftTopLEF 2s forwards";
        head = "left";
    }else if(head === "bottom"){
        currentP.style.animation = "leftBottomLEF 2s forwards";
        head = "right";
    }else if(head === "left"){
        currentP.style.animation = "leftLeftLEF 2s forwards";
        head = "bottom";
    }else if(head === "right") {
        currentP.style.animation = "leftRightLEF 2s forwards";
        head = "top";
    }
}
function rightLEF() {
    if(head === "top"){
        currentP.style.animation = "rightTopLEF 2s forwards";
        head = "left";
    }else if(head === "bottom"){
        currentP.style.animation = "rightBottomLEF 2s forwards";
        head = "right";
    }else if(head === "left"){
        currentP.style.animation = "rightLeftLEF 2s forwards";
        head = "bottom";
    }else if(head === "right") {
        currentP.style.animation = "rightRightLEF 2s forwards";
        head = "top";
    }
}
function leftRIG() {
    if(head === "top"){
        currentP.style.animation = "leftTopRIG 2s forwards";
        head = "right";
    }else if(head === "bottom"){
        currentP.style.animation = "leftBottomRIG 2s forwards";
        head = "left";
    }else if(head === "left"){
        currentP.style.animation = "leftLeftRIG 2s forwards";
        head = "top";
    }else if(head === "right") {
        currentP.style.animation = "leftRightRIG 2s forwards";
        head = "bottom";
    }
}
function rightRIG() {
    if(head === "top"){
        currentP.style.animation = "rightTopRIG 2s forwards";
        head = "right";
    }else if(head === "bottom"){
        currentP.style.animation = "rightBottomRIG 2s forwards";
        head = "left";
    }else if(head === "left"){
        currentP.style.animation = "rightLeftRIG 2s forwards";
        head = "top";
    }else if(head === "right") {
        currentP.style.animation = "rightRightRIG 2s forwards";
        head = "bottom";
    }
}
function leftBAC() {
    if(head === "top"){
        currentP.style.animation = "leftTopBAC 2s forwards";
        head = "bottom";
    }else if(head === "bottom"){
        currentP.style.animation = "leftBottomBAC 2s forwards";
        head = "top";
    }else if(head === "left"){
        currentP.style.animation = "leftLeftBAC 2s forwards";
        head = "right";
    }else if(head === "right") {
        currentP.style.animation = "leftRightBAC 2s forwards";
        head = "left";
    }
}
function rightBAC() {
    if(head === "top"){
        currentP.style.animation = "rightTopBAC 2s forwards";
        head = "bottom";
    }else if(head === "bottom"){
        currentP.style.animation = "rightBottomBAC 2s forwards";
        head = "top";
    }else if(head === "left"){
        currentP.style.animation = "rightLeftBAC 2s forwards";
        head = "right";
    }else if(head === "right") {
        currentP.style.animation = "rightRightBAC 2s forwards";
        head = "left";
    }
}
function traLEF() {
    var currentId;
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
        currentP.style.animationFillMode = "none";
        currentP = document.getElementById(currentId);
        if(head === "top"){
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div1);
            currentP.appendChild(div2);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "top";
        }else if(head === "bottom"){
            currentP.innerHTML = "";
            currentP.style.animationFillMode = "none";
            currentP = document.getElementById(currentId);
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div2);
            currentP.appendChild(div1);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "bottom";
        }else if(head === "left"){
            currentP.innerHTML = "";
            currentP.style.animationFillMode = "none";
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
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div1);
            currentP.appendChild(div2);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "left";
        }else if(head === "right"){
            currentP.innerHTML = "";
            currentP.style.animationFillMode = "none";
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
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div2);
            currentP.appendChild(div1);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "right";
        }
    }else {
        alert("移动不能超出格子空间！");
    }
}
function traTOP() {
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
        currentP.style.animationFillMode = "none";
        currentP = document.getElementById(currentId);
        if(head === "top"){
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div1);
            currentP.appendChild(div2);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "top";
        }else if(head === "bottom"){
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div2);
            currentP.appendChild(div1);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "bottom";
        }else if(head === "left"){
            div1.style.width = "15px";
            div1.style.height = "50px";
            div1.style.float = "left";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "35px";
            div2.style.height = "50px";
            div2.style.float = "left";
            div2.style.backgroundColor = "red";
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div1);
            currentP.appendChild(div2);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "left";
        }else if(head === "right"){
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
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div2);
            currentP.appendChild(div1);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "right";
        }
    }else {
        alert("移动不能超出格子空间！");
    }
}
function traRIG() {
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
        currentP.style.animationFillMode = "none";
        currentP = document.getElementById(currentId);
        if(head === "top"){
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div1);
            currentP.appendChild(div2);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "top";
        }else if(head === "bottom"){
            var div1 = document.createElement("div");
            div1.style.width = "50px";
            div1.style.height = "15px";
            div1.style.backgroundColor = "blue";
            var div2 = document.createElement("div");
            div2.style.width = "50px";
            div2.style.height = "35px";
            div2.style.backgroundColor = "red";
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div2);
            currentP.appendChild(div1);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "bottom";
        }else if(head === "left"){
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
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div1);
            currentP.appendChild(div2);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "left";
        }else if(head === "right"){
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
            $(div1).hide();
            $(div2).hide();
            currentP.appendChild(div2);
            currentP.appendChild(div1);
            $(div1).fadeIn(2000);
            $(div2).fadeIn(2000);
            boxHead = "right";
        }
    }else {
        alert("移动不能超出格子空间！");
    }
}
function traBOT() {
    var currentId;
    if((currentP.getAttribute("id")[2])=== "0"){
        currentId = parseInt(currentP.getAttribute("id"))+100 ;
    }else {
        currentId = parseInt(currentP.getAttribute("id")) + 10;
    }
    if(document.getElementById(currentId)!=null){
        currentP.innerHTML = "";
        currentP.style.animationFillMode = "none";
        currentP = document.getElementById(currentId);
      if(head === "top"){
          var div1 = document.createElement("div");
          div1.style.width = "50px";
          div1.style.height = "15px";
          div1.style.backgroundColor = "blue";
          var div2 = document.createElement("div");
          div2.style.width = "50px";
          div2.style.height = "35px";
          div2.style.backgroundColor = "red";
          $(div1).hide();
          $(div2).hide();
          currentP.appendChild(div1);
          currentP.appendChild(div2);
          $(div1).fadeIn(2000);
          $(div2).fadeIn(2000);
          boxHead = "top";
      }else if(head === "bottom"){
          var div1 = document.createElement("div");
          div1.style.width = "50px";
          div1.style.height = "15px";
          div1.style.backgroundColor = "blue";
          var div2 = document.createElement("div");
          div2.style.width = "50px";
          div2.style.height = "35px";
          div2.style.backgroundColor = "red";
          $(div1).hide();
          $(div2).hide();
          currentP.appendChild(div2);
          currentP.appendChild(div1);
          $(div1).fadeIn(2000);
          $(div2).fadeIn(2000);
          boxHead = "bottom";
      }else if(head === "left"){
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
          $(div1).hide();
          $(div2).hide();
          currentP.appendChild(div1);
          currentP.appendChild(div2);
          $(div1).fadeIn(2000);
          $(div2).fadeIn(2000);
          boxHead = "left";
      }else if(head === "right"){
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
          $(div1).hide();
          $(div2).hide();
          currentP.appendChild(div2);
          currentP.appendChild(div1);
          $(div1).fadeIn(2000);
          $(div2).fadeIn(2000);
          boxHead = "right";
      }
    }else {
        alert("移动不能超出格子空间！");
    }

}
function movLEF() {
    if(boxHead === "top"){
         if(head == "top"){
             currentP.style.animation = "topTopLEF 2s forwards";
             head = "left";
        }else if(head == "bottom"){
             currentP.style.animation = "topBottomRIG 2s forwards";
             head = "left";
         }else if(head == "right"){
             currentP.style.animation = "topRightBAC 2s forwards";
             head = "left";
         }
    }else if(boxHead === "bottom"){
        if(head == "top"){
            currentP.style.animation = "bottomTopLEF 2s forwards";
            head = "left";
        }else if(head == "bottom"){
            currentP.style.animation = "bottomBottomRIG 2s forwards";
            head = "left";
        }else if(head == "right"){
            currentP.style.animation = "bottomRightBAC 2s forwards";
            head = "left";
        }
    }else if(boxHead === "left"){
        if(head == "top"){
            currentP.style.animation = "leftTopLEF 2s forwards";
            head = "left";
        }else if(head == "bottom"){
            currentP.style.animation = "leftBottomRIG 2s forwards";
            head = "left";
        }else if(head == "right"){
            currentP.style.animation = "leftRightBAC 2s forwards";
            head = "left";
        }
    }else if(boxHead === "right"){
        if(head == "top"){
            currentP.style.animation = "rightTopLEF 2s forwards";
            head = "left";
        }else if(head == "bottom"){
            currentP.style.animation = "rightBottomRIG 2s forwards";
            head = "left";
        }else if(head == "right"){
            currentP.style.animation = "rightRightBAC 2s forwards";
            head = "left";
        }
    }
    traLEF();
}
function movTOP() {
    if(boxHead === "top"){
        if(head == "bottom"){
            currentP.style.animation = "topBottomBAC 2s forwards";
            head = "top";
        }else if(head == "left"){
            currentP.style.animation = "topLeftRIG 2s forwards";
            head = "top";
        }else if(head == "right"){
            currentP.style.animation = "topRightLEF 2s forwards";
            head = "top";
        }
    }else if(boxHead === "bottom"){
        if(head == "bottom"){
            currentP.style.animation = "bottomBottomBAC 2s forwards";
            head = "top";
        }else if(head == "left"){
            currentP.style.animation = "bottomLeftRIG 2s forwards";
            head = "top";
        }else if(head == "right"){
            currentP.style.animation = "bottomRightLEF 2s forwards";
            head = "top";
        }
    }else if(boxHead === "left"){
        if(head == "bottom"){
            currentP.style.animation = "leftBottomBAC 2s forwards";
            head = "top";
        }else if(head == "left"){
            currentP.style.animation = "leftLeftRIG 2s forwards";
            head = "top";
        }else if(head == "right"){
            currentP.style.animation = "leftRightLEF 2s forwards";
            head = "top";
        }
    }else if(boxHead === "right"){
        if(head == "bottom"){
            currentP.style.animation = "rightBottomBAC 2s forwards";
            head = "top";
        }else if(head == "left"){
            currentP.style.animation = "rightLeftRIG 2s forwards";
            head = "top";
        }else if(head == "right"){
            currentP.style.animation = "rightRightLEF 2s forwards";
            head = "top";
        }
    }
     traTOP();
}
function movRIG() {
    if(boxHead =="top"){
        if(head == "top"){
            currentP.style.animation = "topTopRIG 2s forwards";
            head = "right";
        }else if(head == "bottom"){
            currentP.style.animation = "topBottomLEF 2s forwards";
            head = "right";
        }else if(head == "left") {
            currentP.style.animation = "topLeftBAC 2s forwards";
            head = "right";
        }
    }else if(boxHead =="bottom"){
        if(head == "top"){
            currentP.style.animation = "bottomTopRIG 2s forwards";
            head = "right";
        }else if(head == "bottom"){
            currentP.style.animation = "bottomBottomLEF 2s forwards";
            head = "right";
        }else if(head == "left"){
            currentP.style.animation = "bottomLeftBAC 2s forwards";
            head = "right";
        }
    }else if(boxHead == "left"){
        if(head == "top"){
            currentP.style.animation = "leftTopRIG 2s forwards";
            head = "right";
        }else if(head == "bottom"){
            currentP.style.animation = "leftBottomLEF 2s forwards";
            head = "right";
        }else if(head == "left"){
            currentP.style.animation = "leftLeftBAC 2s forwards";
            head = "right";
        }
    }else if(boxHead == "right"){
        if(head == "top"){
            currentP.style.animation = "rightTopRIG 2s forwards";
            head = "right";
        }else if(head == "bottom"){
            currentP.style.animation = "rightBottomLEF 2s forwards";
            head = "right";
        }else if(head == "left"){
            currentP.style.animation = "rightLeftBAC 2s forwards";
            head = "right";
        }
    }
    traRIG();
}
function movBOT() {
    if(boxHead =="top"){
        if(head == "top"){
            currentP.style.animation = "topTopBAC 2s forwards";
            head = "bottom";
        }else if(head == "left"){
            currentP.style.animation = "topLeftLEF 2s forwards";
            head = "bottom";
        }else if(head =="right"){
            currentP.style.animation = "topRightRIG 2s forwards";
            head = "bottom";
        }
    }else if(boxHead =="bottom"){
        if(head == "top"){
            currentP.style.animation = "bottomTopBAC 2s forwards";
            head = "bottom";
        }else if(head == "left"){
            currentP.style.animation = "bottomLeftLEF 2s forwards";
            head = "bottom";
        }else if(head =="right"){
            currentP.style.animation = "bottomRightRIG 2s forwards";
            head = "bottom";
        }
    }else if(boxHead == "left"){
        if(head == "top"){
            currentP.style.animation = "leftTopBAC 2s forwards";
            head = "bottom";
        }else if(head == "left"){
            currentP.style.animation = "leftLeftLEF 2s forwards";
            head = "bottom";
        }else if(head =="right"){
            currentP.style.animation = "leftRightRIG 2s forwards";
            head = "bottom";
        }
    }else if(boxHead == "right"){
        if(head == "top"){
            currentP.style.animation = "rightTopBAC 2s forwards";
            head = "bottom";
        }else if(head == "left"){
            currentP.style.animation = "rightLeftLEF 2s forwards";
            head = "bottom";
        }else if(head =="right"){
            currentP.style.animation = "rightRightRIG 2s forwards";
            head = "bottom";
        }
    }
    traBOT();
}