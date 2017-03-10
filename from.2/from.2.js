
var nameIndex = 0;
var passWordIndex=0;
var passWordCopyIndex=0;
var emailIndex =0;
var telIndex =0;
function nullCheck(id1,id2,str) {
    document.getElementById(id1).style.borderColor = "red";
    document.getElementById(id2).style.color = "red";
    document.getElementById(id2).innerText = str+"不能为空";
}
function errorCheck(id1,id2,str) {
    document.getElementById(id1).style.borderColor = "red";
    document.getElementById(id2).style.color = "red";
    document.getElementById(id2).innerText = str;
}
function checkEn(m) {
    return m.charCodeAt(0) <=0xFF;
}

function rightCheck(id1,id2,str) {
    document.getElementById(id1).style.borderColor = "lawngreen";
    document.getElementById(id2).style.color = "lawngreen";
    document.getElementById(id2).innerText = str+"格式正确";
}

function nameFocus() {
    var nametip = document.getElementById("nametip");
    if(nametip.innerText == ""){
        nametip.innerText = "必填，长度为4~16个字符";
        nametip.style.color = "darkgrey";
        nametip.style.display = "block";
        nametip.style.marginLeft = "30px";
        nametip.style.marginBottom = "30px";
    }

}
function nameCheck() {
    var en = 0;
    var ch = 0;
    var msg = document.getElementById("name").value.trim();
    if(msg == ""){
        nameIndex = 0;
        nullCheck("name","nametip","姓名");

    }else {
        for(let  i of msg){
            if(checkEn(i)){
                en++;
            }else {
                ch++;
            }
        }
        var result  = en + ch*2;
        if(result>=4&&result<=16){
            nameIndex = 1;
            rightCheck("name","nametip","姓名");
        }else {
            nameIndex = 0;
            errorCheck("name","nametip","姓名格式错误");
        }
    }
}
function passWordFocus() {
    var  passWordtip = document.getElementById("passWordtip");
    if( passWordtip.innerText ===""){
        passWordtip.innerText = "请输入不少于5位的英文或数字密码";
        passWordtip.style.color = "darkgrey";
        passWordtip.style.display = "block";
        passWordtip.style.marginLeft = "30px";
        passWordtip.style.marginBottom = "30px";
    }
}
var passWord = "";
function passWordCheck() {
    var index = 1;
    passWord = document.getElementById("passWord").value;
    if(passWord == ""){
        passWordIndex = 0;
        nullCheck("passWord","passWordtip","密码");
    }else {
        for(let i of passWord){
            if(!checkEn(i)){
                passWordIndex = 0;
                errorCheck("passWord","passWordtip","密码包含非法字符");
                index = 0;
                break;
            }else {
                continue;
            }
        }
        if(index){
        var m = passWord.split("");
        if(m.length>=5){
            passWordIndex = 1;
            rightCheck("passWord","passWordtip","密码");
            }
        else {
            passWordIndex = 0;
            errorCheck("passWord","passWordtip","密码少于5位");
        }
    }
 }
}
function passWordCopyFocus() {
    var passWordCopytip = document.getElementById("passWordCopytip");
    if(passWordCopytip.innerText == ""){
        passWordCopytip.innerText = "再次输入相同密码";
        passWordCopytip.style.color = "darkgrey";
        passWordCopytip.style.display = "block";
        passWordCopytip.style.marginLeft = "30px";
        passWordCopytip.style.marginBottom = "30px";
    }
}
function passWordCopyCheck() {
    if(!passWordIndex){
        passWordCopyIndex = 0;
        errorCheck("passWordCopy","passWordCopytip","首次输入密码格式错误");
    }else {
        var passWordCopy = document.getElementById("passWordCopy").value;
        if (passWordCopy == "") {
            passWordCopyIndex = 0;
            nullCheck("passWordCopy", "passWordCopytip", "密码");
        } else {
            if (passWordCopy === passWord) {
                passWordCopyIndex = 1;
                rightCheck("passWordCopy", "passWordCopytip", "密码");
            } else {
                passWordCopyIndex = 0;
                errorCheck("passWordCopy", "passWordCopytip", "两次输入密码不一致");
            }
        }
    }
}
function emailFocus() {
    var emailFocusTip = document.getElementById("emailtip");
    if(emailFocusTip.innerText === ""){
        emailFocusTip.innerText = "请输入邮箱";
        emailFocusTip.style.color = "darkgrey";
        emailFocusTip.style.display = "block";
        emailFocusTip.style.marginLeft = "30px";
        emailFocusTip.style.marginBottom = "30px";
    }
}
function emailCheck() {
    var index = 1;
    var email = document.getElementById("e-mail").value;
    if(email === ""){
        emailIndex = 0;
        nullCheck("e-mail","emailtip","邮箱");
    }else {
        var s = email.slice(email.length-3,email.length);
        if(s != "com"){
            errorCheck("e-mail","emailtip","邮箱格式错误");
        }else {
            var e = email.split("");
            for(let i of e){
                if(!checkEn(i)){
                    emailIndex = 0;
                    errorCheck("e-mail","emailtip","邮箱格式错误");
                    index = 0;
                    break;
                }else {
                    continue;
                }
            }
            if(index){
                var a = email.indexOf("@");
                var dotpos = email.indexOf(".");
                if(a<1||dotpos-a<3){
                    emailIndex = 0;
                    errorCheck("e-mail","emailtip","邮箱格式错误");
                }else {
                    emailIndex = 1;
                    rightCheck("e-mail","emailtip","邮箱")
                }
            }
        }
    }
}
function telFocus() {
    var teltip = document.getElementById("teltip");
    if( teltip.innerText === ""){
        teltip.innerText = "请输手机号码";
        teltip.style.color = "darkgrey";
        teltip.style.display = "block";
        teltip.style.marginLeft = "30px";
        teltip.style.marginBottom = "30px";
    }
}
function telCheck() {
    var tel = document.getElementById("tel");
    if(tel.value === ""){
        telIndex = 0;
        nullCheck("tel","teltip","手机号码");
    }else {
            var reg = new RegExp("^[0-9]*[1-9][0-9]*$");
            if( !reg.test(tel.value) ){
                telIndex = 0;
                errorCheck("tel","teltip","手机号码格式错误");
            }else {
                if(tel.value.length=== 11){
                    telIndex = 1;
                    rightCheck("tel","teltip","手机号码");
                }else {
                    telIndex = 0;
                    errorCheck("tel","teltip","手机号码格式错误");
                }
            }
        }
    }
function check() {
    var pointer = nameIndex*passWordIndex*passWordCopyIndex*emailIndex*telIndex;
    if(pointer ===0){
        alert("输入有误！");
    }else {
        alert("输入正确！");
    }
}
