const log_teach = document.getElementById("log_teach");
const logOUT=document.getElementById("logOUT");


$(document).ready(function(){
    $("#login").click(function(){
      $(".nav-area-1").toggle("slow");
    });
  });


function logohu()
{
    let name = document.getElementById('namme').value;
    let pass = document.getElementById('passwordd').value;  
   
    if (name === 'Indrit')
    {
        if (pass === 'telekom')
        {
            alert("You logged in successfully");
            sessionStorage.setItem("username",name);
            window.location.href = "http://localhost/diploma1/site/index.html";
        }
        else
        {
            alert('Wrong password');
        }
    }
    else
    {
        alert('Incorrect username or password');
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
}

log_teach.addEventListener('click',logohu);
logOUT.addEventListener('click', logout);


