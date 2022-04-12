const regjister=document.getElementById("regjister");

$(document).ready(function(){
    $("#login").click(function(){
      $(".nav-area-1").toggle("slow");
    });
  });

function AddUser(){
    var dB=openDatabase("databaz","1.0","databaz",65535); 
       
        var name=$("#name").val();
        var surname=$("#surname").val();
        var birthday = $("#birthdate").val();
        var emaili=$("#email").val();
        var phone=$("#cel").val();
        var pass=$("#password").val();
        if((emaili.search('@'))!=-1)
        {   
            dB.transaction(function(transaction){
                    
                var sql="INSERT INTO userat(Name,Surname,Birthday,Email,Phone,Password) VALUES(?,?,?,?,?,?);";
                transaction.executeSql(sql,[name,surname,birthday,emaili,phone,pass],function(){
                alert("Useri u shtua me sukses");
                    window.location.href="login_student.html";
                },function(transaction,err){
                    alert(err.message);
                });
            });
        }
        else
        {
            alert("Ju lutem sigurohuni qe te shkruani email-in sic duhet.");
        }
            
}

regjister.addEventListener('click',AddUser); 