/**
 * Created by Administrator on 2017/3/7 0007.
 */
function check() {
    var temp = 1;
    var tip =  document.getElementById("tip");
    var ipt = document.getElementById("ipt");
    if(ipt.value === ""){
        ipt.style.borderColor = "red";
       tip.style.color = "red";
       tip.innerText = "姓名不能为空";
    }else {
        var msg =  ipt.value;
        console.log(msg);
       var m = msg.split("");
       console.log(m);
       if(m.length>=4&&m.length<=16){
            for(var i=0;i<m.length;i++){
                if(m[i].charCodeAt(0)>=0x00&&m[i].charCodeAt(0)<=0xFF){
                    if(m[i].length == 1){
                        continue;
                    }else {console.log("英");
                            temp = 0;
                           ipt.style.borderColor = "red";
                            tip.style.color = "red";
                            tip.innerText = "名称格式错误";
                            break;
                        }

                    }else {
                    if(m[i].length == 1){
                        continue;
                    }else {
                        console.log("中");
                        console.log(m[i]);
                        temp = 0;
                        ipt.style.borderColor = "red";
                        tip.style.color = "red";
                        tip.innerText = "名称格式错误";
                        break;
                    }
                }

            }
       }else {
           temp = 0;
           ipt.style.borderColor = "red";
           tip.style.color = "red";
           tip.innerText = "名称格式错误";
       }
       if(temp){
           console.log("1");
           ipt.style.borderColor = "lawngreen";
            tip.style.color = "lawngreen";
            tip.innerText = "名称格式正确";
        }
    }

}