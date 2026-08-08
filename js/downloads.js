(() => {
/* ==========================================================
   Dados dos downloads

   Observação: "categoria", "departamento", "data" e
   "palavrasChave" não são exibidos visualmente hoje (o layout
   atual não mudou), mas alimentam a pesquisa e preparam a
   página para filtros/categorias futuros, no mesmo padrão de
   manuais.js. Ajuste os valores conforme a realidade da
   empresa quando necessário.
========================================================== */

window.portalData = window.portalData || {};

window.portalData.downloads = [
  {
    titulo: "AnyDesk",
    descricao: "Acesso remoto para suporte de TI.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://anydesk.com/pt/downloads/thank-you?dv=win_exe",
    dominio: "anydesk.com",
    icone: { tipo: "favicon", dominioFavicon: "anydesk.com", fallback: "fa-solid fa-desktop" },
    palavrasChave: ["anydesk", "acesso remoto", "suporte", "ti"],
  },
  {
    titulo: "Google Chrome",
    descricao: "Navegador padrão homologado pela empresa.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://www.google.com/chrome/",
    dominio: "google.com/chrome",
    icone: { tipo: "fontawesome", classe: "fa-brands fa-chrome" },
    palavrasChave: ["chrome", "navegador", "google", "ti"],
  },
  {
    titulo: "Firefox",
    descricao: "Navegador alternativo homologado pela empresa.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://www.firefox.com/thanks/?marketing_consent=1",
    dominio: "mozilla.org",
    icone: { tipo: "fontawesome", classe: "fa-brands fa-firefox-browser" },
    palavrasChave: ["firefox", "navegador", "mozilla", "ti"],
  },
  {
    titulo: "Adobe Reader",
    descricao: "Leitor de arquivos PDF.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://get.adobe.com/br/reader/",
    dominio: "adobe.com",
    icone: { tipo: "imagem", src: "img/adobe-simbolo.png" },
    palavrasChave: ["adobe", "reader", "pdf", "leitor", "ti"],
  },
  {
    titulo: "Foxit PDF Reader",
    descricao: "Leitor de PDF alternativo e leve.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://www.foxit.com/pdf-reader/",
    dominio: "foxit.com",
    icone: { tipo: "favicon", dominioFavicon: "foxit.com", fallback: "fa-solid fa-file-pdf" },
    palavrasChave: ["foxit", "pdf", "leitor", "ti"],
  },
  {
    titulo: "Spark",
    descricao: "Cliente de e-mail usado pela equipe.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://www-igniterealtime-org.translate.goog/downloadServlet?filename=spark/spark_3_0_2-with-jre.exe&_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc",
    dominio: "sparkmailapp.com",
    icone: { tipo: "imagem", src: "img/spark-simbolo.png" },
    palavrasChave: ["spark", "e-mail", "email", "cliente de email", "ti"],
  },
  {
    titulo: "WhatsApp",
    descricao: "Aplicativo de mensagens para computador.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://get.microsoft.com/installer/download/9NKSQGP7F2NH?cid=website_cta_psi",
    dominio: "whatsapp.com",
    icone: { tipo: "fontawesome", classe: "fa-brands fa-whatsapp" },
    palavrasChave: ["whatsapp", "mensagens", "aplicativo", "ti"],
  },
  {
    titulo: "Lightshot",
    descricao: "Captura de tela rápida, print com edição e compartilhamento.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://app.prntscr.com/build/setup-lightshot.exe",
    dominio: "prntscr.com",
    icone: { tipo: "favicon", dominioFavicon: "prntscr.com", fallback: "fa-solid fa-camera" },
    palavrasChave: ["lightshot", "captura de tela", "print", "ti"],
  },
  {
    titulo: "Extranet Fretamento",
    descricao: "Sistema da ARTESP para gestão do fretamento.",
    categoria: "Operacional",
    departamento: "Operação",
    data: "2026-08-04",
    arquivo: "https://extranet.artesp.sp.gov.br/fretamento/instalacao/index.html",
    dominio: "extranet.artesp.sp.gov.br",
    icone: { tipo: "imagem", src: "img/artesp-simbolo.png" },
    palavrasChave: ["artesp", "extranet", "fretamento", "operação"],
  },
  {
    titulo: "Java",
    descricao: "Ambiente de execução necessário para alguns sistemas.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://javadl.oracle.com/webapps/download/AutoDL?BundleId=253458_ba687cb3cbb24342adc8fdf890b993dc",
    dominio: "java.com",
    icone: { tipo: "fontawesome", classe: "fa-brands fa-java" },
    palavrasChave: ["java", "ambiente de execução", "runtime", "ti"],
  },
  {
    titulo: "Itaú",
    descricao: "Aplicativo Itaú para computador.",
    categoria: "Financeiro",
    departamento: "Financeiro",
    data: "2026-08-04",
    arquivo: "https://guardiao.itau.com.br/UpdateServer/aplicativoitau.msi",
    dominio: "itau.com.br",
    icone: { tipo: "favicon", dominioFavicon: "itau.com.br", fallback: "fa-solid fa-building-columns" },
    palavrasChave: ["itau", "banco", "financeiro"],
  },
  {
    titulo: "SEFIP",
    descricao: "Sistema para envio do FGTS e informações à Previdência Social.",
    categoria: "Financeiro",
    departamento: "Financeiro",
    data: "2026-08-04",
    arquivo: "https://www.caixa.gov.br/Downloads/fgts-sefip-grf/Sefip_v_8_4_20_12_2024.zip",
    dominio: "caixa.gov.br",
    icone: { tipo: "favicon", dominioFavicon: "caixa.gov.br", fallback: "fa-solid fa-file-invoice-dollar" },
    palavrasChave: ["sefip", "fgts", "caixa", "previdência", "financeiro"],
  },
  {
    titulo: "WinRAR",
    descricao: "Compactador e descompactador de arquivos.",
    categoria: "TI",
    departamento: "Tecnologia da Informação",
    data: "2026-08-04",
    arquivo: "https://www.win-rar.com/postdownload.html?&L=9",
    dominio: "win-rar.com",
    icone: { tipo: "favicon", dominioFavicon: "win-rar.com", fallback: "fa-solid fa-file-zipper" },
    palavrasChave: ["winrar", "compactador", "zip", "rar", "ti"],
  },
  {
    titulo: "Uninfe",
    descricao: "Emissor de notas fiscais eletrônicas (NF-e/CT-e).",
    categoria: "Financeiro",
    departamento: "Financeiro",
    data: "2026-08-04",
    arquivo: "https://www.unimake.com.br/central-downloads",
    dominio: "unimake.com.br",
    icone: { tipo: "favicon", dominioFavicon: "unimake.com.br", fallback: "fa-solid fa-file-invoice" },
    palavrasChave: ["uninfe", "nota fiscal", "nf-e", "ct-e", "financeiro"],
  },
    {
    titulo: "Dropbox",
    descricao: "Plataforma para armazenamento, sincronização e compartilhamento de arquivos em nuvem.",
    categoria: "TI",
    departamento: "Tecnologia da Informaçã",
    data: "2026-08-06",
    arquivo: "https://www.dropbox.com/download?os=win&plat=win",
    dominio: "dropbox.com",
    icone: { tipo: "favicon", dominioFavicon: "dropbox.com", fallback: "fa-solid fa-file-invoice" },
    palavrasChave: ["dropbox", "armazenamento", "sincronização", "compartilhamento", "ti"],
  },
    {
    titulo: "Assinador Serpro",
    descricao: "Programa usado para assinar documentos digitais com validade jurídica baseada nos padrões da ICP-Brasil.",
    categoria: "Jurídico",
    departamento: "Jurídico",
    data: "2026-08-06",
    arquivo: "https://artefatos-assinador.serpro.gov.br/downloads/4.5.3/Assinador-Serpro-4.5.3-x86_64.exe",
    dominio: "serpro.gov.br",
    icone: { tipo: "favicon", dominioFavicon: "serpro.gov.br", fallback: "fa-solid fa-landmark" },
    palavrasChave: ["assinador", "Serpro", "assinar", "digital"],
  },
    {
    titulo: "PJeOffice Pro",
    descricao: "Assinador digital utilizado para acesso ao PJe e assinatura eletrônica de documentos.",
    categoria: "Jurídico",
    departamento: "Jurídico",
    data: "2026-08-06",
    arquivo: "https://pjeoffice.trf3.jus.br/pjeoffice-pro/docs/index.html?nocache=12.03.2024",
    dominio: "cnj.jus.br",
    icone: { tipo: "imagem", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezAjUtpo0XrziyPs4wVCef1LGOR4ISgJXUxPjz70QaQ&s" },
    palavrasChave: ["pjeoffice", "pjeoffice pro", "pje", "assinador", "assinatura digital", "jurídico"],
  },
  
];


/* ==========================================================
   Funções auxiliares
========================================================== */

const normalizarTexto = (texto) => texto
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLocaleLowerCase("pt-BR");

// formatarData ainda não é necessária: o campo "data" de cada
// download não é exibido na interface hoje. Quando a data passar
// a ser exibida (ex.: "Adicionado em"), reaproveite a mesma
// implementação usada em manuais.js.

/* ==========================================================
   Renderização dos downloads
========================================================== */

const criarIconePrograma = (icone) => {
  const wrapper = document.createElement("span");
  wrapper.className = "icone-programa";

  if (icone.tipo === "fontawesome") {
    const i = document.createElement("i");
    i.className = icone.classe;
    wrapper.append(i);
    return wrapper;
  }

  if (icone.tipo === "imagem") {
    const img = document.createElement("img");
    img.src = icone.src;
    img.alt = "";
    wrapper.append(img);
    return wrapper;
  }

  // tipo "favicon": busca o favicon do site e cai para um ícone
  // do FontAwesome caso a imagem não carregue.
  const img = document.createElement("img");
  img.src = `https://www.google.com/s2/favicons?sz=128&domain=${icone.dominioFavicon}`;
  img.alt = "";
  img.loading = "lazy";
  img.addEventListener("error", () => {
    const fallback = document.createElement("i");
    fallback.className = icone.fallback;
    img.replaceWith(fallback);
  }, { once: true });
  wrapper.append(img);
  return wrapper;
};

const criarCardDownload = (download) => {
  const card = document.createElement("a");
  card.className = "card-programa";
  card.href = download.arquivo;
  card.target = "_blank";
  card.rel = "noopener";

  const titulo = document.createElement("h3");
  titulo.textContent = download.titulo;

  const descricao = document.createElement("p");
  descricao.textContent = download.descricao;

  const dominio = document.createElement("span");
  dominio.className = "dominio";
  dominio.textContent = download.dominio;

  const selo = document.createElement("span");
  selo.className = "selo-verificado";
  selo.innerHTML = '<i class="fa-solid fa-circle-check"></i> Link oficial';

  card.append(criarIconePrograma(download.icone), titulo, descricao, dominio, selo);
  return card;
};

const renderizarDownloads = (downloads, container) => {
  container.replaceChildren(...downloads.map(criarCardDownload));
};

/* ==========================================================
   Pesquisa e filtros
========================================================== */

const iniciarPaginaDownloads = () => {
  const container = document.querySelector("#lista-downloads");
  const campoPesquisa = document.querySelector("#pesquisa-downloads");
  const botoesCategoria = document.querySelectorAll(".categorias .categoria");
  const navPaginacao = document.querySelector("#paginacao-downloads");
  const contador = document.querySelector("#contador-downloads");
  const seletorItensPorPagina = document.querySelector("#itens-por-pagina-downloads");

  if (!container || !campoPesquisa) {
    return;
  }

  const estado = {
    pesquisa: "",
    categoria: "todos",
    paginaAtual: 1,
    // Sem seletor de itens por página na tela hoje, então mostra
    // todos os itens — trocar para um número quando a paginação
    // for adicionada ao HTML.
    itensPorPagina: "todos",
  };

  // Fonte dos dados: hoje é local (window.portalData.downloads), no
  // futuro pode ser substituída por uma chamada a uma API sem
  // alterar as funções abaixo.
  const obterDownloadsFiltrados = () => window.portalData.downloads.filter((download) => {
    const conteudoDownload = normalizarTexto([
      download.titulo,
      download.descricao,
      download.categoria,
      download.departamento,
      ...download.palavrasChave,
    ].join(" "));
    const correspondePesquisa = !estado.pesquisa || conteudoDownload.includes(estado.pesquisa);
    const correspondeCategoria = estado.categoria === "todos" || normalizarTexto(download.categoria) === estado.categoria;

    return correspondePesquisa && correspondeCategoria;
  });

  /* ==========================================================
     Paginação (estrutura pronta, sem elementos no HTML ainda)
  ========================================================== */

  const obterQuantidadeItensPorPagina = (totalItens) => (
    estado.itensPorPagina === "todos" ? Math.max(totalItens, 1) : Number(estado.itensPorPagina)
  );

  const calcularTotalPaginas = (totalItens) => {
    if (totalItens === 0) return 1;
    return Math.ceil(totalItens / obterQuantidadeItensPorPagina(totalItens));
  };

  const obterItensPagina = (downloadsFiltrados) => {
    if (estado.itensPorPagina === "todos") return downloadsFiltrados;
    const porPagina = Number(estado.itensPorPagina);
    const inicio = (estado.paginaAtual - 1) * porPagina;
    return downloadsFiltrados.slice(inicio, inicio + porPagina);
  };

  const obterPaginasVisiveis = (paginaAtual, totalPaginas) => {
    const paginas = [];
    for (let i = 1; i <= totalPaginas; i += 1) {
      const proximaDaAtual = Math.abs(i - paginaAtual) <= 1;
      const extremidade = i === 1 || i === totalPaginas;
      if (proximaDaAtual || extremidade) {
        paginas.push(i);
      } else if (paginas[paginas.length - 1] !== "...") {
        paginas.push("...");
      }
    }
    return paginas;
  };

  const renderizarPaginacao = (totalPaginas) => {
    if (!navPaginacao) return;
    navPaginacao.replaceChildren();
    if (totalPaginas <= 1) return;

    const criarBotao = (label, pagina, { ativa = false, desabilitado = false } = {}) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.textContent = label;
      botao.classList.toggle("paginacao-ativa", ativa);
      botao.disabled = desabilitado;
      botao.addEventListener("click", () => alterarPagina(pagina));
      return botao;
    };

    navPaginacao.append(
      criarBotao("◀ Anterior", estado.paginaAtual - 1, { desabilitado: estado.paginaAtual === 1 }),
    );

    obterPaginasVisiveis(estado.paginaAtual, totalPaginas).forEach((pagina) => {
      if (pagina === "...") {
        const reticencias = document.createElement("span");
        reticencias.className = "paginacao-reticencias";
        reticencias.textContent = "...";
        navPaginacao.append(reticencias);
      } else {
        navPaginacao.append(criarBotao(String(pagina), pagina, { ativa: pagina === estado.paginaAtual }));
      }
    });

    navPaginacao.append(
      criarBotao("Próximo ▶", estado.paginaAtual + 1, { desabilitado: estado.paginaAtual === totalPaginas }),
    );
  };

  const alterarPagina = (novaPagina) => {
    const filtrados = obterDownloadsFiltrados();
    const totalPaginas = calcularTotalPaginas(filtrados.length);
    estado.paginaAtual = Math.min(Math.max(novaPagina, 1), totalPaginas);
    atualizarLista();
  };

  /* ==========================================================
     Contador e atualização da lista
  ========================================================== */

  const atualizarContador = (totalFiltrados) => {
    if (!contador) return;
    contador.textContent = totalFiltrados === 1 ? "1 item" : `${totalFiltrados} itens`;
  };

  const atualizarLista = () => {
    const filtrados = obterDownloadsFiltrados();
    const totalPaginas = calcularTotalPaginas(filtrados.length);

    if (estado.paginaAtual > totalPaginas) estado.paginaAtual = totalPaginas;

    const itensPagina = obterItensPagina(filtrados);
    renderizarDownloads(itensPagina, container);
    atualizarContador(filtrados.length);
    renderizarPaginacao(totalPaginas);
  };

  /* ==========================================================
     Eventos: pesquisa, categoria e itens por página
  ========================================================== */

  campoPesquisa.addEventListener("input", () => {
    estado.pesquisa = normalizarTexto(campoPesquisa.value.trim());
    estado.paginaAtual = 1;
    atualizarLista();
  });

  botoesCategoria.forEach((botao) => {
    botao.addEventListener("click", () => {
      estado.categoria = botao.dataset.filtro || "todos";
      estado.paginaAtual = 1;
      botoesCategoria.forEach((item) => item.classList.toggle("ativa", item === botao));
      atualizarLista();
    });
  });

  if (seletorItensPorPagina) {
    seletorItensPorPagina.value = String(estado.itensPorPagina);
    seletorItensPorPagina.addEventListener("change", () => {
      estado.itensPorPagina = seletorItensPorPagina.value;
      estado.paginaAtual = 1;
      atualizarLista();
    });
  }

  atualizarLista();
};

iniciarPaginaDownloads();
})();