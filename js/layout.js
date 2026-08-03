const navigationItems = [
  { href: "index.html", icon: "fa-house", label: "In&iacute;cio" },
  { href: "manuais.html", icon: "fa-solid fa-book", label: "Manuais" },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf6FDbbCepjjwuYp5Xspb2bBjO5a2hNAEAKkRcPxEtlUfdWHg/viewform",
    icon: "fa-headset",
    label: "Abrir chamado",
    external: true,
  },
  { href: "downloads.html", icon: "fa-download", label: "Downloads" },
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
    <a class="brand" href="index.html" aria-label="Portal Vesper - in&iacute;cio">
      <img src="img/GVSPLogo.png" class="logo" alt="Vesper Transportes">
    </a>
    <nav class="menu" aria-label="Navega&ccedil;&atilde;o principal">
      ${menuItems}
    </nav>
    <footer class="versao">
      <p><strong>Vers&atilde;o 1.0.0</strong></p>
      <p>&copy; 2026 Vesper Transportes</p>
    </footer>`;
}
