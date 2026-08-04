/* ==========================================================
   Barra lateral
========================================================== */

const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".menu a[href]").forEach((link) => {
  if (link.getAttribute("href") === paginaAtual) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

/* ==========================================================
   Pesquisa de downloads
========================================================== */

const campoPesquisaDownloads = document.querySelector("#pesquisa-downloads");

if (campoPesquisaDownloads) {
  const programas = document.querySelectorAll(".card-programa");

  campoPesquisaDownloads.addEventListener("input", () => {
    const termo = campoPesquisaDownloads.value.trim().toLocaleLowerCase("pt-BR");

    programas.forEach((programa) => {
      programa.hidden = !programa.textContent.toLocaleLowerCase("pt-BR").includes(termo);
    });
  });
}

/* ==========================================================
   Busca global da página inicial
========================================================== */

const campoPesquisaGeral = document.querySelector("#pesquisa-geral");

if (campoPesquisaGeral) {
  const resultadosPesquisa = document.querySelector("#resultados-pesquisa");
  const resumoPesquisa = document.querySelector("#resumo-pesquisa");
  const listaResultados = document.querySelector("#lista-resultados");
  const botaoLimparPesquisa = document.querySelector("#limpar-pesquisa");

  const downloadsPadrao = [
    { titulo: "AnyDesk", descricao: "Acesso remoto para suporte de TI.", categoria: "Programa", arquivo: "https://anydesk.com/pt/downloads", externo: true },
    { titulo: "Google Chrome", descricao: "Navegador padrão homologado pela empresa.", categoria: "Programa", arquivo: "https://www.google.com/chrome/", externo: true },
    { titulo: "Firefox", descricao: "Navegador alternativo homologado pela empresa.", categoria: "Programa", arquivo: "https://www.mozilla.org/pt-BR/firefox/new/", externo: true },
    { titulo: "Adobe Reader", descricao: "Leitor de arquivos PDF.", categoria: "Programa", arquivo: "https://acrobat.adobe.com/br/pt/acrobat/pdf-reader.html", externo: true },
    { titulo: "Foxit PDF Reader", descricao: "Leitor de PDF alternativo e leve.", categoria: "Programa", arquivo: "https://www.foxit.com/pdf-reader/", externo: true },
    { titulo: "Spark", descricao: "Cliente de e-mail usado pela equipe.", categoria: "Programa", arquivo: "https://sparkmailapp.com/download", externo: true },
    { titulo: "WhatsApp", descricao: "Aplicativo de mensagens para computador.", categoria: "Programa", arquivo: "https://www.whatsapp.com/download", externo: true },
  ];

  const normalizarTexto = (texto) => texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");

  const obterManuaisParaBusca = () => (window.portalData?.manuais || []).map((manual) => ({
    tipo: "Manual",
    icone: "fa-file-pdf",
    titulo: manual.titulo,
    descricao: manual.descricao,
    categoria: manual.categoria,
    arquivo: manual.arquivo,
    externo: true,
    palavrasChave: manual.palavrasChave,
  }));

  const obterDownloadsParaBusca = () => downloadsPadrao.map((download) => ({
    tipo: "Download",
    icone: "fa-download",
    ...download,
  }));

  let conteudosPesquisaveis = [...obterManuaisParaBusca(), ...obterDownloadsParaBusca()];

  const criarResultado = (item) => {
    const resultado = document.createElement("a");
    resultado.className = "resultado-item";
    resultado.href = item.arquivo;

    if (item.externo) {
      resultado.target = "_blank";
      resultado.rel = "noopener";
    }

    const icone = document.createElement("span");
    icone.className = `resultado-icone resultado-${item.tipo.toLocaleLowerCase("pt-BR")}`;
    icone.innerHTML = `<i class="fa-solid ${item.icone}" aria-hidden="true"></i>`;

    const conteudo = document.createElement("span");
    conteudo.className = "resultado-conteudo";
    const meta = document.createElement("span");
    meta.className = "resultado-meta";
    meta.textContent = `${item.tipo} · ${item.categoria}`;
    const titulo = document.createElement("strong");
    titulo.textContent = item.titulo;
    const descricao = document.createElement("span");
    descricao.textContent = item.descricao;
    conteudo.append(meta, titulo, descricao);

    const seta = document.createElement("i");
    seta.className = "fa-solid fa-arrow-up-right-from-square resultado-seta";
    seta.setAttribute("aria-hidden", "true");

    resultado.append(icone, conteudo, seta);
    return resultado;
  };

  const renderizarResultados = (itens, termo) => {
    listaResultados.replaceChildren();
    resultadosPesquisa.hidden = false;

    if (!itens.length) {
      resumoPesquisa.textContent = `Nenhum resultado para “${termo}”.`;
      const mensagem = document.createElement("p");
      mensagem.className = "busca-vazia";
      mensagem.textContent = "Tente pesquisar por outro termo, categoria ou nome de programa.";
      listaResultados.append(mensagem);
      return;
    }

    resumoPesquisa.textContent = `${itens.length} resultado${itens.length > 1 ? "s" : ""} para “${termo}”.`;
    listaResultados.append(...itens.map(criarResultado));
  };

  const pesquisarNoPortal = () => {
    const termo = campoPesquisaGeral.value.trim();

    if (!termo) {
      resultadosPesquisa.hidden = true;
      listaResultados.replaceChildren();
      return;
    }

    const termoNormalizado = normalizarTexto(termo);
    const resultados = conteudosPesquisaveis.filter((item) => normalizarTexto([
      item.titulo,
      item.descricao,
      item.categoria,
      ...(item.palavrasChave || []),
    ].join(" ")).includes(termoNormalizado));

    renderizarResultados(resultados, termo);
  };

  campoPesquisaGeral.addEventListener("input", pesquisarNoPortal);
  campoPesquisaGeral.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      campoPesquisaGeral.value = "";
      pesquisarNoPortal();
      campoPesquisaGeral.blur();
    }
  });
  botaoLimparPesquisa?.addEventListener("click", () => {
    campoPesquisaGeral.value = "";
    pesquisarNoPortal();
    campoPesquisaGeral.focus();
  });
}
