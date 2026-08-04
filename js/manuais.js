(() => {
/* ==========================================================
   Dados dos manuais
========================================================== */

window.portalData = window.portalData || {};

window.portalData.manuais = [
  { titulo: "Acesso remoto VPN", descricao: "Passo a passo para conectar na VPN da empresa.", categoria: "TI", departamento: "Tecnologia da Informação", data: "2026-07-20", arquivo: "#", palavrasChave: ["vpn", "acesso remoto", "ti"] },
  { titulo: "Cadastro de funcionário no relógio de ponto", descricao: "Passo a passo para cadastro de funcionários com e sem digital.", categoria: "RH", departamento: "Recursos Humanos", data: "2026-07-29", arquivo: "#", palavrasChave: ["rh", "funcionário", "ponto", "digital"] },
  { titulo: "Início Rápido AnyDesk", descricao: "Passo a passo para conectar no AnyDesk.", categoria: "TI", departamento: "Tecnologia da Informação", data: "2026-07-31", arquivo: "https://drive.google.com/file/d/1T74uyVgjelNBi6IO8IwCOMtvf_OXnwu_/view?usp=sharing", palavrasChave: ["anydesk", "acesso remoto", "ti"] },
  { titulo: "Lightshot - Atalhos", descricao: "Passo a passo para utilizar os atalhos do Lightshot.", categoria: "TI", departamento: "Tecnologia da Informação", data: "2026-07-31", arquivo: "https://drive.google.com/file/d/186ewIY9P7qpKTO_tSmF3SCDUnFo1OyCp/view?usp=sharing", palavrasChave: ["lightshot", "atalhos", "captura de tela", "ti"] },
  { titulo: "Utilização do ABM Protege", descricao: "Monitoramento de veículos, alertas, cercas, relatórios e trocas de garagem.", categoria: "Operacional", departamento: "Operação", data: "2026-08-04", arquivo: "https://drive.google.com/file/d/1I_sNJJby9ypSxfjNlHCK4EnZ1j5VW54r/view?usp=drive_link", palavrasChave: ["abm", "protege", "veículos", "garagem", "operação"] },
  { titulo: "Verificação de Wi-Fi", descricao: "Procedimentos para diagnóstico, testes, troca de chip e roteadores dos veículos.", categoria: "Operacional", departamento: "Operação", data: "2026-08-04", arquivo: "https://docs.google.com/document/d/1YUIFH5vAT_9Q17e4N8KSDPJNCwivl95o/edit?usp=drive_link&ouid=109244154480955470366&rtpof=true&sd=true", palavrasChave: ["wifi", "wi-fi", "chip", "roteador", "veículos"] },
  { titulo: "Troca de Veículos entre Garagens", descricao: "Procedimento para transferência de veículos entre garagens e atualização dos sistemas.", categoria: "Operacional", departamento: "Operação", data: "2026-08-04", arquivo: "https://drive.google.com/file/d/16Rx0lceAjiQEAPGT-lKLLQTvoTBumsIy/view?usp=drive_link", palavrasChave: ["veículos", "garagens", "transferência", "operação"] },
  { titulo: "ABMControl", descricao: "Procedimento para vincular motoristas aos veículos no sistema ABMControl.", categoria: "Operacional", departamento: "Operação", data: "2026-08-04", arquivo: "https://drive.google.com/file/d/1aDan3n9aoLehOm8vNKMrXWaU_FqW14j6/view?usp=drive_link", palavrasChave: ["abmcontrol", "motoristas", "veículos", "operação"] },
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

const iniciarPaginaManuais = () => {
  const container = document.querySelector("#lista-manuais");
  const campoPesquisa = document.querySelector("#pesquisa-manuais");
  const botoesCategoria = document.querySelectorAll(".categorias .categoria");

  if (!container || !campoPesquisa || !botoesCategoria.length) {
    return;
  }

  const estado = { pesquisa: "", categoria: "todos" };

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

  const atualizarLista = () => renderizarManuais(obterManuaisFiltrados(), container);

  campoPesquisa.addEventListener("input", () => {
    estado.pesquisa = normalizarTexto(campoPesquisa.value.trim());
    atualizarLista();
  });

  botoesCategoria.forEach((botao) => {
    botao.addEventListener("click", () => {
      estado.categoria = botao.dataset.filtro || "todos";
      botoesCategoria.forEach((item) => item.classList.toggle("ativa", item === botao));
      atualizarLista();
    });
  });

  atualizarLista();
};

iniciarPaginaManuais();
})();
