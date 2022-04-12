const logini=document.getElementById("logini");
const logOUT=document.getElementById("logOUT");


$(document).ready(function(){
    $("#login").click(function(){
      $(".nav-area-1").toggle("slow");
    });
  });


function logout(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("emri");
    $(document).ready(function() {
        $("#logOUT").hide();
        $("#users").hide();
        $("#lectures").hide();
        $("#signup").show();
        $("#login").show();
        $("#stud").hide();
        $("#addLecture").hide();
    });
}

function loginn(){
  var dB=openDatabase("databaz","1.0","databaz",65535); 
  let ugjet=false;
  $(document).ready(function(){
      var username=$("#username").val();
      var passwordi=$("#password").val();
      dB.transaction(function(transaction){
          var sql="SELECT * FROM userat";
          transaction.executeSql(sql,undefined,function(transaction,result){
              if(result.rows.length){
                  for(var i=0;i<result.rows.length;i++){
                      var row=result.rows.item(i);
                      var name=row.Name;
                      var pass=row.Password;
                      var surname=row.Surname;
                      if(name===username)
                      {
                          ugjet=true;
                          if(pass===passwordi){
                              alert("You logged in successfully");
                              sessionStorage.setItem("emri",name);
                              sessionStorage.setItem("mbiemri",surname);
                              window.location.href = "http://localhost/diploma1/site/index.html";
                              break;
                          }
                          else
                          {
                              alert("Wrong password");
                              break;
                          }
                      }
                  }
                  if(ugjet===false){
                      alert("User doesn't exist");
                  }
              }
              else
              {
                  alert("Database is empty.");
              }
          },function(transaction,err){
              alert("Database doesn't exist.");
          });
      });
  });
}


logini.addEventListener('click',loginn);
logOUT.addEventListener('click', logout);






