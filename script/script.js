
function getValue() {
  var rgb_vermelho = document.querySelector("#rgb_vermelho");
  var rgb_verde = document.querySelector("#rgb_verde");
  var rgb_azul = document.querySelector("#rgb_azul");
  
  var fname1 = document.querySelector("#fname1");
  var fname2 = document.querySelector("#fname2");
  var fname3 = document.querySelector("#fname3");
  
  fname1.value = this.rgb_vermelho.value
  fname2.value = this.rgb_verde.value
  fname3.value = this.rgb_azul.value

  var idtext = document.querySelector("#idtext");

  idtext.style.backgroundColor = "rgb(" + fname1.value + "," + fname2.value + "," + fname3.value + ")";
    
  }