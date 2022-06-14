// Variaveis para manipulação da DOM
const elementoResposta = document.querySelector('#resposta');
const inputResposta = document.querySelector('#inputResposta');
const buttonPerguntar = document.querySelector('#buttonPerguntar')

// Array de respostas
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde',
  'Sim, definitivamente!',
  'Minha resposta é não',
  'Você pode contar com isso',
  'Melhor não te dizer agora',
  'A meu ver, sim.',
  'Minhas fontes dizem não',
  'Provavelmente',
  'Não é possível prever agora',
  'Perspectiva boa',
  'As perspectivas não são tão boas',
  'Sim',
  'Concentre-se e pergunte novamente',
  'Sinais apontam que sim'
]

// A verificar
// let isValid = false;

// while (isValid) {
//   if (inputResposta == null) {
//     buttonPerguntar.setAttribute('disabled', true);
//   } else {
//     isValid = true;
//   }
// }

// função para botão de ação
function fazerPergunta() {

  if (inputResposta.value == '') {
    alert('Digite algo...');
    return;
  } else {

    buttonPerguntar.setAttribute('disabled', true);
    const pergunta = `<div>${inputResposta.value}</div>`;
    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

    // Manipulação do elemento H3
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
    elementoResposta.style.display = 'block';

    elementoResposta.style.opacity = 1;

    // Sumir a resposta depois de 3 segundos
    setTimeout(function () {
      elementoResposta.style.opacity = 0;
      buttonPerguntar.removeAttribute('disabled');
    }, 2000);
  }
}