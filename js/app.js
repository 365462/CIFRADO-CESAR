function cipher(){
  var string=prompt("INGRESE UNA FRASE");
  var alphaExp = /^[a-zA-Z' '/s]+$/;

  while(string==='' || !string.match(alphaExp)){
    alert("LA FRASE NO PUEDE ESTAR VACIA O CONTENER NUMEROS");
    string=prompt("INGRESE UNA FRASE");
  }

  var capitalString = string.toUpperCase();
  var newString = '';

  for(var i=0; i<capitalString.length; i++){
    var newPosition = (((capitalString.charCodeAt(i)-65+33)%26)+65);
    var cipherLetter = String.fromCharCode(newPosition);
    (capitalString[i]===' ')? newString+=' ':newString+=cipherLetter;
  }
    return newString;
}

function descipher(string){
   var oldString='';

   for(var j=0; j<string.length; j++)
   {
     var position = (((string.charCodeAt(j)+65-33)%26)+65);
     var descipherLetter =String.fromCharCode(position);
     (string[j]===' ')? oldString+=' ':oldString+=descipherLetter;
   }
   alert("TU NOMBRE CIFRADO ES:"+" "+string)
   alert("TU NOMBRE DECIFRADO ES:"+" "+oldString)
}

descipher(cipher());
