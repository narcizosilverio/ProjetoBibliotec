//console.log("Hello word!!");

// alert("hello word!!");

// var nome = "narcizo" 

//let nome = "narcizo"
//console.log(nome)

//const nome = "narcizo"

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");



btnSenha.addEventListener("click", function() {

  /*  if(campoSenha.type == "password") {
        campoSenha.type = "text";
    }
    else {
        campoSenha.type = "password";
    }
        */

    campoSenha.type = campoSenha.type == "password" ? "text" : "password"
})
