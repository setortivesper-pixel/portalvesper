/* Coluna de ação dos eventos */
document.querySelectorAll("#tabela-eventos tbody tr").forEach((linha) => {
  const codigo = linha.querySelector(".codigo")?.textContent.trim();

  if (!codigo) return;

  const celulaAcao = document.createElement("td");
  celulaAcao.className = "celula-acao";
  celulaAcao.innerHTML = `
        <a href="esocial-evento.html?evento=${encodeURIComponent(codigo)}"
           class="btn-evento"
           aria-label="Ver detalhes do evento ${codigo}">
            <i class="fa-arrow-circle-right" aria-hidden="true"></i>
        </a>
    `;

  linha.appendChild(celulaAcao);
});
