const logOUT=document.getElementById("logOUT");

$(document).ready(function(){
    $("#login").click(function(){
      $(".nav-area-1").toggle("slow");
    });
  });


  gjejLeksion();
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


function gjejLeksion(){
  var dB=openDatabase("databaz","1.0","databaz",65535); 
  $(document).ready(function(){
      dB.transaction(function(transaction){
          var sql="SELECT * FROM leksionet";
          transaction.executeSql(sql,undefined,function(transaction,result){
              if(result.rows.length){
                  for(var i=0;i<result.rows.length;i++){
                      var row=result.rows.item(i);
                      var title=row.Title;
                      var content=row.Content;
                      var foto=row.Photo;
                      var file=row.Pdf;
                      
                      var divi=document.createElement('div');
                      divi.setAttribute('class', 'katror');
                      var img=document.createElement('img');
                      img.setAttribute('src', foto);
                      img.setAttribute('class', 'fotoLeksion');
                      divi.appendChild(img);
                        
                      var titull=document.createElement('a');
                      titull.innerHTML=title;
                      titull.setAttribute('class', 'titullLeksion');
                      titull.setAttribute('href',file);
                      divi.appendChild(titull);
                        
                      var kontenti=document.createElement('p');
                      kontenti.innerHTML=content;
                      kontenti.setAttribute('class', 'contentLeksion');
                      divi.appendChild(kontenti);
                      document.getElementById("leksionet").appendChild(divi);   
                    }
                  }       
              else
              {
                  alert("Nuk ka leksione te ruajtura ne databaze.");
              }
          },function(transaction,err){
              alert("Database doesn't exist.");
          });
      });
  });
}


function shtoKoment(){
    let komenti=document.getElementById("teksti").value;
    let username=sessionStorage.getItem("emri");
    let surname=sessionStorage.getItem("mbiemri");
    var divi=document.createElement('div');
    divi.setAttribute('class', 'komentiPersonal');
    
    var paragrafi=document.createElement('p');
    paragrafi.setAttribute('class', 'paragrafiKomentit');
    paragrafi.innerHTML=komenti;
    divi.appendChild(paragrafi);

    var spani=document.createElement('span');
    spani.setAttribute('class','emerMbiemer');
    var d = new Date();
    var n = d.toTimeString();
    let stringa="by "+username+" "+surname+", "+n;
    spani.innerHTML=stringa;
    divi.appendChild(spani);

    document.getElementById("komentettt").appendChild(divi);

}

$("#submiti").click(function(){
    shtoKoment();
})

