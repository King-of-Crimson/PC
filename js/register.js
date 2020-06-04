/*
 * @Author: your name
 * @Date: 2020-05-25 09:46:11
 * @LastEditTime: 2020-05-29 15:26:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\register.js
 */ 


        function send() {
            let pas1=document.getElementById("password1").value;
            let pas2=document.getElementById("password2").value;
            let idcard=document.getElementById("idcard").value;
            var phone=document.getElementById("phone").value;
            let name=document.getElementById("name").innerHTML
            var url =  "http://101.132.135.179:8088/hotel/users/insertUser?username="+phone+"&password="+pas1+"&idcardNumber="+idcard+"&truename="+name; // 接收上传文件的后台地址
    
   
         
    
            xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
            xhr.withCredentials = true;
    
            xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myObj = (this.responseText);
            myObj = eval("("+myObj+")");
      
            console.log(myObj);
                if(myObj.code==0){
                    alert("注册成功")
                    setTimeout(() => {
                        window.location.href="hunmanphoti.html?"+phone
                       }, 1000);
                }
      
        
          }
        };
        xhr.open("post", url, true);
        xhr.send();
    }



    var access_token = "24.d5f9d598e8de11e34517d27a09330156.2592000.1593141615.282335-20084529";
    // 监听图片选择事件
    function getImg (event) {
        var imageBase = "";
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (e) {
            imageBase = e.target.result.replace("data:image/jpeg;base64,","");
            $("#showImg").prop("src", "data:image/jpeg;base64," + imageBase);
            $.ajax({
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                type: "post",
                url: "https://aip.baidubce.com/rest/2.0/ocr/v1/idcard",
                async: true,
                data: {
                    access_token: access_token,
                    id_card_side: "front",
                    image: imageBase
                },
                dataType: "json",
                timeout: 30000,
                success: function (data) {
                    if(data.idcard_number_type==-1){
                        alert("请上传身份证照片")
                    }
                    else{
                        console.log(data)
                        document.getElementById("idcard").value=data.words_result.公民身份号码.words;
                        if(data.words_result.性别.words="男")
                        document.getElementById("name").innerHTML=data.words_result.姓名.words+"先生"
                        else{
                            document.getElementById("name").innerHTML=data.words_result.姓名.words+"女士"
                        }
                    }
                    
                },
                error: function (xhr) {
                    console.log("请求解析失败");
                }
            });
        }
    }
 
      
