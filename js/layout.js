const navigationItems = [
  { href: "index.html", icon: "fa-house", label: "In&iacute;cio" },
  { href: "manuais.html", icon: "fa-book", label: "Manuais" },
  { href: "downloads.html", icon: "fa-download", label: "Downloads" },
  { href: "contatos.html", icon: "fa-users", label: "Contatos" },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdu_Fy3T8WwJEhrBtzwZtkszHQnvJlROd9Ii-frDnGXRZkDmA/viewform?usp=header",
    icon: "fa-headset",
    label: "Abrir chamado",
    external: true,
  },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSclePi4p98n_6_5q0kDRiaIKilNBabF70FzvFHjVcnyM0G-OQ/viewform?usp=publish-editor",
    icon: "fa-lightbulb",
    label: "Sugerir Melhoria",
    external: true,
  },
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
      <p>ⒶⒸⒸ 2026 Vesper Transportes</p>
    </footer>`;
}