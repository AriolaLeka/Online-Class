const logOUT=document.getElementById("logOUT");

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
         $(".container1").show();
         $(".container2").hide();
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
        $(".container1").hide();
        $(".container2").hide();
    });
    window.location.href="index.html";
}

function logoutt(){
    sessionStorage.removeItem("emri");
    $(document).ready(function() {
        $("#logOUT").hide();
        $("#users").hide();
        $("#lectures").hide();
        $("#signup").show();
        $("#login").show();
        $("#addLecture").hide();
        $(".container1").hide();
        $(".container2").hide();
    });
    window.location.href="index.html";
}

function check(){
    if(sessionStorage.getItem("username")!=null){
        logOUT.addEventListener('click',logout);
    }
    else if(sessionStorage.getItem("emri")!=null){
        logOUT.addEventListener('click',logoutt);
    }
}

$(document).ready(function(){
    $("#login").click(function(){
      $(".nav-area-1").toggle("slow");
    });
});

$(document).ready(function(){
    $("#startQuiz").click(function(){
        window.location.href="views/quiz.html";
    });
});

$(document).ready(function(){
    $("#createQuiz").click(function(){
        window.location.href="views/add_quiz.html";
    });
});


//js per butonin scroll up

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};



