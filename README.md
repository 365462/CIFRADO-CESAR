# CIFRADO CESAR

### PSEUDO CODIGO FUNCION CIPHER:
###### creamos una funcion llamada cipher
function cipher()
###### ingresamos una frase por medio de un prompt la cual se almacenará en un string
  var string=prompt("INGRESE UNA FRASE");
###### El contenido del string pasara a mayusculas y se almacenara en la variable capitalString  
  var capitalString = string.toUpperCase();
###### Creamos una variable vacia llamda newString
  var newString = '';
###### Si capitalString no tiene ningun valor ingresado
  if(capitalString==='')
###### Saldra una ventana de alerta indicando la inexistencia de la frase
    alert("LA FRASE NO PUEDE ESTAR VACIA");
###### caso contrario
  else{
###### iniciaremos un bucle donde se creara la variable i con el valor de 0 hasta el i menor que la cantidad de caracteres que tiene el string (delimitamos el tamaño) y se recorre el string de 1 en 1
        for(var i=0; i<capitalString.length; i++){
###### Si capitalString dividida entre 1 da el valor de cero
          if(parseInt(capitalString[i])%1===0){
###### Saldra una ventana de alerta indicando que la frase no puede contenr numeros debido a que los caracteres no dejan residuo de 0, solo los numeros.
            alert("LA FRASE NO PUEDE CONTENER NUMEROS");
###### Para que no exista un bucle infinito terminamos abruptamente todo el proceso.
            break;
          }
###### Ademas
        else{
###### la posicion en i del string en mayusculas (capitalString) se volvera un dato numerico salido del codico ASCII gracias al "charCodeAt", se le hace una resta de 65 y una suma de 33 (numero fijo cualquiera para cifrar el string) se le saca modulo de 26 (porque solo hay 26 letras en mayuscula) y se le vuelve a sumar 65. A todo esto lo almacenamos en una variable creada llamada newPosition
          var newPosition = (((capitalString.charCodeAt(i)-65+33)%26)+65);
###### Luego con el String.fromCharCode convertiremos el numero que se determino en "newPosition" a un caracter debido a que el numero ES la nueva posicion en el codigo ASCII
          var cipherLetter = String.fromCharCode(newPosition);
###### SI el capitalString en la posicion i es un espacio en blanco, el newString solo agrega un espacio en blanco, caso contrario el newString agrega la letra cifrada a la nueva frase (cipherLetter)
          (capitalString[i]===' ')? newString+=' ':newString+=cipherLetter;
###### se cierra el ELSE
        }
###### se cierra el FOR
    }
###### devuelve la el nuevo string formado en los pasos anteriores
    return newString;
###### se cierra el primer else
  }
###### termina la funcion cipher
}

![cifrado cesar](https://github.com/365462/CIFRADO-CESAR/blob/master/image/cipher.png)

### PSEUDO CODIGO FUNCION DESCIPHER:

###### creamos una funcion llamada descipher la cual recibe un argumento con el nombre de string, este string es el newString retornado de la funcion cipher
function descipher(string){
###### se crea una variable con el nombre de oldString
   var oldString='';
###### iniciaremos un bucle donde se creara la variable j con el valor de 0 hasta el j menor que la cantidad de caracteres que tiene el string (delimitamos el tamaño) y se recorre el string de 1 en 1
   for(var j=0; j<string.length; j++)
   {
###### la posicion en j del string se volvera un dato numerico salido del codico ASCII gracias al "charCodeAt", se le hace una suma de 65 y una resta de 33 (numero fijo igual que en la funcion cipher para descifrar el string) se le saca modulo de 26 (porque solo hay 26 letras en mayuscula) y se le vuelve a sumar 65. A todo esto lo almacenamos en una variable creada llamada Position
     var position = (((string.charCodeAt(j)+65-33)%26)+65);
###### Luego con el String.fromCharCode convertiremos el numero que se determino en "Position" a un caracter debido a que el numero ES la nueva posicion en el codigo ASCII
     var descipherLetter =String.fromCharCode(position);
###### SI el String en la posicion j es un espacio en blanco, el oldString solo agrega un espacio en blanco, caso contrario el oldString agrega la letra descifrada a la nueva frase (descipherLetter)
     (string[j]===' ')? oldString+=' ':oldString+=descipherLetter;
###### cerramos el FOR
   }
###### devuelve EL viejo string (string inicial)
   return oldString;
###### termina la funcion descipher
}

![descifrado cesar](https://github.com/365462/CIFRADO-CESAR/blob/master/image/descipher.png)
