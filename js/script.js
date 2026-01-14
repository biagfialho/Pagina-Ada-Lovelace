document.getElementById("enviar").addEventListener("click", validarFormulario);

//HTML
 //<form>
    //<label for="nome">Nome:</label>
    //<input id="nome" type="text">
    //<label for="email">Email:</label>
    //<input id="email" type="email">
    //<label for="telefone">Telefone:</label>
    //<input id="telefone" type="number">
    //<button id="botaoEnviar">Enviar</button>
 //</form>

//JS
function validarFormulario() {

  if(document.getElementById("nome").value !== "" && document.getElementById("email").value !== "")
    {alert("Prontinho! Você receberá as novidades por email.");
  }
  else{
    alert("Por favor, preencha os campos nome e email")
  }

};

const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});



