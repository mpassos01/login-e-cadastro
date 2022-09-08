const nome = document.querySelector('#nome')
const labelNome = document.querySelector('#labelNome')
let validNome = false

const usuario = document.querySelector('#usuario')
const labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

const senha = document.querySelector('#senha')
const labelSenha = document.querySelector('#labelSenha')
let validSenha = false

const confirmSenha = document.querySelector('#confirmSenha')
const labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

const msgError = document.querySelector('#msgError')
const msgSuccess = document.querySelector('#msgSuccess')

const btnEye = document.querySelector('#btn-eye-senha')
const btnEyeConfirm = document.querySelector('#btn-eye-confirm-senha')

// Inicio da validação de dados
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    nome.setAttribute('style', 'border-color: red')
    labelNome.innerHTML = 'Nome: Insira no mínimo 3 caracteres.'
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color:  green')
    nome.setAttribute('style', 'border-color: green')
    labelNome.innerHTML = 'Nome'
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    usuario.setAttribute('style', 'border-color: green')
    labelUsuario.innerHTML = 'Usuário'
    validUsuario = true;
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    senha.setAttribute('style', 'border-color: green')
    labelSenha.innerHTML = 'Senha'
    validSenha = true;
  }
})

confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar senha *A senha não confere'
    confirmSenha.setAttribute('style', 'border-color: red')
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true;
  }
})

//Fim das validações

//Função de visualizar a senha

btnEye.addEventListener('click', () => {
  const senha = document.querySelector('#senha')
  if (senha.getAttribute('type') == 'password') {
    senha.setAttribute('type', 'text')
  } else {
    senha.setAttribute('type', 'password')
  }
})

btnEyeConfirm.addEventListener('click', () => {
  const confirmSenha = document.querySelector('#confirmSenha')
  if (confirmSenha.getAttribute('type') == 'password') {
    confirmSenha.setAttribute('type', 'text')
  } else {
    confirmSenha.setAttribute('type', 'password')
  }
})

//Fim da função de vizualizar a senha

function cadastrar() {
   let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

  let listaUserMap = listaUser.map((item) => item.userCad)
  
  if (listaUserMap.includes(usuario.value)) {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário já cadastrado!'
    labelUsuario.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')

    usuario.focus()
  } else if (validNome && validUsuario && validSenha && validConfirmSenha) {
    salvarDados()
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrado com sucesso!</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(() => {
      window.location.href = 'index.html'
    }, 2000)
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML =
      '<strong>Preencha todos os campos corretamente.</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

//Salvar dados em localStrorage
function salvarDados() {
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

  listaUser.push({
    nomeCad: nome.value,
    userCad: usuario.value,
    senhaCad: senha.value,
  });

  localStorage.setItem('listaUser', JSON.stringify(listaUser))
  }