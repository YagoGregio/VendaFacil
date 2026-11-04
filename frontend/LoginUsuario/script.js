const botaoEntrar = document.getElementById('botaoEntrar');

botaoEntrar.addEventListener("submit", function(event){
    event.preventDefault();

    const usuario = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if(usuario === "" && senha === "") {
        window.location.href = "";
    } else {
        mensagemErro.textContent = "Usuario ou senha está incorretos. Tente Novamente"
    }
});