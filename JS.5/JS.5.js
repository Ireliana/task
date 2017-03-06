/**
 * Created by Administrator on 2017/3/6 0006.
 */
var num = [];

function leftinput() {
    if(document.getElementById("ipt").value<10||document.getElementById("ipt").value>100) {
        alert("请输入10-100之间的数字");
    }
    else if(num.length<60) {
        var m = document.getElementById("ipt").value;
        num.unshift(m);
        shownum();
    }else {
        alert("队列元素超过60！")
    }
}
function rightinput() {
    if(document.getElementById("ipt").value<10||document.getElementById("ipt").value>100) {
        alert("请输入10-100之间的数字");
    }
    else if(num.length<60){
        var m = document.getElementById("ipt").value;
        num.push(m);
        shownum();
    }else {
        alert("队列元素超过60！")
    }

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
    for (var i = 0; i < num.length; i++) {
        var div = document.createElement("div");
        div.addEventListener("click", del);
        div.style.display = "inline-block";
        div.style.width = "20px";
        div.style.height = num[i]+"px";
        div.style.marginRight = "2px";
        div.style.background = "red";
        div.style.marginTop = "2px";
        div.style.paddingTop = "10px";
        document.getElementById("div1").appendChild(div);
    }
}
function del () {
    var i = num.indexOf(this);
    num.splice(i);
    shownum();
}

var j = 0;
var k = 0;
var timer1 = null;
var timer2 = null;
function sort() {
    timer2  = setInterval(function () {
        if(k == num.length){
            clearInterval(timer2);
        }else {
            timer1 = setInterval(function () {
                if(j == num.length-1){
                    j = 0;
                    clearInterval(timer1);
                }else {
                    console.log(num);
                    if(num[j] > num[j+1]){
                        var temp = num[j];
                        num[j] = num[j+1];
                        num[j+1] = temp;
                        shownum();
                    }
                    j = j+1;
                    console.log(j);
                }
            },500);
            k++;
        }
    },500)
}
