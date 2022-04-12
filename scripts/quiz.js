const shfaqTab=document.getElementById("shfaqTab");
const logOUT=document.getElementById("logOUT");

$(document).ready(function(){
    $("#login").click(function(){
      $(".nav-area-1").toggle("slow");
    });
  });


document.getElementById("pyetja").innerHTML=localStorage.getItem("pyetje"); 
document.getElementById("alt1").innerHTML=localStorage.getItem("alter1");
document.getElementById("alt2").innerHTML=localStorage.getItem("alter2");
document.getElementById("alt3").innerHTML=localStorage.getItem("alter3");
document.getElementById("alt4").innerHTML=localStorage.getItem("alter4");

document.getElementById("altr1").value=localStorage.getItem("alter1");
document.getElementById("altr2").value=localStorage.getItem("alter2");
document.getElementById("altr3").value=localStorage.getItem("alter3");
document.getElementById("altr4").value=localStorage.getItem("alter4");


$(document).ready(function(){
    $("#quizi").click(function(){
        let correctAns=localStorage.getItem("correct");
        let answer=document.quiz.question1.value;
        if(answer===correctAns){
            alert("Good job! That was the right choise!");
            sessionStorage.setItem("piket",10);
            addPoints();
        }
        else{
            alert("I am sorry, you answered wrong!");
        }
    });
});


var dB=openDatabase("databaz","1.0","databaz",65535); 

function addPoints(){
    var dB=openDatabase("databaz","1.0","databaz",65535); 
    let temp=sessionStorage.getItem("username");
    if(temp!=null){
        alert("Ju nuk mund te plotesoni quiz-in sepse jeni pedagog.");
        return;
    }
var name=String(sessionStorage.getItem("emri"));
var surname=String(sessionStorage.getItem("mbiemri"));
var points=sessionStorage.getItem("piket");

    dB.transaction(function(transaction){
        var sql="SELECT * FROM piket";
        let ugjet=false;
        transaction.executeSql(sql,undefined,function(transaction,result){
            if(result.rows.length){
                for(var i=0;i<result.rows.length;i++){
                    var row=result.rows.item(i);
                    var emer=row.Name;
                    var mbiemer=row.Surname;
                    if(name==emer && mbiemer==surname){
                        var sql2="UPDATE piket SET Scores=Scores+"+points+" WHERE Name="+"'"+name+"'";
                        ugjet=true;
                        transaction.executeSql(sql2,undefined,function(){
                            alert("Piket u shtuan me sukses per userin ekzistent.");
                        },function(transaction,err){
                            alert(err.message); 
                        }); 
                        break;                          
                        }
                }
                if(ugjet==false)
                {
                    var sql2="INSERT INTO piket(Name,Surname,Scores) VALUES(?,?,?)";
                    transaction.executeSql(sql2,[name,surname,points],function(){
                        alert("Piket u shtuan me sukses per userin e ri nderkohe qe tabela ekziston.");
                    },function(transaction,err){
                        alert(err.message);
                    });
                }
            }
            else
            {
                var sql2="INSERT INTO piket(Name,Surname,Scores) VALUES(?,?,?)";
                transaction.executeSql(sql2,[name,surname,points],function(){
                    alert("Piket u shtuan me sukses per userin e ri nderkohe qe tabela eshte bosh.");
                },function(transaction,err){
                    alert(err.message);
                });
                }
            },function(transaction,err){
                alert(err.message);
        });
    });
}

check();

if(sessionStorage.getItem("username")!=null){
    checkSession();
}
if(sessionStorage.getItem("emri")!=null){
  checkSessionn();
}

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
        });
    }
}

function checkSessionn()
{
  let x=sessionStorage.getItem("emri");
  console.log(x);  
  if (x!=null)
  {
      $(document).ready(function(){
          $("#users").hide();
          $("#logOUT").show();
          $("#lectures").show();
          $("#signup").hide();
          $("#login").hide();
          $("#addLecture").hide();
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

function logoutt(){
  sessionStorage.removeItem("emri");
  sessionStorage.removeItem("mbiemri");
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

function check(){
  if(sessionStorage.getItem("username")!=null){
      logOUT.addEventListener('click',logout);
  }
  else if(sessionStorage.getItem("emri")!=null){
      logOUT.addEventListener('click',logoutt);
  }
}


shfaqTab.addEventListener('click',showTABLE);
