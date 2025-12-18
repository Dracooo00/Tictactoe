function jogar(jogador) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const computador = opcoes[Math.floor(Math.random() * 3)];

  let resultado = "";

  if (jogador === computador) {
    resultado = `🎁 Empate! Ambos escolheram ${jogador}.`;
  } else if (
    (jogador === 'pedra' && computador === 'tesoura') ||
    (jogador === 'papel' && computador === 'pedra') ||
    (jogador === 'tesoura' && computador === 'papel')
  ) {
    resultado = `🎅 Você venceu! Você escolheu ${jogador} e o computador escolheu ${computador}. 🎄`;
  } else {
    resultado = `🎄 Você perdeu! Você escolheu ${jogador} e o computador escolheu ${computador}. 🎅`;
  }

  document.getElementById("resultado").innerText = resultado;
}
