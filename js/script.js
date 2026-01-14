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
document.getElementById("enviar").addEventListener("click", validarFormulario);

function validarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem-form");

  if (nome === "" || email === "") {
    mensagem.textContent = "⚠️ Por favor, preencha todos os campos.";
    mensagem.style.color = "#ff9e9e";
    return;
  }

  if (!email.includes("@")) {
    mensagem.textContent = "⚠️ Digite um email válido.";
    mensagem.style.color = "#ff9e9e";
    return;
  }

  mensagem.textContent = "✅ Obrigada! Em breve você receberá novidades.";
  mensagem.style.color = "#03dac6";

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}


const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }
});




