



  var name = "NAME: " + localStorage.getItem('name');
  var email = "EMAIL: " + localStorage.getItem('email');
  var amount = "AMOUNT: R" + localStorage.getItem('pay');


  document.getElementById('myP').innerHTML = name + '<br>' +email + '<br>' + amount;


 function payOnlineFunc() {
   document.getElementById('payOnline').style.display = "inline";
 }

function generateToken() {
  alert("Your special token number is "+Math.ceil(Math.random() * 1231212311)+ ". Please make sure you show this to the till keeper.");
}


function pr() {
  window.print();
}
