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

function submit(){

  







  var url =  "http://101.132.135.179:8088/hotel/userProduct/insertUserProduct?userId=2&productId=1&productNum=2"; // 接收上传文件的后台地址
  
 
       
  
  xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
  xhr.withCredentials = true;

  xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  var username = (this.responseText);
  username = eval("("+username+")");
  console.log(username)
  alert(username.msg)
  setTimeout(() => {
    window.location.href="index.html?"+user
  }, 1000);


}
};
xhr.open("post", url, true);
xhr.send();

  }


var xhttp = new XMLHttpRequest();
    
    
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = (this.responseText);
    myObj = eval("("+myObj+")");

    for(i=0;i<6;i++){
      let li= document.createElement("li")
      document.getElementById("breakfast").appendChild(li);
      document.getElementById("breakfast").getElementsByTagName("li")[i].innerHTML='<div class="aui-car-box-list-item"><div class="aui-car-box-list-img"><a href=" #"><img src="images/room/img-1.jpg" alt=""></a></div><div class="aui-car-box-list-text"><h4><a href=" #"></a></h4><div class="aui-car-box-list-text-brief"><span></span><span></span><span></span></div><div class="aui-car-box-list-text-price"><div class="aui-car-box-list-text-pri"> ￥<b class="price"></b></div><div class="aui-car-box-list-text-arithmetic"><a href="javascript:;" class="minus">-</a><span class="num">0</span><a href="javascript:;" class="plus">+</a></div></div></div></div><div class="aui-dri"></div>'
      document.getElementById("breakfast").getElementsByClassName("price")[i].innerHTML=myObj.data[i].foodUnitPrice
      document.getElementById("breakfast").getElementsByTagName("li")[i].getElementsByTagName("a")[1].innerHTML=myObj.data[i].foodName
      document.getElementById("breakfast").getElementsByTagName("li")[i].getElementsByTagName("img")[0].src="http://101.132.135.179:8080"+myObj.data[i].restaurantPicture
    }
    
    
    for(i=0;i<6;i++){
      let li= document.createElement("li")
      let a=i+6
      document.getElementById("laugh").appendChild(li);
      document.getElementById("laugh").getElementsByTagName("li")[i].innerHTML='<div class="aui-car-box-list-item"><div class="aui-car-box-list-img"><a href=" #"><img src="images/room/img-1.jpg" alt=""></a></div><div class="aui-car-box-list-text"><h4><a href=" #"></a></h4><div class="aui-car-box-list-text-brief"><span></span><span></span><span></span></div><div class="aui-car-box-list-text-price"><div class="aui-car-box-list-text-pri"> ￥<b class="price"></b></div><div class="aui-car-box-list-text-arithmetic"><a href="javascript:;" class="minus">-</a><span class="num">0</span><a href="javascript:;" class="plus">+</a></div></div></div></div><div class="aui-dri"></div>'
      document.getElementById("laugh").getElementsByClassName("price")[i].innerHTML=myObj.data[a].foodUnitPrice
      document.getElementById("laugh").getElementsByTagName("li")[i].getElementsByTagName("a")[1].innerHTML=myObj.data[a].foodName
      document.getElementById("laugh").getElementsByTagName("li")[i].getElementsByTagName("img")[0].src="http://101.132.135.179:8080"+myObj.data[a].restaurantPicture
    }
    
    
    
    
    for(i=0;i<6;i++){
      let li= document.createElement("li")
      let a=i+12
      document.getElementById("dinner").appendChild(li);
      document.getElementById("dinner").getElementsByTagName("li")[i].innerHTML='<div class="aui-car-box-list-item"><div class="aui-car-box-list-img"><a href=" #"><img src="images/room/img-1.jpg" alt=""></a></div><div class="aui-car-box-list-text"><h4><a href=" #"></a></h4><div class="aui-car-box-list-text-brief"><span></span><span></span><span></span></div><div class="aui-car-box-list-text-price"><div class="aui-car-box-list-text-pri"> ￥<b class="price"></b></div><div class="aui-car-box-list-text-arithmetic"><a href="javascript:;" class="minus">-</a><span class="num">0</span><a href="javascript:;" class="plus">+</a></div></div></div></div><div class="aui-dri"></div>'
      document.getElementById("dinner").getElementsByClassName("price")[i].innerHTML=myObj.data[a].foodUnitPrice
      document.getElementById("dinner").getElementsByTagName("li")[i].getElementsByTagName("a")[1].innerHTML=myObj.data[a].foodName
      document.getElementById("dinner").getElementsByTagName("li")[i].getElementsByTagName("img")[0].src="http://101.132.135.179:8080"+myObj.data[a].restaurantPicture
    }
    
    
    
    
    for(i=0;i<6;i++){
      let li= document.createElement("li")
      let a=i+18
      document.getElementById("water").appendChild(li);
      document.getElementById("water").getElementsByTagName("li")[i].innerHTML='<div class="aui-car-box-list-item"><div class="aui-car-box-list-img"><a href=" #"><img src="images/room/img-1.jpg" alt=""></a></div><div class="aui-car-box-list-text"><h4><a href=" #"></a></h4><div class="aui-car-box-list-text-brief"><span></span><span></span><span></span></div><div class="aui-car-box-list-text-price"><div class="aui-car-box-list-text-pri"> ￥<b class="price"></b></div><div class="aui-car-box-list-text-arithmetic"><a href="javascript:;" class="minus">-</a><span class="num">0</span><a href="javascript:;" class="plus">+</a></div></div></div></div><div class="aui-dri"></div>'
      document.getElementById("water").getElementsByClassName("price")[i].innerHTML=myObj.data[a].foodUnitPrice
      document.getElementById("water").getElementsByTagName("li")[i].getElementsByTagName("a")[1].innerHTML=myObj.data[a].foodName
      document.getElementById("water").getElementsByTagName("li")[i].getElementsByTagName("img")[0].src="http://101.132.135.179:8080"+myObj.data[a].restaurantPicture
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
        var texta,textb,all1,all2,all3,all4;
        
        
      function TotalPrice() {
            all1=0;
            all2=0;
            all3=0;
            all4=0;
          for(i=0;i<6;i++){
            texta=document.getElementById("breakfast").getElementsByClassName("num")[i].innerHTML;
            all1=all1+texta*myObj.data[i].foodUnitPrice
          }
         i
          for(i=0;i<6;i++){
            let a=i+6
            textb=document.getElementById("laugh").getElementsByClassName("num")[i].innerHTML;
            all2=all2+textb*myObj.data[a].foodUnitPrice
          }
          for(i=0;i<6;i++){
            let a=i+12
            textb=document.getElementById("dinner").getElementsByClassName("num")[i].innerHTML;
            all3=all3+textb*myObj.data[a].foodUnitPrice
          }for(i=0;i<6;i++){
            let a=i+18
            textb=document.getElementById("water").getElementsByClassName("num")[i].innerHTML;
            all4=all4+textb*myObj.data[a].foodUnitPrice
          }
    
          document.getElementById('AllTotal').innerHTML=(all1+all2+all3+all4).toFixed(2)
           
      }
    });
    
  }
};
xhttp.open("POST","http://101.132.135.179:8088/hotel/select/getRestaurantList?page=1&limit=24", true);
xhttp.send();








 






