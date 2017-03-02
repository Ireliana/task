/**
 * Created by Administrator on 2017/3/2 0002.
 */
var f = [];
function hobby() {
    f = [];
    var str1 = document.getElementById("text2").value.replace(/[\r\n]/g,"，");
    var str2 = str1.replace(/\s+/g,"，").replace(",","，").replace("、","，");
    var h = str2.split("，");
    for(var i=0;i<h.length;i++) {
        for (var j = 0; j < f.length; j++) {
            if(f.length ==0){
                f.push(h[i]);
                continue;
            }
            if (h[i] == f[j]) {
                h[i] = "";
            }
        }
        if (h[i] != "" && f.length < 10) {
            f.push(h[i]);
        }
        else if (h[i] != "" &&f.length >= 10) {
            f.shift();
            f.push(h[i]);
        }
    }
    show2();
}
function show2() {
    document.getElementById("hbs").innerHTML = "";
    for(var i=0;i<f.length;i++){
        var div = document.createElement("div");
        div.style.display = "inline-block";
        div.style.background = "peachpuff";
        div.style.color = "white";
        div.style.marginRight = "5px";
        div.style.fontSize = "30px";
        div.innerText = f[i].trim();
        document.getElementById("hbs").appendChild(div);
    }
}
var p = [];
var pointer1 = 0;
var pointer = 0;
function search() {
    var msg = document.getElementById("ipt1").value;
    var temp = msg.split("");
    for(var i=0;i<temp.length;i++){
        for(var j=0;j<f.length;j++){
            if(f[j].search(temp[i])!=-1){
                p.push(f[j]);
                pointer = 1;
            }
        }
    }
    if(pointer==1){
        document.getElementById("hbs").innerHTML = "";
        for(var i=0;i<f.length;i++){
            var div = document.createElement("div");
            div.style.display = "inline-block";
            div.style.background = "peachpuff";
            for(var j=0;j<p.length;j++){
                if(f[i]===p[j]){
                    div.style.color = "red";
                    pointer1 = 1;
                    break;
                }
            }
            if(pointer1==0){
                div.style.color = "white";
            }
            div.style.marginRight = "5px";
            div.style.fontSize = "30px";
            div.innerText = f[i].trim();
            document.getElementById("hbs").appendChild(div);
            pointer1 = 0;
        }
    }else {
        show2();
    }
    p = [];
    pointer = 0;
}