//il mio lancio
var mio_lancio = Math.floor(Math.random() * 10) + 1;
console.log(mio_lancio);

//lancio pc
var lancio_pc = Math.floor(Math.random() * 10) + 1;
console.log(lancio_pc);

if(mio_lancio < lancio_pc){
  document.getElementById("msg-lancio").innerHTML = mio_lancio+'<br>'+lancio_pc + '<br>Hai Perso';
}else if(mio_lancio == lancio_pc){
  document.getElementById("msg-lancio").innerHTML = mio_lancio+'<br>'+lancio_pc + '<br>Hai Pareggiato';
}else{
  document.getElementById("msg-lancio").innerHTML = mio_lancio+'<br>'+lancio_pc + '<br>Hai Vinto';
}