const logado = document.querySelector('#logado')
let userLogado = JSON.parse(localStorage.getItem('userLogado'))

logado.innerHTML = `Bem-vindo ${userLogado.nome}!`;

if(localStorage.getItem('token') == null) {
  alert("Você precisa estar logado para acessar essa página!")
  location.assign("../index.html")
}

function sair() {
  //Função para remover o token do localStorage e retornar para a página inicial

  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  location.assign('../index.html')
}
