const pageName = window.location.pathname.split("/").pop() || "index.html";

const pageTitles = {
  "index.html": "In\u00edcio | Portal Vesper",
  "manuais.html": "Manuais | Portal Vesper",
  "contatos.html": "Contatos | Portal Vesper",
  "downloads.html": "Downloads | Portal Vesper",
  "comunicados.html": "Comunicados | Portal Vesper",
};

const addStylesheet = (href) => {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = href;
  document.head.append(stylesheet);
};

document.title = pageTitles[pageName] || "Portal Vesper";
addStylesheet("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
addStylesheet("css/style.css");

if (pageName === "downloads.html") {
  addStylesheet("css/downloads.css");
}


