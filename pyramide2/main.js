
function designPyramid() {
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  var n = parseInt(document.getElementById("count").value);
  msg = n.toString();
  console.log("> "+n);

  if(n<=25){
    console.log("Voici la pyramide :");
  for (var i = 0; i < n; i++) {
    line = '';
    for (var j = 1; j <n-i; j++) {
      line = line + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      line = line + '#';
    

    }

   console.log(line);
  }

}
}
window.onload= function(){
document.getElementById("count").value='';
}
