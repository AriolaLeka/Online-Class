const logOUT=document.getElementById("logOUT");

$(document).ready(function(){
    $("#login").click(function(){
      $(".nav-area-1").toggle("slow");
    });
  });

  checkSession();
  showTable();
  showTABLE();

  $(document).ready(function(){
    $("#shfaqTab").click(function(){
        $("#Points").fadeIn(3000);
    });
  });

  $(document).ready(function(){
    $("#zhduk").click(function(){
        $("#Points").fadeOut("fast");
    });
  });
  
  function checkSession()
  {
      let x=sessionStorage.getItem("username");
      console.log(x);  
      if (x!=null)
      {
          $(document).ready(function(){
           $("#users").show();
           $("#logOUT").show();
           $("#lectures").show();
           $("#signup").hide();
           $("#login").hide();
           $("#addLecture").show();
           $(".container1").hide();
           $(".container2").show();
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

  function showTable(){
    var dB=openDatabase("databaz","1.0","databaz",65535); 
    $("#useratt").children().remove();
    $("#useratt").append('<tr> <th>Id</th> <th>Name</th> <th>Surname</th> <th>Birthday</th> <th>Email</th> <th>Phone</th> <th>Password</th>');
    dB.transaction(function(transaction){
        var sql="SELECT * FROM userat";
        transaction.executeSql(sql,undefined,function(transaction,result){
        if(result.rows.length){
            for(var i=0;i<result.rows.length;i++){
                var row=result.rows.item(i);
                var name=row.Name;
                var id=row.Id;
                var surname=row.Surname;
                var emaili=row.Email;
                var birthday=row.Birthday;
                var phone=row.Phone;
                var pass=row.Password;
                $("#useratt").append('<tr><td>'+id+'</td><td>'+name+'</td><td>'+surname+
                '</td><td>'+birthday+'</td><td>'+emaili+
                '</td><td>'+phone+'</td><td>'+pass+'</td></tr>');
            }
        }
        else{
            $("#useratt").append('<tr><td colspan="7" align="center">No user Found</td></tr>');
        }
        },function(transaction,err){
            alert('Fillimisht duhet te krijoni tabelen');
        });
    });
}

function showTABLE(){
    var dB=openDatabase("databaz","1.0","databaz",65535); 
    $("#tabelaPiket").children().remove();
    $("#tabelaPiket").append('<tr> <th>ID</th> <th>Name</th> <th>Surname</th> <th>Points</th> </tr>');
	dB.transaction(function(transaction){
		var sql="SELECT * FROM piket";
		transaction.executeSql(sql,undefined,function(transaction,result){
        if(result.rows.length){

            for(var i=0;i<result.rows.length;i++){
	            var row=result.rows.item(i);
                var name=row.Name;
	            var id=row.Id;
                var surname=row.Surname;
                var piket=row.Scores;
            $("#tabelaPiket").append('<tr><td>'+id+'</td><td>'+name+'</td><td>'+surname+
            '</td><td>'+piket+'</td></tr>');
            }
        }
        else{
	        $("#tabelaPiket").append('<tr><td colspan="4" align="center">No user Found</td></tr>');
        }


		},function(transaction,err){
			alert('No table found. Click on "Create Table" to create table now');
		});
	});
}
  
logOUT.addEventListener('click',logout);

