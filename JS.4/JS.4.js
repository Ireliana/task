/**
 * Created by Administrator on 2017/3/1 0001.
 */
var num = [];
function leftinput() {
    var m = document.getElementById("ipt").value;
    num.unshift(m);
    shownum();
}
function rightinput() {
    var m = document.getElementById("ipt").value;
    num.push(m);
    shownum();
}
function leftdel() {
    if(num.length==0){
        alert("队列元素为空！")
    }else {
        var x = num.shift();
        shownum();
        alert("队列左侧第一个元素是:"+x)
    };
}
function rightdel() {
    if(num.length==0){
        alert("队列元素为空！")
    }else {
        var x = num.pop();
        shownum();
        alert("队列右侧第一个元素是:" + x)
    };
}

function shownum() {
    document.getElementById("div1").innerHTML = "";
    for(var i=0;i<num.length;i++) {
        var div = document.createElement("div");
        div.addEventListener("click",del);
        div.style.display = "inline-block";
        div.style.width = "50px";
        div.style.height = "25px";
        div.style.marginRight = "10px";
        div.style.background = "red";
        div.style.marginTop = "2px";
        div.style.paddingTop = "10px";
        div.style.textAlign = "center";
        div.style.color = "white";
        div.innerText = num[i];
        document.getElementById("div1").appendChild(div);
    }
}
function del () {
    var i = num.indexOf(this);
    num.splice(i);
    shownum();
}