
function inSide() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div2.style.marginLeft = "40px";
    div3.style.marginLeft = "40px";
    if(div1.innerText == ""){
        div1.innerText = "学校";
        var select = document.createElement("select");
        var opt1 = document.createElement("option");
        var opt2 = document.createElement("option");
        var opt3 = document.createElement("option");
        opt1.setAttribute("value","北京");
        opt1.innerText = "北京";
        opt2.setAttribute("value","上海");
        opt2.setAttribute("selected","selected");
        opt2.innerText = "上海";
        opt3.setAttribute("value","广州");
        opt3.innerText = "广州";
        //设置默认值级联的第二个select选项框
        var select1 = document.createElement("select");
        var opt4 = document.createElement("option");
        var opt5 = document.createElement("option");
        var opt6 = document.createElement("option");
        opt4.setAttribute("value","上海大学");
        opt4.innerText = "上海大学";
        opt5.setAttribute("value","复旦大学");
        opt5.innerText = "复旦大学";
        opt6.setAttribute("value","同济大学");
        opt6.innerText = "同济大学";
        select1.style.borderRadius = "5px";
        select1.style.width = "100px";
        select1.style.height = "30px";
        select1.appendChild(opt4);
        select1.appendChild(opt5);
        select1.appendChild(opt6);
        div3.appendChild(select1);
        //添加第一个select框子节点
        select.style.borderRadius = "5px";
        select.style.width = "100px";
        select.style.height = "30px";
        select.appendChild(opt1);
        select.appendChild(opt2);
        select.appendChild(opt3);
        //设置第二个select选项框
        select.addEventListener("change",function (e) {
            var div3 = document.getElementById("div3");
            var value  = e.target.value;
            if(value === "北京"){
                div3.innerHTML = "";
                var select1 = document.createElement("select");
                var opt4 = document.createElement("option");
                var opt5 = document.createElement("option");
                var opt6 = document.createElement("option");
                opt4.setAttribute("value","北京大学");
                opt4.innerText = "北京大学";
                opt5.setAttribute("value","清华大学");
                opt5.innerText = "清华大学";
                opt6.setAttribute("value","理工大学");
                opt6.innerText = "理工大学";
                select1.style.borderRadius = "5px";
                select1.style.width = "100px";
                select1.style.height = "30px";
                select1.appendChild(opt4);
                select1.appendChild(opt5);
                select1.appendChild(opt6);
                div3.appendChild(select1);
            }else if(value === "上海"){
                div3.innerHTML = "";
                var select1 = document.createElement("select");
                var opt4 = document.createElement("option");
                var opt5 = document.createElement("option");
                var opt6 = document.createElement("option");
                opt4.setAttribute("value","上海大学");
                opt4.innerText = "上海大学";
                opt5.setAttribute("value","复旦大学");
                opt5.innerText = "复旦大学";
                opt6.setAttribute("value","同济大学");
                opt6.innerText = "同济大学";
                select1.style.borderRadius = "5px";
                select1.style.width = "100px";
                select1.style.height = "30px";
                select1.appendChild(opt4);
                select1.appendChild(opt5);
                select1.appendChild(opt6);
                div3.appendChild(select1);
            }else if(value === "广州"){
                div3.innerHTML = "";
                var select1 = document.createElement("select");
                var opt4 = document.createElement("option");
                var opt5 = document.createElement("option");
                var opt6 = document.createElement("option");
                opt4.setAttribute("value","广州大学");
                opt4.innerText = "广州大学";
                opt5.setAttribute("value","暨南大学");
                opt5.innerText = "暨南大学";
                opt6.setAttribute("value","中山大学");
                opt6.innerText = "中山大学";
                select1.style.borderRadius = "5px";
                select1.style.width = "100px";
                select1.style.height = "30px";
                select1.appendChild(opt4);
                select1.appendChild(opt5);
                select1.appendChild(opt6);
                div3.appendChild(select1);
            }
        });
        div2.appendChild(select);
    }
}
function outSide() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div1.innerText = "就业单位";
    var ipt = document.createElement("input");
    ipt.setAttribute("type","input");
    ipt.style.width = "250px";
    ipt.style.marginLeft = "1px";
    ipt.style.height = "25px";
    ipt.style.borderRadius = "5px";
    div2.appendChild(ipt);
}