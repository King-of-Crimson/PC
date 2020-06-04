/*
 * @Author: your name
 * @Date: 2020-05-21 09:52:49
 * @LastEditTime: 2020-05-27 14:20:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \酒店前端页面\js\new.js
 */ 
var myobj={
    "room":[
        {
            "img":"images/room/img-1.jpg",
            "roomname":"商务房",
            "money":"￥1230 /天",
         },
         {
            "img":"images/room/img-1.jpg",
            "roomname":"标准房",
            "money":"￥660 /天",
         },
         {
            "img":"images/room/img-1.jpg",
            "roomname":"经济房",
            "money":"￥900 /天",
         },
],
    "news":[
        {
            "date":"3月21日",
            "name":"NEW",
            "img":"images/restaurants/1-3.jpg",
        },
        {
            "date":"3月8日",
            "name":"NEW",
            "img":"images/restaurants/2-4.jpg",
        },
        {
            "date":"4月16日",
            "name":"NEW",
            "img":"images/restaurants/2-6.jpg",
        },
        
    ]
    
}
var row1= document.getElementById("row-1")
var row2= document.getElementById("row-2")
for(i=0;i<3;i++){
    row1.getElementsByTagName("img")[i].src=myobj.room[i].img;

    row1.getElementsByTagName("h2")[i].getElementsByTagName("a")[0].innerHTML=myobj.room[i].roomname;
   
    row1.getElementsByClassName('amout')[i].innerHTML=myobj.room[i].money;
}
for(i=0;i<3;i++){
    row2.getElementsByTagName("img")[i].src=myobj.news[i].img;
    row2.getElementsByTagName("h2")[i].getElementsByTagName("a")[0].innerHTML=myobj.news[i].name;
    row2.getElementsByClassName('date')[i].innerHTML=myobj.news[i].date;
}

var start;
var end;
var srcc = window.location;   //得到地址栏连接
srcc = srcc.toString()  //转换成string类型，可以省略
start = srcc.indexOf("?");   //返回"?"在字串中第一次出现的位置
end = srcc.length;  //字串的长度
var user= srcc.substring(start+1,end) 
 if(start=="-1"){
 }{
    for(i=0;i<3;i++){
     
        document.getElementsByClassName("accomd-modations-room")[i].getElementsByTagName("a")[0].href="room.html"
       
    }
 }



