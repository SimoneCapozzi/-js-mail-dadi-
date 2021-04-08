//prompt chiedere email
var email = prompt ('Salve, inserisci la tua email');

var arrayemail = ["mario.rossi@libero.it",
"gennaro.verde@gmail.com",
"franco.giallo@libero.it",
"luca.blu@gmail.com"];

var email_to_found = false;

for(var i = 0; i<arrayemail.length; i++){
  var account_email = arrayemail[i];
  if(account_email === email){
    email_to_found = true;
    break;
  }
}

if(email_to_found){
  document.getElementById("msg-email").innerHTML = "L'email inserita " + email 
  + " è corretta";
}else{
  alert("email errata");
}