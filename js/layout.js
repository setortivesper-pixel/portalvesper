const navigationItems = [
  { href: "index.html", icon: "fa-house", label: "Início" },
  { href: "manuais.html", icon: "fa-book-open", label: "Manuais" },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf6FDbbCepjjwuYp5Xspb2bBjO5a2hNAEAKkRcPxEtlUfdWHg/viewform",
    icon: "fa-headset",
    label: "Abrir chamado",
    external: true,
  },
  { href: "downloads.html", icon: "fa-download", label: "Downloads" },
  { href: "comunicados.html", icon: "fa-bullhorn", label: "Comunicados" },
  { href: "contatos.html", icon: "fa-users", label: "Contatos" },
];

const sidebar = document.querySelector(".sidebar");

if (sidebar) {
  const menuItems = navigationItems
    .map(({ href, icon, label, external }) => {
      const externalAttributes = external ? ' target="_blank" rel="noopener"' : "";

      return `
        <a href="${href}"${externalAttributes}>
          <i class="fa-solid ${icon} menu-icon" aria-hidden="true"></i>
          ${label}
        </a>`;
    })
    .join("");

  sidebar.innerHTML = `
    <a class="brand" href="index.html" aria-label="Portal Vesper - início">
      <img src="img/GVSPLogo.png" class="logo" alt="Vesper Transportes">
    </a>
    <nav class="menu" aria-label="Navegação principal">
      ${menuItems}
    </nav>
    <footer class="versao">
      <p><strong>Versão 1.0.0</strong></p>
      <p>© 2026 Vesper Transportes</p>
    </footer>`;
}
