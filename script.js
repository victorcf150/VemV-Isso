document.addEventListener('DOMContentLoaded', () => {
  atualizarMensagemPeriodicamente();
  atualizarMensagem(); // Atualizar a mensagem inicial
});

const apiUrl = 'https://api.adviceslip.com/advice';

function obterMensagemMotivacional() {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => data.slip.advice);
}

function exibirMensagem(mensagem) {
  const mensagemText = document.getElementById('message-text');
  mensagemText.textContent = mensagem;
}

function atualizarMensagem() {
  obterMensagemMotivacional().then(mensagem => {
    exibirMensagem(mensagem);
  });
}

function atualizarMensagemPeriodicamente() {
  setInterval(atualizarMensagem, 60000); // Atualiza a cada 60 segundos (ajuste conforme necessário)
}






/* document.addEventListener('DOMContentLoaded', () => {
  atualizarMensagemPeriodicamente();
  atualizarMensagem(); // Atualizar a mensagem inicial
});

const apiUrl = 'https://api.adviceslip.com/advice';
const translateApiKey = 'YOUR_YANDEX_TRANSLATE_API_KEY'; // Substitua pela sua chave de API do Yandex.Translate

function obterMensagemMotivacional() {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => data.slip.advice);
}

function traduzirMensagem(mensagem) {
  const targetLanguage = 'pt'; // Código para o português
  const translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${translateApiKey}&text=${encodeURIComponent(mensagem)}&lang=${targetLanguage}`;

  return fetch(translateUrl)
    .then(response => response.json())
    .then(data => data.text[0]);
}

function exibirMensagemTraduzida() {
  obterMensagemMotivacional().then(mensagem => {
    traduzirMensagem(mensagem).then(mensagemTraduzida => {
      exibirMensagem(mensagemTraduzida);
    });
  });
}

function atualizarMensagem() {
  exibirMensagemTraduzida();
}

function atualizarMensagemPeriodicamente() {
  setInterval(atualizarMensagem, 60000); // Atualiza a cada 60 segundos (ajuste conforme necessário)
}
 */