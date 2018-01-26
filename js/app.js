function cipher() {
  const alphaExp = /^[a-zA-Z' '/s]+$/;
  const input = document.getElementById('input').value.toUpperCase();
  let newInput = '';
  console.log(input);
  for (let i = 0; i < input.length; i++) {
    const newPosition = (((input.charCodeAt(i)-65+33)%26)+65);
    const cipherLetter = String.fromCharCode(newPosition);
    (input[i]===' ' ? newInput += ' ' : newInput += cipherLetter);
  }
  document.getElementById("output").innerHTML = 
  `<h6 class="white">Texto cifrado:</h6>` + `<h4>` + newInput + `</h4>` + `<button onclick="history.go(0)" class="btn btn-success btn-lg btn-principal">Limpiar</button>`;
  console.log(newInput);
}

function decipher() {
  const alphaExp = /^[a-zA-Z' '/s]+$/;
  const cipherLetter = document.getElementById('input').value.toUpperCase();
  let input = '';
  console.log(cipherLetter);
  for (let j = 0; j < cipherLetter.length; j++) {
    const position = (((cipherLetter.charCodeAt(j)+65-33)%26)+65);
    const decipher = String.fromCharCode(position);
    (cipherLetter[j]===' ' ? input += ' ' : input += decipher);
  }
  document.getElementById("output").innerHTML = 
  `<h6 class="white">Texto descifrado:</h6>` + `<h4>` + input + `</h4>` + `<button onclick="history.go(0)" class="btn btn-success btn-lg btn-principal">Limpiar</button>`;
  console.log(input);
}
/*
function cipher() {
  var alphaExp = /^[a-zA-Z' '/s]+$/;
  var input = document.getElementById('input').value.toUpperCase();
  var newInput = '';
  console.log(input);
  for (var i = 0; i < input.length; i++) {
    var newPosition = (((input.charCodeAt(i)-65+33)%26)+65);
    var cipherLetter = String.fromCharCode(newPosition);
    (input[i]===' ')? newInput += ' ' : newInput += cipherLetter;
  }
  document.getElementById("output").innerHTML = 
  `<h6 class="white">Texto cifrado:</h6>` + `<h4>` + newInput + `</h4>` + `<button onclick="history.go(0)" class="btn btn-success btn-lg btn-principal">Limpiar</button>`;
  console.log(newInput);
}

function decipher() {
  var alphaExp = /^[a-zA-Z' '/s]+$/;
  var cipherLetter = document.getElementById('input').value.toUpperCase();
  var input = '';
  console.log(cipherLetter);
  for (var j = 0; j < cipherLetter.length; j++) {
    var position = (((cipherLetter.charCodeAt(j)+65-33)%26)+65);
    var decipher = String.fromCharCode(position);
    (cipherLetter[j]===' ')? input += ' ' : input += decipher;
  }
  document.getElementById("output").innerHTML = 
  `<h6 class="white">Texto descifrado:</h6>` + `<h4>` + input + `</h4>` + `<button onclick="history.go(0)" class="btn btn-success btn-lg btn-principal">Limpiar</button>`;
  console.log(input);
}
*/
