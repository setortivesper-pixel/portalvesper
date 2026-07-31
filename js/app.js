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