/*
 * @Author: your name
 * @Date: 2020-05-27 16:50:39
 * @LastEditTime: 2020-05-28 12:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \酒店前端页面\js\quit.js
 */ 

var myobj={
  single:[
    {
      "roomstyle":"家庭房",
      "class1":"人数: 4 人",
      "class2":"评分: 9.8",
      "class3":"",
      "price":" 1960.00",
      "img":"images/room/img-1.jpg",
    },
    {
      "roomstyle":"商务房",
      "class1":"人数: 2 人",
      "class2":"评分: 9.5",
      "class3":"",
      "price":" 1230.00",
      "img":"images/room/img-1.jpg",
    },
    {
      "roomstyle":"经济房",
      "class1":"人数: 2 人",
      "class2":"评分: 9.3",
      "class3":"",
      "price":" 900.00",
      "img":"images/room/img-1.jpg",
    },

  ],
}
var srcc = window.location;   //得到地址栏连接
srcc = srcc.toString()  //转换成string类型，可以省略
var start = srcc.indexOf("?");   //返回"?"在字串中第一次出现的位置
var end = srcc.length;  //字串的长度
var user= srcc.substring(start+1,end) 
if(start==-1){
  alert("请先登录");
 setTimeout(() => {
  window.location.href="login.html"
 }, 1000);

}


var a=myobj.single.length;
var i;

// var xhttp = new XMLHttpRequest();
    
    
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = (this.responseText);
//     myObj = eval("("+myObj+")");

//     console.log(myObj);



//   }
// };
// xhttp.open("POST","http://101.132.135.179:8088/hotel/select/getUserRoomById?id=1", true);
// xhttp.send();

  



      for(i=0;i<a;i++){
        let li= document.createElement("li")
        document.getElementById("single").appendChild(li);
        document.getElementById("single").getElementsByTagName("li")[i].innerHTML='<div class="aui-car-box-list-item"><div class="aui-car-box-list-img"><a href=" #"><img src="images/room/img-1.jpg" alt=""></a></div><div class="aui-car-box-list-text"><h4><a href=" #"></a></h4><div class="aui-car-box-list-text-brief"><span></span><span></span><div><span></div></span> </div><div class="aui-car-box-list-text-price"><div class="aui-car-box-list-text-pri"> <b class="price"></b></div><div class="aui-car-box-list-text-arithmetic"><button class="num" onclick="del(this.id)">删除</button></div></div></div></div><div class="aui-dri"></div>'
        document.getElementById("single").getElementsByClassName("price")[i].innerHTML=myobj.single[i].price
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("button")[0].id=i
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("a")[1].innerHTML= myobj.single[i].roomstyle
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("span")[0].innerHTML=myobj.single[i].class1
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("span")[1].innerHTML=myobj.single[i].class2
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("span")[2].innerHTML=myobj.single[i].class3
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("img")[0].src=myobj.single[i].img
      }


      function del(id){
        document.getElementById("single").getElementsByTagName("li")[id].innerHTML=""
        alert("删除成功")
        
      }
      
      