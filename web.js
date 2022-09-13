function checkEmail(){
    var email = document.getElementById("email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email.value);
}
function sendForm(){
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(name == ""){
        name = "";
        document.getElementById("fullname-error").innerHTML="Vui lòng nhập đầy đủ họ tên" 
    }else if(name.trim().length <= 2 ){
        name = "";
        document.getElementById("fullname-error").innerHTML="Họ tên phải trên 2 ký tự"
    }else{
        document.getElementById("fullname-error").innerHTML= "" //Xoá error đi khi đã nhập đầy đủ họ tên
    }

    if(email == ""){
        email = "";
        document.getElementById("email-error").innerHTML="Vui lòng nhập đầy đủ email" 
    }else if(!checkEmail(email)){
        email = "";
        document.getElementById("email-error").innerHTML="Email của bạn không hợp lệ"
    }else{
        document.getElementById("email-error").innerHTML= "" 
    }
    
    if(phone == ""){
        phone = "";
        document.getElementById("phone-error").innerHTML="Vui lòng nhập đầy đủ SĐT"
    }else if(isNaN(phone)){
        phone = "";
        document.getElementById("phone-error").innerHTML = "Số điện thoại không hợp lệ"
    }else{
        document.getElementById("phone-error").innerHTML= ""
    }
}
function resetForm()
    { var y = document.getElementsByTagName("form"); 
    document.getElementsByTagName("form")[0].reset(); 
}