/*
 * @Author: your name
 * @Date: 2020-05-25 22:47:11
 * @LastEditTime: 2020-05-27 21:32:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \酒店前端页面\js\res.js
 */ 
var srcc = window.location;   //得到地址栏连接
srcc = srcc.toString()  //转换成string类型，可以省略
var start = srcc.indexOf("?");   //返回"?"在字串中第一次出现的位置
var end = srcc.length;  //字串的长度
var user= srcc.substring(start+1,end) 
for(i=0;i<24;i++){
    document.getElementsByClassName("img")[i].getElementsByTagName("a")[0].href="car2.html?"+user
    
    document.getElementsByClassName("img")[i].getElementsByTagName("img")[0].style="height:200px"   
    
}