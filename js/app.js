const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".menu a[href]").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

const searchField = document.querySelector("#pesquisa-manuais");

if (searchField) {
  const manuals = document.querySelectorAll(".manual");

  searchField.addEventListener("input", () => {
    const searchTerm = searchField.value.trim().toLocaleLowerCase("pt-BR");

    manuals.forEach((manual) => {
      const manualText = manual.textContent.toLocaleLowerCase("pt-BR");
      manual.hidden = !manualText.includes(searchTerm);
    });
  });
}

const downloadsSearchField = document.querySelector("#pesquisa-downloads");

if (downloadsSearchField) {
  const programs = document.querySelectorAll(".card-programa");

  downloadsSearchField.addEventListener("input", () => {
    const searchTerm = downloadsSearchField.value.trim().toLocaleLowerCase("pt-BR");

    programs.forEach((program) => {
      const programText = program.textContent.toLocaleLowerCase("pt-BR");
      program.hidden = !programText.includes(searchTerm);
    });
  });
}

const portalSearchField = document.querySelector("#pesquisa-geral");

if (portalSearchField) {
  const searchResults = document.querySelector("#resultados-pesquisa");
  const resultsSummary = document.querySelector("#resumo-pesquisa");
  const resultsList = document.querySelector("#lista-resultados");
  const clearSearchButton = document.querySelector("#limpar-pesquisa");
  let searchableContent = [
    {
      type: "Manual",
      icon: "fa-file-pdf",
      title: "Acesso remoto VPN",
      description: "Passo a passo para conectar na VPN da empresa.",
      category: "TI",
      href: "manuais/ti/FLW.pdf",
    },
    {
      type: "Manual",
      icon: "fa-file-pdf",
      title: "Cadastro de funcionário no relógio de ponto",
      description: "Passo a passo para cadastro de funcionários com e sem digital.",
      category: "RH",
      href: "manuais/rh/ComoRealizarInclusaoColaboradores.pdf",
    },
    {
      type: "Manual",
      icon: "fa-file-pdf",
      title: "Início rápido AnyDesk",
      description: "Passo a passo para conectar no AnyDesk.",
      category: "TI",
      href: "https://drive.google.com/file/d/1T74uyVgjelNBi6IO8IwCOMtvf_OXnwu_/view?usp=sharing",
      external: true,
    },
    { type: "Download", icon: "fa-download", title: "AnyDesk", description: "Acesso remoto para suporte de TI.", category: "Programa", href: "https://anydesk.com/pt/downloads", external: true },
    { type: "Download", icon: "fa-download", title: "Google Chrome", description: "Navegador padrão homologado pela empresa.", category: "Programa", href: "https://www.google.com/chrome/", external: true },
    { type: "Download", icon: "fa-download", title: "Firefox", description: "Navegador alternativo homologado pela empresa.", category: "Programa", href: "https://www.mozilla.org/pt-BR/firefox/new/", external: true },
    { type: "Download", icon: "fa-download", title: "Adobe Reader", description: "Leitor de arquivos PDF.", category: "Programa", href: "https://acrobat.adobe.com/br/pt/acrobat/pdf-reader.html", external: true },
    { type: "Download", icon: "fa-download", title: "Foxit PDF Reader", description: "Leitor de PDF alternativo e leve.", category: "Programa", href: "https://www.foxit.com/pdf-reader/", external: true },
    { type: "Download", icon: "fa-download", title: "Spark", description: "Cliente de e-mail usado pela equipe.", category: "Programa", href: "https://sparkmailapp.com/download", external: true },
    { type: "Download", icon: "fa-download", title: "WhatsApp", description: "Aplicativo de mensagens para computador.", category: "Programa", href: "https://www.whatsapp.com/download", external: true },
  ];

  const getContentFromPage = async (page, selector, type, icon) => {
    const response = await fetch(page);

    if (!response.ok) {
      throw new Error(`Não foi possível carregar ${page}.`);
    }

    const documentFromPage = new DOMParser().parseFromString(await response.text(), "text/html");

    return [...documentFromPage.querySelectorAll(selector)].map((item) => ({
      type,
      icon,
      title: item.querySelector(".manual-info strong, h3")?.textContent.trim() || "Sem título",
      description: item.querySelector(".manual-info span, p")?.textContent.trim() || "",
      category: item.querySelector(".manual-categoria")?.textContent.trim() || "Programa",
      href: item.getAttribute("href") || "#",
      external: item.target === "_blank",
    }));
  };

  const loadSearchableContent = async () => {
    try {
      const [manuals, downloads] = await Promise.all([
        getContentFromPage("manuais.html", ".manual", "Manual", "fa-file-pdf"),
        getContentFromPage("downloads.html", ".card-programa", "Download", "fa-download"),
      ]);

      if (manuals.length || downloads.length) {
        searchableContent = [...manuals, ...downloads];
      }

      if (portalSearchField.value.trim()) {
        searchPortal();
      }
    } catch {
      // Ao abrir os arquivos diretamente pelo computador, o navegador bloqueia fetch.
      // Nesse caso, a busca usa o catálogo básico declarado acima.
    }
  };

  const normalizeSearchText = (text) => text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");

  const renderSearchResults = (items, query) => {
    resultsList.replaceChildren();
    searchResults.hidden = false;

    if (!items.length) {
      resultsSummary.textContent = `Nenhum resultado para “${query}”.`;
      const emptyState = document.createElement("p");
      emptyState.className = "busca-vazia";
      emptyState.textContent = "Tente pesquisar por outro termo, categoria ou nome de programa.";
      resultsList.append(emptyState);
      return;
    }

    resultsSummary.textContent = `${items.length} resultado${items.length > 1 ? "s" : ""} para “${query}”.`;

    items.forEach((item) => {
      const result = document.createElement("a");
      result.className = "resultado-item";
      result.href = item.href;

      if (item.external || item.type === "Manual") {
        result.target = "_blank";
        result.rel = "noopener";
      }

      result.innerHTML = `
        <span class="resultado-icone resultado-${item.type.toLocaleLowerCase("pt-BR")}"><i class="fa-solid ${item.icon}" aria-hidden="true"></i></span>
        <span class="resultado-conteudo"><span class="resultado-meta">${item.type} · ${item.category}</span><strong>${item.title}</strong><span>${item.description}</span></span>
        <i class="fa-solid fa-arrow-up-right-from-square resultado-seta" aria-hidden="true"></i>`;
      resultsList.append(result);
    });
  };

  const searchPortal = () => {
    const query = portalSearchField.value.trim();

    if (!query) {
      searchResults.hidden = true;
      resultsList.replaceChildren();
      return;
    }

    const normalizedQuery = normalizeSearchText(query);
    const matches = searchableContent.filter((item) => normalizeSearchText(Object.values(item).join(" ")).includes(normalizedQuery));
    renderSearchResults(matches, query);
  };

  void loadSearchableContent();
  portalSearchField.addEventListener("input", searchPortal);
  portalSearchField.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      portalSearchField.value = "";
      searchPortal();
      portalSearchField.blur();
    }
  });
  clearSearchButton.addEventListener("click", () => {
    portalSearchField.value = "";
    searchPortal();
    portalSearchField.focus();
  });
}

const adminModal = document.querySelector("#modal-admin");

if (adminModal) {
  const openAdminModal = document.querySelector("[data-admin-open]");
  const loginField = adminModal.querySelector("#admin-login");
  const passwordField = adminModal.querySelector("#admin-senha");
  const passwordToggle = adminModal.querySelector("[data-toggle-password]");
  const closeAdminModal = () => {
    adminModal.classList.remove("aberto");
    adminModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-aberto");
    openAdminModal?.focus();
  };
  const showAdminModal = () => {
    adminModal.classList.add("aberto");
    adminModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-aberto");
    loginField.focus();
  };

  openAdminModal?.addEventListener("click", showAdminModal);
  adminModal.querySelectorAll("[data-admin-close]").forEach((button) => button.addEventListener("click", closeAdminModal));
  passwordToggle.addEventListener("click", () => {
    const showPassword = passwordField.type === "password";
    passwordField.type = showPassword ? "text" : "password";
    passwordToggle.setAttribute("aria-label", showPassword ? "Ocultar senha" : "Mostrar senha");
    passwordToggle.innerHTML = `<i class="fa-regular fa-eye${showPassword ? "-slash" : ""}" aria-hidden="true"></i>`;
  });
  adminModal.querySelector("#form-admin").addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "admin/";
    // Integre aqui a autenticação do seu backend antes de liberar o painel.
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && adminModal.classList.contains("aberto")) closeAdminModal();
  });
}
