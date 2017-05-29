var config = {
    apiKey: "AIzaSyCDIoL6iirJQ-LisIaYCIoZHZqMQMA1PPI",
    authDomain: "project-hospital.firebaseapp.com",
    databaseURL: "https://project-hospital.firebaseio.com",
    projectId: "project-hospital",
    storageBucket: "project-hospital.appspot.com",
    messagingSenderId: "719903397378"
  };
  firebase.initializeApp(config);

var para1,t1,para2,t2,para3,t3,para4,t4;
var iDiv;
var i;
var k;
var dividee;
var patients;
var keys;
var patientID;
var name;
var call;
var weight;
var database = firebase.database();
var ref= database.ref('hospital');
var patimg1 = document.createElement("IMG")
patimg1.setAttribute("src", "avatar.png");
patimg1.className = 'patpic';
var patimg2 = document.createElement("IMG")
patimg2.setAttribute("src", "avatar.png");
patimg2.className = 'patpic';
var patimg3 = document.createElement("IMG")
patimg3.setAttribute("src", "avatar.png");
patimg3.className = 'patpic';
var patimg4 = document.createElement("IMG")
patimg4.setAttribute("src", "avatar.png");
patimg4.className = 'patpic';

function showdata(){

ref.on('value',getData,errData);

function getData(data){
  patients = data.val();
  keys = Object.keys(patients);
  console.log(keys);

    k=keys[0];
    patientID = patients[k].patientID;
    name = patients[k].patientName;
    weight = patients[k].weightRead;
    call = patients[k].callStatus;
    //$('#pat1').empty();
    document.getElementById('pat1').innerHTML = "";

    para1 = document.createElement("P");
    t1 = document.createTextNode(' patientID : ' + patientID);
    para1.appendChild(t1);
    para2 = document.createElement("P");
    t2 = document.createTextNode(' patient name : ' + name);
    para2.appendChild(t2);
    para3 = document.createElement("P");
    t3 = document.createTextNode(' Weight status : ' + weight);
    para3.appendChild(t3);
    para4 = document.createElement("P");
    t4 = document.createTextNode(' Call Status : ' +call);
    para4.appendChild(t4);
    iDiv = document.getElementById('pat1');
    iDiv.appendChild(patimg1);
    iDiv.appendChild(para1);
    iDiv.appendChild(para2);
    iDiv.appendChild(para4);
    iDiv.appendChild(para3);


    if(call == "Yes")
    {
      dividee = document.getElementById("pat1");
      dividee.style.backgroundColor = '#FF7043';
      dividee.style.color = 'white';
    }
    if(call == "No")
    {
      dividee = document.getElementById("pat1");
      dividee.style.backgroundColor = '#ECEFF1';
      dividee.style.color = 'black';
    }

    /* ============== */

    k=keys[1];
    patientID = patients[k].patientID;
    name = patients[k].patientName;
    weight = patients[k].weightRead;
    call = patients[k].callStatus;

  //  $('#pat2').empty();
    document.getElementById('pat2').innerHTML = "";
    para1 = document.createElement("P");
    t1 = document.createTextNode(' patientID : ' + patientID);
    para1.appendChild(t1);
    para2 = document.createElement("P");
    t2 = document.createTextNode(' patient name : ' + name);
    para2.appendChild(t2);
    para3 = document.createElement("P");
    t3 = document.createTextNode(' Weight status : ' + weight);
    para3.appendChild(t3);
    para4 = document.createElement("P");
    t4 = document.createTextNode(' Call Status : ' +call);
    para4.appendChild(t4);
    iDiv = document.getElementById('pat2');
    iDiv.appendChild(patimg2);
    iDiv.appendChild(para1);
    iDiv.appendChild(para2);
    iDiv.appendChild(para4);
    iDiv.appendChild(para3);

    if(call == "Yes")
    {
      dividee = document.getElementById("pat2");
      dividee.style.backgroundColor = '#FF7043';
      dividee.style.color = 'white';
    }
    if(call == "No")
    {
      dividee = document.getElementById("pat2");
      dividee.style.backgroundColor = '#ECEFF1';
      dividee.style.color = 'black';
    }


    /* =============== */

    k=keys[2];
    patientID = patients[k].patientID;
    name = patients[k].patientName;
    weight = patients[k].weightRead;
    call = patients[k].callStatus;

    //$('#pat3').empty();

    document.getElementById('pat3').innerHTML = "";
    para1 = document.createElement("P");
    t1 = document.createTextNode(' patientID : ' + patientID);
    para1.appendChild(t1);
    para2 = document.createElement("P");
    t2 = document.createTextNode(' patient name : ' + name);
    para2.appendChild(t2);
    para3 = document.createElement("P");
    t3 = document.createTextNode(' Weight status : ' + weight);
    para3.appendChild(t3);
    para4 = document.createElement("P");
    t4 = document.createTextNode(' Call Status : ' +call);
    para4.appendChild(t4);
    iDiv = document.getElementById('pat3');
    iDiv.appendChild(patimg3);
    iDiv.appendChild(para1);
    iDiv.appendChild(para2);
    iDiv.appendChild(para4);
    iDiv.appendChild(para3);

    if(call == "Yes")
    {
      dividee = document.getElementById("pat3");
      dividee.style.backgroundColor = '#FF7043';
      dividee.style.color = 'white';
    }
    if(call == "No")
    {
      dividee = document.getElementById("pat3");
      dividee.style.backgroundColor = '#ECEFF1';
      dividee.style.color = 'black';
    }


    /* ================ */

    k=keys[3];
    patientID = patients[k].patientID;
    name = patients[k].patientName;
    weight = patients[k].weightRead;
    call = patients[k].callStatus;

    //$('#pat4').empty();
document.getElementById('pat4').innerHTML = "";
    para1 = document.createElement("P");
    t1 = document.createTextNode(' patientID : ' + patientID);
    para1.appendChild(t1);
    para2 = document.createElement("P");
    t2 = document.createTextNode(' patient name : ' + name);
    para2.appendChild(t2);
    para3 = document.createElement("P");
    t3 = document.createTextNode(' Weight status : ' + weight);
    para3.appendChild(t3);
    para4 = document.createElement("P");
    t4 = document.createTextNode(' Call Status : ' +call);
    para4.appendChild(t4);
    iDiv = document.getElementById('pat4');
    iDiv.appendChild(patimg4);
    iDiv.appendChild(para1);
    iDiv.appendChild(para2);
    iDiv.appendChild(para4);
    iDiv.appendChild(para3);

    if(call == "Yes")
    {
      dividee = document.getElementById("pat4");
      dividee.style.backgroundColor = '#FF7043';
      dividee.style.color = 'white';
    }
    if(call == "No")
    {
      dividee = document.getElementById("pat4");
      dividee.style.backgroundColor = '#ECEFF1';
      dividee.style.color = 'black';
    }



}
function errData(data){
  console.log('Error!');
  console.log(err);
}
//function showdata(){
/*
var para = document.createElement("P");
var t = document.createTextNode("This is a paragraph");
para.appendChild(t);
var iDiv = document.createElement('div');
iDiv.id = 'div1';
iDiv.className = 'div1';
iDiv.appendChild(para);
document.body.appendChild(iDiv);
*/
}
