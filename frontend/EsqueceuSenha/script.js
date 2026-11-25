const formEmail = document.getElementById('formEmail');
const formCodigo = document.getElementById('formCodigo');
const spanCodigo = document.getElementById('codigo');
const msg = document.getElementById('mensagem');
let codigoGerado = null;
let emailPendente = null;

function mostrar(html, tipo) {
  msg.className = 'msg ' + tipo;
  msg.innerHTML = html;
}

formEmail.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const usuarios = carregarUsuarios();

  if (!usuarios.some(u => u.email === email)) {
    spanCodigo.classList.add('hidden');
    formCodigo.classList.add('hidden');
    return mostrar('E-mail inexistente, <a href="cadastro.html">cadastre</a> caso não tenha uma conta.', 'erro');
  }

  emailPendente = email;
  codigoGerado = String(Math.floor(100000 + Math.random() * 900000));
  spanCodigo.textContent = codigoGerado;
  spanCodigo.classList.remove('hidden');
  formCodigo.classList.remove('hidden');
  mostrar('Código enviado! Digite-o abaixo.', 'ok');
});

formCodigo.addEventListener('submit', e => {
  e.preventDefault();
  const digitado = document.getElementById('digitado').value.trim();
  if (digitado === codigoGerado) {
    sessionStorage.setItem('emailRecuperacao', emailPendente);
    mostrar('Código correto! Redirecionando...', 'ok');
    setTimeout(() => (window.location.href = 'redefinir.html'), 1000);
  } else {
    mostrar('Código incorreto. Tente novamente.', 'erro');
  }
});