const btnEye = document.querySelector("#btn-eye");
// const btnEntrar = document.querySelector(".btn-login");

btnEye.addEventListener("click", () => {
  const senha = document.querySelector("#senha");
  if (senha.getAttribute("type") == "password") {
    senha.setAttribute("type", "text");
  } else {
    senha.setAttribute("type", "password");
  }
});

function entrar() {
  const user = document.querySelector("#usuario");
  const labelUsuario = document.querySelector("#labelUsuario");

  const senha = document.querySelector("#senha");
  const labelSenha = document.querySelector("#labelSenha");

  let msgError = document.querySelector("#msgError");

  let listaUser = [];

  let userValid = {
    nome: '',
    user: '',
    senha: '',
  };

  listaUser = JSON.parse(localStorage.getItem('listaUser'));

  listaUser.forEach((item) => {
    if (user.value == item.userCad && senha.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad,
      };
    }
  });

  if (user.value == userValid.user && senha.value == userValid.senha) {
    location.assign("../inicio.html");

    //Criação do token para segurança. Dessa forma, o user não consegue acessar o sistema sem estar autenticado.
    let token = Math.random().toString(16).substring(2)

    localStorage.setItem('token', token)

    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    labelUsuario.setAttribute('style', 'color: red')
    user.setAttribute('style', 'color: red')
    labelSenha.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos!'

    user.focus();
  }
  if(listaUser.length === 0) {
    msgError.setAttribute('style', 'display: block')

    msgError.innerHTML = 'Você ainda não tem cadastro.'

    usuario.focus()
}
}
