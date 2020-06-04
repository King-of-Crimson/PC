/*
 * @Author: your name
 * @Date: 2020-05-21 13:27:38
 * @LastEditTime: 2020-05-21 15:18:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \酒店前端页面\js\about.js
 */ 
var myobj={
    "number":[
        {"NO":"1000"},
        {"NO":"632"},
        {"NO":"1024"},
        {"NO":"256"},   
    ]
}

for(i=0;i<4;i++){
    document.getElementsByClassName("count")[i].innerHTML=myobj.number[i].NO
}