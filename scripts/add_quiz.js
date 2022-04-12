const logOUT=document.getElementById("logOUT");
const shto=document.getElementById("shto");
/*let nr_question_str=prompt("Please enter the number of questions you want to ad to the quiz","3");
let nr_question=parseInt(nr_question_str);

if(isNaN(nr_question)){
    nr_question=3;
}
console.log(nr_question);


function shto(){

    my_form=document.createElement('FORM');
    my_form.name='forma';

    for(let i=0;i<nr_question;i++)
    {
        let pyetja=document.getElementById("pyetja").value;
        let alt1=document.getElementById("alt1").value;
        let alt2=document.getElementById("alt2").value;
        let alt3=document.getElementById("alt3").value;
        let alt4=document.getElementById("alt4").value;
        let altcorr=document.getElementById("altcorr").value;

        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("id", "emri");
        document.body.appendChild(x);
    }

    document.body.appendChild(my_form);
}*/


function add_quiz(){
        let pyetja=document.getElementById("pyetja").value;
        let alt1=document.getElementById("alt1").value;
        let alt2=document.getElementById("alt2").value;
        let alt3=document.getElementById("alt3").value;
        let alt4=document.getElementById("alt4").value;
        let altcorr=document.getElementById("altcorr").value;

        localStorage.setItem("pyetje",pyetja);
        localStorage.setItem("alter1",alt1);
        localStorage.setItem("alter2",alt2);
        localStorage.setItem("alter3",alt3);
        localStorage.setItem("alter4",alt4);
        localStorage.setItem("correct",altcorr);
        //localStorage.setItem("nrPyetjesh",nr_question);
        window.location.href = "http://localhost/diploma1/site/views/quiz.html";
}


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
          $("#addLecture").hide();
      });
      window.location.href="../index.html";
  }
  

logOUT.addEventListener('click',logout);
shto.addEventListener('click',add_quiz);





