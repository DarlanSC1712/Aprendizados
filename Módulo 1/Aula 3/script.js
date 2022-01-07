//função entrar

function entrar(){
 var area = document.getElementById('area');
 var texto = prompt('Digite seu nome');

 if(texto == '' || texto == null){
     alert("Você não digitou nada, digite seu nome novamente");
     area.innerHTML = "Bem vindo... (Novamente)";
 }else{
     area.innerHTML = "Bem vindo..." + " " + texto;
 }
}

function entrar2(nome){

area2 = document.getElementById ('area')

var area = document.getElementById('area2');
var texto = prompt('Digite seu sobrenome');
area.innerHTML = nome + " " + texto;

}

function entrar3(nome, sobrenome){

area3 = document.getElementById('area')

var area = document.getElementById('area3')
var texto = prompt("Digite sua idade")
area.innerHTML = nome + ' ' + texto;

}