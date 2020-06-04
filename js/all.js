/*
 * @Author: your name
 * @Date: 2020-05-25 13:57:56
 * @LastEditTime: 2020-05-27 21:06:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \酒店前端页面\js\all.js
 */ 
var srcc = window.location;   //得到地址栏连接
srcc = srcc.toString()  //转换成string类型，可以省略
start = srcc.indexOf("?");   //返回"?"在字串中第一次出现的位置
end = srcc.length;  //字串的长度
var user= srcc.substring(start+1,end) 
 if(start=="-1"){
 }
 else{
    document.getElementById("login").innerHTML=srcc.substring(start+1,end)
    document.getElementById("login").href=""
    document.getElementById("register").innerHTML="退出登录"
    document.getElementById("register").href="index.html"
    document.getElementById("quit").innerHTML="取消客房"
    document.getElementById("quit").href="quit.html?"+user;
    var li= document.getElementsByClassName("menu")[0].getElementsByTagName("li")

    li[0].getElementsByTagName("a")[0].href="index.html?"+user
    li[1].getElementsByTagName("a")[0].href="about.html?"+user
    li[2].getElementsByTagName("a")[0].href="room.html?"+user
    li[3].getElementsByTagName("a")[0].href="restaurants.html?"+user
   
    li[4].getElementsByTagName("a")[0].href="contact.html?"+user
 }