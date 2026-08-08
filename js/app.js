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
    { titulo: "AnyDesk", descricao: "Acesso remoto para suporte de TI.", categoria: "Programa", arquivo: "https://anydesk.com/pt/downloads/thank-you?dv=win_exe", externo: true },
    { titulo: "Google Chrome", descricao: "Navegador padrão homologado pela empresa.", categoria: "Programa", arquivo: "https://www.google.com/chrome/", externo: true },
    { titulo: "Firefox", descricao: "Navegador alternativo homologado pela empresa.", categoria: "Programa", arquivo: "https://www.firefox.com/pt-BR/thanks/?marketing_consent=1", externo: true },
    { titulo: "Adobe Reader", descricao: "Leitor de arquivos PDF.", categoria: "Programa", arquivo: "https://get.adobe.com/br/reader/", externo: true },
    { titulo: "Foxit PDF Reader", descricao: "Leitor de PDF alternativo e leve.", categoria: "Programa", arquivo: "https://www.foxit.com/pdf-reader/", externo: true },
    { titulo: "Spark", descricao: "Cliente de e-mail usado pela equipe.", categoria: "Programa", arquivo: "https://www-igniterealtime-org.translate.goog/downloadServlet?filename=spark/spark_3_0_2-with-jre.exe&_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc", externo: true },
    { titulo: "WhatsApp", descricao: "Aplicativo de mensagens para computador.", categoria: "Programa", arquivo: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=website_cta_psi", externo: true },
    { titulo: "Lightshot", descricao: "Ferramenta para captura e edição rápida de telas.", categoria: "Programa", arquivo: "https://app.prntscr.com/build/setup-lightshot.exe", externo: true },
    { titulo: "Extranet Fretamento", descricao: "Sistema utilizado para gerenciamento e consulta de informações de fretamento.", categoria: "Sistema", arquivo: "https://extranet.artesp.sp.gov.br/fretamento/instalacao/index.html", externo: true },
    { titulo: "Java", descricao: "Plataforma necessária para execução de aplicações desenvolvidas em Java.", categoria: "Programa", arquivo: "https://javadl.oracle.com/webapps/download/AutoDL?BundleId=253458_ba687cb3cbb24342adc8fdf890b993dc", externo: true },
    { titulo: "Itaú", descricao: "Sistema utilizado para acesso aos serviços bancários do Itaú.", categoria: "Sistema", arquivo: "https://guardiao.itau.com.br/UpdateServer/aplicativoitau.msi", externo: true },
    { titulo: "SEFIP", descricao: "Sistema utilizado para geração e envio de informações relacionadas ao FGTS e à Previdência Social.", categoria: "Programa", arquivo: "https://www.caixa.gov.br/Downloads/fgts-sefip-grf/Sefip_v_8_4_20_12_2024.zip", externo: true },
    { titulo: "WinRAR", descricao: "Programa para compactação e descompactação de arquivos.", categoria: "Programa", arquivo: "https://www.win-rar.com/postdownload.html?&L=9", externo: true },
    { titulo: "UniNFe", descricao: "Sistema para emissão e gerenciamento de documentos fiscais eletrônicos.", categoria: "Programa", arquivo: "https://www.unimake.com.br/central-downloads", externo: true },
    { titulo: "Dropbox", descricao: "Serviço para armazenamento, sincronização e compartilhamento de arquivos.", categoria: "Programa", arquivo: "https://www.dropbox.com/download?os=win&plat=win", externo: true },
    { titulo: "Assinador Serpro", descricao: "Aplicativo para assinatura digital de documentos utilizando certificados digitais.", categoria: "Programa", arquivo: "https://artefatos-assinador.serpro.gov.br/downloads/4.5.3/Assinador-Serpro-4.5.3-x86_64.exe", externo: true },
    { titulo: "PJeOffice Pro", descricao: "Aplicativo utilizado para acesso e autenticação em sistemas judiciais eletrônicos.", categoria: "Programa", arquivo: "https://pjeoffice.trf3.jus.br/pjeoffice-pro/docs/index.html?nocache=12.03.2024", externo: true },
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

  const obterContatosParaBusca = async () => {
    const resposta = await fetch("contatos.html");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os contatos.");
    }

    const documentoContatos = new DOMParser().parseFromString(await resposta.text(), "text/html");

    return [...documentoContatos.querySelectorAll(".tabela-contatos tbody tr")].map((linha) => {
      const colunas = linha.querySelectorAll("td");
      const setor = colunas[0]?.querySelector("strong")?.textContent.trim() || "Contato";
      const descricao = colunas[0]?.querySelector("small")?.textContent.trim() || "";
      const garagem = colunas[1]?.textContent.trim() || "";
      const categoria = colunas[2]?.textContent.trim() || linha.dataset.categoria || "Contato";
      const telefone = colunas[3]?.textContent.trim() || "";
      const arquivo = colunas[4]?.querySelector("a")?.href || "contatos.html";

      return {
        tipo: "Contato",
        icone: "fa-user",
        titulo: setor,
        descricao: [descricao, garagem, telefone].filter(Boolean).join(" · "),
        categoria,
        arquivo,
        externo: arquivo !== "contatos.html",
        palavrasChave: [linha.dataset.categoria || "", garagem, telefone],
      };
    });
  };

  const carregarContatosParaBusca = async () => {
    try {
      const contatos = await obterContatosParaBusca();
      conteudosPesquisaveis = [...conteudosPesquisaveis, ...contatos];

      if (campoPesquisaGeral.value.trim()) {
        pesquisarNoPortal();
      }
    } catch {
      // A busca principal continua disponível mesmo se a lista de contatos não puder ser carregada.
    }
  };

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

  void carregarContatosParaBusca();
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
