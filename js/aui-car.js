/*
 * @Author: your name
 * @Date: 2019-11-13 00:44:54
 * @LastEditTime: 2020-05-27 21:27:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \酒店前端页面\js\aui-car.js
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
      {
        "roomstyle":"标准房",
        "class1":"人数: 1 人",
        "class2":"评分: 9.1",
        "class3":"",
        "price":" 660.00",
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
  window.location.href="login.html?"+user
 }, 1000);

}

var nhttp = new XMLHttpRequest();
var userid
  
nhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var username = (this.responseText);
    username = eval("("+username+")");
  var userid=username.data.id
    console.log(userid);
   
    

  }
};
nhttp.open("POST","http://101.132.135.179:8088/hotel/select/getUserByUsername?username="+user, true);
nhttp.send();

(function(){



  var xhttp = new XMLHttpRequest();
  
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = (this.responseText);
      myObj = eval("("+myObj+")");

      console.log(myObj);
      console.log(myObj.data[0].roomType);
      console.log(myObj.data[0].roomPrice);
      console.log("http://101.132.135.179:8080"+myObj.data[0].roomPicture);
     
      var a=myObj.data.length;
      for(i=0;i<a;i++){
        let li= document.createElement("li")
        document.getElementById("single").appendChild(li);
        document.getElementById("single").getElementsByTagName("li")[i].innerHTML='<div class="aui-car-box-list-item"><div class="aui-car-box-list-img"><a href=" #"><img src="images/room/img-1.jpg" alt=""></a></div><div class="aui-car-box-list-text"><h4><a href=" #"></a></h4><div class="aui-car-box-list-text-brief"><span></span><span></span><div><span></div></span> </div><div class="aui-car-box-list-text-price"><div class="aui-car-box-list-text-pri"> <b class="price"></b></div><div class="aui-car-box-list-text-arithmetic"><a href="javascript:;" class="minus">-</a><span class="num">0</span><a href="javascript:;" class="plus">+</a></div></div></div></div><div class="aui-dri"></div>'
        document.getElementById("single").getElementsByClassName("price")[i].innerHTML=myObj.data[0].roomPrice
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("a")[1].innerHTML=myObj.data[i].roomType
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("span")[0].innerHTML=myobj.single[i].class1
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("span")[1].innerHTML=myobj.single[i].class2
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("span")[2].innerHTML=myobj.single[i].class3
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("img")[0].src="http://101.132.135.179:8080"+myObj.data[i].roomPicture
        document.getElementById("single").getElementsByTagName("li")[i].getElementsByTagName("img")[0].name=myObj.data[i].id
      }
      $(function(){
        // 数量减
        $(".minus").click(function() {
          var t = $(this).parent().find('.num');
          t.text(parseInt(t.text()) - 1);
          if (t.text() <=0) {
            t.text(0);
          }
          TotalPrice();
        });
        // 数量加
        $(".plus").click(function() {
          var t = $(this).parent().find('.num');
          t.text(parseInt(t.text()) + 1);
          if (t.text() <= 0) {
            t.text(0);
          }
          TotalPrice();
        });
        /******------------分割线-----------------******/
          // 点击商品按钮
          var texta,all1,all2;
          
          
        function TotalPrice() {
              all1=0;
              all2=0;
            for(i=0;i<a;i++){
              texta=document.getElementById("single").getElementsByClassName("num")[i].innerHTML;
              all1=all1+texta*myobj.single[i].price
            }
           
      
            document.getElementById('AllTotal').innerHTML=(all1).toFixed(2)
             
        }
      });
  
    }
  };
  xhttp.open("POST","http://101.132.135.179:8088/hotel/select/getRoomList?limit=10&page=1", true);
  xhttp.send();
})()








console.log(userid)


  var data1
  var data2

  function submit(){
    data1=document.getElementById('data1').value;
    data2=document.getElementById('data2').value;
    
    if(data1.length==0){
      alert("请选择入住时间");

    }
    else if(data2.length==0){
      alert("请选择离店时间");
    }
     else{

      alert("购买成功")

      setTimeout(() => {
        window.location.href="index.html?"+user
      }, 1000);
  
    start = data1.indexOf("/");   //返回"?"在字串中第一次出现的位置
    end = data1.length;  //字串的长度
    var yue= data1.substring(0,start) 
    var other=data1.substring(start+1,end) 
    start = other.indexOf("/");
    var ri=other.substring(0,start) 
    end=other.length
    var nian=other.substring(start+1,end)
    var ordertime=nian+"-"+yue+"-"+ri
    console.log(ordertime)


    start = data2.indexOf("/");   //返回"?"在字串中第一次出现的位置
    end = data2.length;  //字串的长度
    var yue= data2.substring(0,start) 
    var other=data2.substring(start+1,end) 
    start = other.indexOf("/");
    var ri=other.substring(0,start) 
    end=other.length
    var nian=other.substring(start+1,end)
    var leavetime=nian+"-"+yue+"-"+ri
    console.log(leavetime)
  



    var url =  "http://101.132.135.179:8088/hotel/userRoom/insertUserRoom?userId="+2+"&roomId=1"+"&orderTime="+ordertime+"&leaveTime="+leavetime; // 接收上传文件的后台地址
    
   
         
    
    xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
    xhr.withCredentials = true;

    xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var username = (this.responseText);
    username = eval("("+username+")");
    console.log(username)
    



  }
};
xhr.open("post", url, true);
xhr.send();

    }
  }











