const pages = [
  ['manuais', 'Manuais', 'fa-book-open'],
  ['downloads', 'Downloads', 'fa-download'],
  ['contatos', 'Contatos', 'fa-address-book'],
];

const records = {
  manuais: [
    { categoria: 'RH', nome: 'Procedimento de admissão', arquivo: 'procedimento-admissao.pdf' },
    { categoria: 'Operacional', nome: 'Checklist de manutenção', arquivo: 'checklist-manutencao.pdf' },
    { categoria: 'Financeiro', nome: 'Política de reembolsos', arquivo: 'politica-reembolsos.pdf' },
  ],
  downloads: [
    { nome: 'AnyDesk', descricao: 'Software de acesso remoto para suporte da equipe de TI.', link: 'https://anydesk.com/pt/downloads' },
    { nome: 'Google Chrome', descricao: 'Navegador homologado para acesso aos sistemas corporativos.', link: 'https://www.google.com/chrome/' },
    { nome: 'Adobe Reader', descricao: 'Leitor de arquivos PDF utilizado nos documentos do portal.', link: 'https://get.adobe.com/br/reader/' },
  ],
  contatos: [
    { setor: 'Recursos Humanos', garagem: 'Matriz', categoria: 'Administrativo', nome: 'Ana Costa' },
    { setor: 'Tecnologia', garagem: 'Matriz', categoria: 'TI', nome: 'Diego Martins' },
    { setor: 'Financeiro', garagem: 'Garagem Norte', categoria: 'Administrativo', nome: 'Beatriz Rocha' },
  ],
};

const schemas = {
  manuais: { title: 'Manuais', button: 'Adicionar Manual', columns: [['categoria', 'Categoria'], ['nome', 'Nome do manual'], ['arquivo', 'Arquivo']], fields: [['categoria', 'Categoria', 'text'], ['nome', 'Nome do manual', 'text'], ['arquivo', 'Anexar arquivo PDF', 'file']] },
  downloads: { title: 'Downloads', button: 'Adicionar Download', columns: [['nome', 'Nome do software'], ['descricao', 'Descrição'], ['link', 'Link']], fields: [['nome', 'Nome do software', 'text'], ['descricao', 'Descrição', 'text'], ['link', 'Link', 'url']] },
  contatos: { title: 'Contatos', button: 'Adicionar Contato', columns: [['setor', 'Setor'], ['garagem', 'Garagem'], ['categoria', 'Categoria'], ['nome', 'Nome']], fields: [['setor', 'Setor', 'text'], ['garagem', 'Garagem', 'text'], ['categoria', 'Categoria', 'text'], ['nome', 'Nome', 'text']] },
};

const nav = document.querySelector('#admin-nav');
const content = document.querySelector('#admin-content');
const pageTitle = document.querySelector('#page-title');
const modal = document.querySelector('#admin-modal');
let currentPage = 'manuais';
let editingIndex = null;

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
nav.innerHTML = pages.map(([id, label, icon]) => `<button type="button" data-page="${id}"><i class="fa-solid ${icon}"></i><span>${label}</span></button>`).join('');

function render(page) {
  currentPage = page;
  const config = schemas[page];
  pageTitle.textContent = config.title;
  nav.querySelectorAll('button').forEach((button) => button.classList.toggle('active', button.dataset.page === page));
  content.innerHTML = `<section class="page-heading"><div><p>Gerenciamento de conteúdo</p><h2>${config.title}</h2><span>Cadastre e mantenha as informações disponíveis no portal.</span></div><button class="primary-button" data-create><i class="fa-solid fa-plus"></i> ${config.button}</button></section><section class="table-card"><div class="table-wrap"><table><thead><tr>${config.columns.map(([, label]) => `<th>${label}</th>`).join('')}<th>Ações</th></tr></thead><tbody>${records[page].map((record, index) => `<tr>${config.columns.map(([field], columnIndex) => `<td>${columnIndex === 0 ? `<strong>${escapeHtml(record[field])}</strong>` : escapeHtml(record[field])}</td>`).join('')}<td class="table-actions"><button type="button" data-edit="${index}" aria-label="Editar"><i class="fa-solid fa-pen"></i></button><button type="button" data-delete="${index}" aria-label="Excluir"><i class="fa-solid fa-trash"></i></button></td></tr>`).join('')}</tbody></table></div></section>`;
  closeMenu();
}

function openModal(index = null) {
  editingIndex = index;
  const config = schemas[currentPage];
  const record = index === null ? {} : records[currentPage][index];
  document.querySelector('#modal-title').textContent = index === null ? config.button : `Editar ${config.title.slice(0, -1)}`;
  document.querySelector('#modal-text').textContent = 'Preencha os dados abaixo. As alterações ficam apenas nesta sessão simulada.';
  document.querySelector('#modal-body').innerHTML = `<form id="crud-form" class="crud-form">${config.fields.map(([field, label, type]) => `<label>${label}${type === 'file' ? `<span class="file-upload"><input name="${field}" type="file" accept="application/pdf,.pdf" ${index === null ? 'required' : ''}><i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i><span><strong>Selecionar arquivo PDF</strong><em>${record[field] ? escapeHtml(record[field]) : 'Nenhum arquivo selecionado'}</em></span></span>` : `<input name="${field}" type="${type}" value="${escapeHtml(record[field] || '')}" required>`}</label>`).join('')}<div class="modal-actions"><button class="secondary-button" type="button" data-modal-close>Cancelar</button><button class="primary-button" type="submit">${index === null ? 'Adicionar' : 'Salvar alterações'}</button></div></form>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.querySelector('#crud-form input').focus();
}

function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
function closeMenu() { document.querySelector('#admin-sidebar').classList.remove('open'); document.querySelector('#admin-backdrop').classList.remove('show'); }

nav.addEventListener('click', (event) => { const button = event.target.closest('[data-page]'); if (button) render(button.dataset.page); });
content.addEventListener('click', (event) => {
  if (event.target.closest('[data-create]')) openModal();
  const edit = event.target.closest('[data-edit]');
  const remove = event.target.closest('[data-delete]');
  if (edit) openModal(Number(edit.dataset.edit));
  if (remove && window.confirm('Deseja excluir este registro?')) { records[currentPage].splice(Number(remove.dataset.delete), 1); render(currentPage); }
});
modal.addEventListener('click', (event) => {
  if (event.target.closest('[data-modal-close]')) closeModal();
});
modal.addEventListener('submit', (event) => {
  if (!event.target.matches('#crud-form')) return;
  event.preventDefault();
  const item = Object.fromEntries(new FormData(event.target));
  if (item.arquivo instanceof File) item.arquivo = item.arquivo.name || (editingIndex === null ? 'arquivo.pdf' : records[currentPage][editingIndex].arquivo);
  if (editingIndex === null) records[currentPage].push(item); else records[currentPage][editingIndex] = item;
  closeModal(); render(currentPage);
});
modal.addEventListener('change', (event) => {
  if (event.target.type !== 'file') return;
  const filename = event.target.files[0]?.name || 'Nenhum arquivo selecionado';
  event.target.closest('.file-upload').querySelector('em').textContent = filename;
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
document.querySelector('#menu-toggle').addEventListener('click', () => { document.querySelector('#admin-sidebar').classList.add('open'); document.querySelector('#admin-backdrop').classList.add('show'); });
document.querySelector('#admin-backdrop').addEventListener('click', closeMenu);
render(currentPage);
