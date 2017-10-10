function cipher(){
  var string=prompt("INGRESE UNA FRASE");
  var newString = '';
  var capitalString = string.toUpperCase();

  if(capitalString==='')
    alert("LA FRASE NO PUEDE ESTAR VACIA");
  else{
        for(var i=0; i<capitalString.length; i++){
          if(parseInt(capitalString[i])%1===0){
            alert("LA FRASE NO PUEDE CONTENER NUMEROS");
            break;
          }
        else{
          var newPosition = (((capitalString.charCodeAt(i)-65+33)%26)+65);
          var cipherLetter = String.fromCharCode(newPosition);
          (capitalString[i]===' ')? newString+=' ':newString+=cipherLetter;
        }
    }
    return newString;
  }
}


function decipher(string){
   var oldString='';

   for(var j=0; j<string.length; j++)
   {
     var position = (((string.charCodeAt(j)+65-33)%26)+65);
     var decipherLetter =String.fromCharCode(position);
     (string[j]===' ')? oldString+=' ':oldString+=decipherLetter;
   }
   alert("TU NOMBRE CIFRADO ES: "+" "+string)
   alert("TU NOMBRE DECIFRADO ES: "+" "+oldString)
}

decipher(cipher());
