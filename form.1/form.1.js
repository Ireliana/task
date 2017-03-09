/**
 * Created by Administrator on 2017/3/7 0007.
 */
"use strict";
function nullCheck() {
    document.getElementById("ipt").style.borderColor = "red";
    document.getElementById("tip").style.color = "red";
    document.getElementById("tip").innerText = "姓名不能为空";
}
function errorCheck() {
    document.getElementById("ipt").style.borderColor = "red";
    document.getElementById("tip").style.color = "red";
    document.getElementById("tip").innerText = "名称格式错误";
}
function checkEn(m) {
    return m.charCodeAt(0) <=0xFF;
}

function rightCheck() {
    document.getElementById("ipt").style.borderColor = "lawngreen";
    document.getElementById("tip").style.color = "lawngreen";
    document.getElementById("tip").innerText = "名称格式正确";
}
function check() {
    var en = 0;
    var ch = 0;
    var msg = document.getElementById("ipt").value.trim();

    if(msg == ""){
        nullCheck();
    }else {
        for(let  i of msg){
            if(checkEn(i)){
                en++;
            }else {
                ch++;
            }
        }
        var result  = en + ch*2;
        console.log(result);
        if(result>=4&&result<=16){
            rightCheck();
        }else {
            errorCheck();
        }
    }
}






