function checkLogin(){
    var email = document.getElementById("emailadd").value;
    var pass = document.getElementById("password").value;
    if(email==""){
        alert("Vui lòng nhập email.");
    }else if(email.indexOf("@")==-1|| email.indexOf("gmail.com")==-1){
        alert("Địa chỉ email không hợp lệ! Vui lòng nhập lại.");
    }
    else if(email =="nguyenthedong8501@gmail.com"&&pass == "12345"){
        alert("Đăng nhập thành công.");
        open("main.html")
    }else if(pass==""){
        alert("Vui lòng nhập mật khẩu.");
    }else if(pass!="12345"){
        alert("Mật khẩu không chính xác! Vui lòng nhập lại.");
    }else
   {
        alert("Địa chỉ email không chính xác.");
    } 
}
function checkSignup(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var passconf = document.getElementById("passconf").value;
    if(email==""){
        alert("Vui lòng nhập email.");
    }else if(email.indexOf("@")==-1||email.indexOf("gmail.com")==-1){
        alert("Địa chỉ email không hợp lệ! Vui lòng nhập lại.");
    }else if(pass==""){
        alert("Vui lòng nhập mật khẩu.");
    }else  if(passconf==""){
        alert("Vui lòng xác nhận lại mật khẩu.");
    }else if(pass != passconf){
        alert("Xác nhận mật khẩu sai.");
    }else 
    alert("Đăng kí thành công! Đăng nhập ngay.");
    open("main.html")
}