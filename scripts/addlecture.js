const logOUT=document.getElementById("logOUT");
const add=document.getElementById("add");

$(document).ready(function(){
    $("#login").click(function(){
      $(".nav-area-1").toggle("slow");
    });
  });


  if(sessionStorage.getItem("username")!=null){
      checkSession();
  }

  function checkSession()
  {
      let x=sessionStorage.getItem("username");
      if (x!=null)
      {
          $(document).ready(function(){
           $("#users").show();
           $("#logOUT").show();
           $("#lectures").show();
           $("#signup").hide();
           $("#login").hide();
           $("#addLecture").show();
          });
      }
  }


  function logout(){
      sessionStorage.removeItem("username");
      $(document).ready(function() {
          $("#logOUT").hide();
          $("#users").hide();
          $("#lectures").hide();
          $("#signup").show();
          $("#login").show();
          $("#addLecture").hide();
      });
      window.location.href="../index.html";
  }

  function shtoLeksion(){
    var dB=openDatabase("databaz","1.0","databaz",65535); 
   
        var title=$("#title").val();
        console.log(title);
        var content=$("#content").val();
        console.log(content);
        var foto = $("#foto").val();
        console.log(foto);
        var file=$("#file").val();
        console.log(file);
 
        dB.transaction(function(transaction){
                
            var sql="INSERT INTO leksionet(Title,Content,Photo,Pdf) VALUES(?,?,?,?);";
            transaction.executeSql(sql,[title,content,foto,file],function(){
                alert("Leksioni u shtua me sukses");
                window.location.href="lectures.html";
            },function(transaction,err){
                    alert(err.message);
            });
        });
    }
  
logOUT.addEventListener('click',logout);
add.addEventListener('click',shtoLeksion);









  