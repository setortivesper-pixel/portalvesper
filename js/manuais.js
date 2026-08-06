(() => {
/* ==========================================================
   Dados dos manuais
========================================================== */

window.portalData = window.portalData || {};

window.portalData.manuais = [
  { titulo: "Cadastro de funcionário", descricao: "Passo a passo para cadastro de funcionários com e sem digital no relógio de ponto.", categoria: "Recursos Humanos", departamento: "Recursos Humanos", data: "2026-07-29", arquivo: "https://drive.google.com/file/d/1j9PrKl2wiTdwacMm_xEaruWrRRVtp2Cl/view?usp=drive_link", palavrasChave: ["rh", "funcionário", "ponto", "digital"] },
  { titulo: "Uso AnyDesk", descricao: "Passo a passo para conectar no AnyDesk.", categoria: "TI", departamento: "Tecnologia da Informação", data: "2026-07-31", arquivo: "https://drive.google.com/file/d/15F7fOOM1R_qKslT6r4qvVLm3_EkS0nQB/view?usp=sharing", palavrasChave: ["anydesk", "acesso remoto", "ti"] },
  { titulo: "Lightshot", descricao: "Passo a passo para utilizar os atalhos do Lightshot.", categoria: "TI", departamento: "Tecnologia da Informação", data: "2026-07-31", arquivo: "https://drive.google.com/file/d/15F7fOOM1R_qKslT6r4qvVLm3_EkS0nQB/view?usp=sharing", palavrasChave: ["lightshot", "atalhos", "captura de tela", "ti"] },
  { titulo: "Utilização do ABM Protege", descricao: "Monitoramento de veículos, alertas, cercas, relatórios e trocas de garagem.", categoria: "Operacional", departamento: "Operação", data: "2026-08-04", arquivo: "https://drive.google.com/file/d/16Rx0lceAjiQEAPGT-lKLLQTvoTBumsIy/view?usp=drive_link", palavrasChave: ["abm", "protege", "veículos", "garagem", "operação"] },
  { titulo: "Verificação de Wi-Fi", descricao: "Procedimentos para diagnóstico, testes, troca de chip e roteadores dos veículos.", categoria: "Operacional", departamento: "Operação", data: "2026-08-04", arquivo: "https://drive.google.com/file/d/1aDan3n9aoLehOm8vNKMrXWaU_FqW14j6/view?usp=drive_link", palavrasChave: ["wifi", "wi-fi", "chip", "roteador", "veículos"] },
  { titulo: "Troca de Veículos entre Garagens", descricao: "Procedimento para transferência de veículos entre garagens e atualização dos sistemas.", categoria: "Operacional", departamento: "Operação", data: "2026-08-04", arquivo: "https://drive.google.com/file/d/1I_sNJJby9ypSxfjNlHCK4EnZ1j5VW54r/view?usp=drive_link", palavrasChave: ["veículos", "garagens", "transferência", "operação"] },
  { titulo: "ABM Control", descricao: "Procedimento para vincular motoristas aos veículos no sistema ABMControl.", categoria: "Operacional", departamento: "Operação", data: "2026-08-04", arquivo: "https://drive.google.com/file/d/17jmMdV-uKna2pRSFioAGIYmCmV7jgAW7/view?usp=drive_link", palavrasChave: ["abmcontrol", "motoristas", "veículos", "operação", "atribuir carro", "antt", "vincular carro"] },
  { titulo: "Envio de Eventos no eSocial", descricao: "Como enviar eventos e consultar seus protocolos de processamento.", categoria: "Recursos Humanos", departamento: "Recursos Humanos", data: "2026-08-05", arquivo: "https://drive.google.com/file/d/1EzHzOaj3xQYr5gIAWLo0pP6yP-KOasBC/view?usp=sharing", palavrasChave: ["esocial", "eventos", "protocolos", "rh", "Humanos"] },
  { titulo: "Atualização do Sistema Humanos", descricao: "Procedimento para realizar a atualização do sistema Humanos com segurança.", categoria: "Recursos Humanos", departamento: "Recursos Humanos", data: "2026-08-05", arquivo: "https://drive.google.com/file/d/19mOqTgHFFDUzGVu5Ak0kJuQzJJHHSRBf/view?usp=sharing", palavrasChave: ["emil", "rh", "Humanos", "atualização", "atualizar"] },
  { titulo: "Atualização do Sistema Frota", descricao: "Procedimento para realizar a atualização do sistema Frota com segurança.", categoria: "Operacional", departamento: "Operação", data: "2026-08-05", arquivo: "https://drive.google.com/file/d/1pzTeSNt-bNAYAKcEADk3acnFRCEJ3Yrp/view?usp=drive_link", palavrasChave: ["emil", "operacional", "Frota", "atualização", "almoxarifado", "atualizar", "atualizar frota"] },
  { titulo: "Atualização do Sistema Fretamento", descricao: "Procedimento para realizar a atualização do sistema Fretamento com segurança.", categoria: "Operacional", departamento: "Operação", data: "2026-08-05", arquivo: "https://drive.google.com/file/d/1IeLqwXAzzVlCxZaiOeHATB1HihppierZ/view?usp=drive_link", palavrasChave: ["emil", "operacional", "Fretamento", "atualização", "atualizar", "atualizar fretamento"] },
  { titulo: "Atualização do Sistema Financeiro", descricao: "Procedimento para realizar a atualização do sistema Financeiro com segurança.", categoria: "Financeiro", departamento: "Financeiro", data: "2026-08-05", arquivo: "https://drive.google.com/file/d/1VMCe3hf_PcNt-nLmEtaDKbEigDAXYq7Z/view?usp=drive_link", palavrasChave: ["emil", "operacional", "Financeiro", "atualização", "atualizar", "atualizar financeiro"] },
  { titulo: "Cronograma da Contabilidade", descricao: "Etapas e prazos da rotina contábil mensal das empresas do Grupo Vesper.", categoria: "Contabilidade", departamento: "Contabilidade", data: "2026-08-06", arquivo: "https://drive.google.com/file/d/1qOM0mSwJmPuukulBS80rqjoCw679ikd_/view?usp=drive_link", palavrasChave: ["emil", "contabilidade", "cronograma"] },
  { titulo: "Manual do Processo Fiscal", descricao: "Procedimentos e conferências executados mensalmente pelo setor contábil.", categoria: "Contabilidade", departamento: "Contabilidade", data: "2026-08-06", arquivo: "https://docs.google.com/document/d/16HlLEksenJLKoazbXD8_PB1RWxgk_TWw/edit?usp=sharing&ouid=111553798159595339439&rtpof=true&sd=true", palavrasChave: ["emil", "contabilidade", "fiscal"] },
  { titulo: "Tratativas de Multas", descricao: "Procedimentos para tratamento de multas.", categoria: "Sinistros", departamento: "Sinistros", data: "2026-07-29", arquivo: "https://docs.google.com/document/d/10eSpRwrahftr8df-IahafdDOGExpO3JW/edit?usp=sharing&ouid=111553798159595339439&rtpof=true&sd=true", palavrasChave: ["sinistros", "multa", "acidente", "advertência","motorista"] },
  { titulo: "Checklist de Tratativa de Sinistros", descricao: "Garantir que toda a documentação necessária para a tratativa de um sinistro seja conferida e organizada.", categoria: "Sinistros", departamento: "Sinistros", data: "2026-07-29", arquivo: "https://docs.google.com/document/d/18unG4CBFbcDbc5LWQjVc7AYYCnV7CtY6/edit?usp=sharing&ouid=111553798159595339439&rtpof=true&sd=true", palavrasChave: ["documentos", "multas", "sinistros", "motorista"] },
];

/* ==========================================================
   Funções auxiliares
========================================================== */

const normalizarTexto = (texto) => texto
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLocaleLowerCase("pt-BR");

const formatarData = (data) => new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(new Date(`${data}T00:00:00`));

/* ==========================================================
   Renderização dos manuais
========================================================== */

const criarCardManual = (manual) => {
  const card = document.createElement("a");
  card.className = "manual";
  card.href = manual.arquivo;
  card.target = "_blank";
  card.rel = "noopener";

  const icone = document.createElement("span");
  icone.className = "manual-icone";
  icone.innerHTML = '<i class="fa-solid fa-file-pdf" aria-hidden="true"></i>';

  const informacoes = document.createElement("span");
  informacoes.className = "manual-info";
  const titulo = document.createElement("strong");
  titulo.textContent = manual.titulo;
  const descricao = document.createElement("span");
  descricao.textContent = manual.descricao;
  informacoes.append(titulo, descricao);

  const categoria = document.createElement("span");
  categoria.className = "manual-categoria";
  categoria.textContent = manual.categoria;

  const data = document.createElement("time");
  data.className = "manual-data";
  data.dateTime = manual.data;
  data.textContent = formatarData(manual.data);

  const seta = document.createElement("i");
  seta.className = "fa-solid fa-chevron-right manual-seta";
  seta.setAttribute("aria-hidden", "true");

  card.append(icone, informacoes, categoria, data, seta);
  return card;
};

const renderizarManuais = (manuais, container) => {
  container.replaceChildren(...manuais.map(criarCardManual));
};

/* ==========================================================
   Pesquisa e filtro por categoria
========================================================== */

const ITENS_POR_PAGINA_PADRAO = 10;

const iniciarPaginaManuais = () => {
  const container = document.querySelector("#lista-manuais");
  const campoPesquisa = document.querySelector("#pesquisa-manuais");
  const botoesCategoria = document.querySelectorAll(".categorias .categoria");
  const navPaginacao = document.querySelector("#paginacao-manuais");
  const contador = document.querySelector("#contador-manuais");
  const seletorItensPorPagina = document.querySelector("#itens-por-pagina");

  if (!container || !campoPesquisa || !botoesCategoria.length) {
    return;
  }

  const estado = {
    pesquisa: "",
    categoria: "todos",
    paginaAtual: 1,
    itensPorPagina: ITENS_POR_PAGINA_PADRAO,
  };

  // Fonte dos dados: hoje é local (window.portalData.manuais), no futuro
  // pode ser substituída por uma chamada a uma API sem alterar as funções abaixo.
  const obterManuaisFiltrados = () => window.portalData.manuais.filter((manual) => {
    const conteudoManual = normalizarTexto([
      manual.titulo,
      manual.descricao,
      manual.categoria,
      manual.departamento,
      ...manual.palavrasChave,
    ].join(" "));
    const correspondePesquisa = !estado.pesquisa || conteudoManual.includes(estado.pesquisa);
    const correspondeCategoria = estado.categoria === "todos" || normalizarTexto(manual.categoria) === estado.categoria;

    return correspondePesquisa && correspondeCategoria;
  });

  /* ==========================================================
     Paginação
  ========================================================== */

  const obterQuantidadeItensPorPagina = (totalItens) => (
    estado.itensPorPagina === "todos" ? Math.max(totalItens, 1) : Number(estado.itensPorPagina)
  );

  const calcularTotalPaginas = (totalItens) => {
    if (totalItens === 0) return 1;
    return Math.ceil(totalItens / obterQuantidadeItensPorPagina(totalItens));
  };

  const obterItensPagina = (manuaisFiltrados) => {
    if (estado.itensPorPagina === "todos") return manuaisFiltrados;
    const porPagina = Number(estado.itensPorPagina);
    const inicio = (estado.paginaAtual - 1) * porPagina;
    return manuaisFiltrados.slice(inicio, inicio + porPagina);
  };

  const atualizarContador = (totalFiltrados, itensExibidos) => {
    if (!contador) return;
    if (totalFiltrados === 0) {
      contador.textContent = "Nenhum manual encontrado";
      return;
    }
    const porPagina = obterQuantidadeItensPorPagina(totalFiltrados);
    const inicio = estado.itensPorPagina === "todos" ? 1 : (estado.paginaAtual - 1) * porPagina + 1;
    const fim = inicio + itensExibidos - 1;
    contador.textContent = `Mostrando ${inicio}–${fim} de ${totalFiltrados} manuais`;
  };

  // Gera a lista de páginas a exibir, agrupando páginas distantes com "..."
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
    const filtrados = obterManuaisFiltrados();
    const totalPaginas = calcularTotalPaginas(filtrados.length);
    estado.paginaAtual = Math.min(Math.max(novaPagina, 1), totalPaginas);
    atualizarLista();
  };

  const atualizarLista = () => {
    const filtrados = obterManuaisFiltrados();
    const totalPaginas = calcularTotalPaginas(filtrados.length);

    if (estado.paginaAtual > totalPaginas) estado.paginaAtual = totalPaginas;

    const itensPagina = obterItensPagina(filtrados);
    renderizarManuais(itensPagina, container);
    atualizarContador(filtrados.length, itensPagina.length);
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

iniciarPaginaManuais();
})();