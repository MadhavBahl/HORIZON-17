$(document).ready(function(){
    $("#nav").on({
      mouseenter:function(){
        $("#nav").css("opacity",1);
      },
      mouseleave:function(){
      $("#nav").css("opacity",0.65);
      }
    });
    $(document).scroll(function(){
      $("#nav").css("opacity",0.8);
    });
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});

var config = {
   apiKey: "AIzaSyDxPdOUY8ca9BKMzdtvs4zvTHV08FVyq2o",
   authDomain: "login-page-firstfirebaselogin.firebaseapp.com",
   databaseURL: "https://login-page-firstfirebaselogin.firebaseio.com",
   projectId: "login-page-firstfirebaselogin",
   storageBucket: "login-page-firstfirebaselogin.appspot.com",
   messagingSenderId: "1060675366907"
 };
 firebase.initializeApp(config);
var database;
var ref;
var data;
var name;
var pword;

function submitid(){
  name=document.getElementById("usrname").value;
  pword=document.getElementById("psw").value;
  database = firebase.database();
  ref = database.ref('emailId');
  console.log(firebase);
  console.log(data);
  data={
    username : name,
    password : pword
  }
  ref.push(data,finished);
  function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
    var ydispl = document.getElementById("hideWhenComplete");
    ydispl.style.display = 'none';
    var zdispl = document.getElementById("showWhenComplete");
    zdispl.style.display = 'block';

  }
}
}
