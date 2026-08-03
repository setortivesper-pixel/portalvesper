# Plano de infraestrutura e evolução — Portal Vesper

**Versão:** 1.0  
**Data:** 03 de agosto de 2026  
**Objetivo:** transformar o protótipo atual em um portal corporativo seguro, administrável e sem custo de infraestrutura na primeira versão.

---

## 1. Resumo executivo

O Portal Vesper já possui uma boa base visual feita em **HTML, CSS e JavaScript puro**. Essa tecnologia é apropriada para o projeto e será mantida: não é necessário migrar para React, Node.js ou outro framework.

O trabalho daqui em diante é conectar as telas existentes a serviços gratuitos que forneçam:

- login por setor e para o administrador;
- armazenamento permanente dos dados;
- proteção dos manuais em PDF;
- painel administrativo que realmente salve as alterações;
- publicação do portal na internet.

## 2. Arquitetura proposta

```text
Colaborador ou administrador
            |
            v
Portal web (HTML + CSS + JavaScript)
            |
            v
Cloudflare Pages — hospedagem gratuita
            |
            v
Supabase
├── Auth: login por setor e administrador
├── PostgreSQL: manuais, downloads e contatos
└── Storage privado: PDFs
            |
            +--> Google Forms: abertura de chamados existente
            +--> Sites oficiais: downloads de softwares
            +--> wa.me: conversa por WhatsApp
```

### Serviços necessários

| Serviço | Plano inicial | Finalidade | Motivo da escolha |
|---|---|---|---|
| GitHub | Repositório privado gratuito | Código e histórico de versões | Evita perda de código e permite colaboração segura |
| Cloudflare Pages | Gratuito | Hospedagem dos arquivos HTML, CSS e JS | Compatível com site estático; simples de publicar |
| Supabase | Gratuito | Banco, autenticação e arquivos | Centraliza o backend sem necessidade de manter servidor próprio |
| Cloudflare Turnstile | Gratuito, se necessário | Proteção contra tentativas automatizadas de login | Reduz abuso sem exibir CAPTCHA invasivo |
| Google Drive | Institucional | Backup dos PDFs e exportações | Cópia operacional separada do portal |
| Google Forms | Já existente | Abertura de chamados | Evita desenvolver sistema de tickets nesta fase |

> Um domínio próprio, como `portal.empresa.com.br`, não é gratuito. Enquanto não houver essa aquisição, o portal pode usar um endereço gratuito como `portal-vesper.pages.dev`.

## 3. Como será o controle de acesso

| Perfil | Acesso |
|---|---|
| Visitante | Apenas manuais classificados como Público |
| Conta de setor | Manuais Públicos e os manuais do seu próprio setor |
| Administrador de TI | Painel completo e todos os conteúdos |

Na primeira versão, cada setor terá uma conta compartilhada, conforme o requisito atual. Exemplos: `rh@portal`, `financeiro@portal` e `producao@portal`.

**Limitação conhecida:** com login compartilhado, não é possível saber qual colaborador específico acessou um arquivo. Caso a empresa necessite auditoria individual no futuro, a evolução natural é criar uma conta pessoal por colaborador.

## 4. Diagnóstico do projeto atual

### O que já está pronto

- Páginas de início, manuais, downloads, contatos e comunicados;
- estilos e identidade visual do portal;
- busca local para manuais e downloads;
- links para formulário de chamados, sites de softwares e WhatsApp;
- interface do painel administrativo para manuais, downloads e contatos;
- formulários visuais para incluir, editar e excluir itens.

### Pendências de frontend

| Pendência | Por que é necessária |
|---|---|
| Substituir listas escritas no HTML/JavaScript por dados do banco | Alterar conteúdo não deve exigir editar código |
| Exibir carregamento, mensagem de erro e estado vazio | Usuário precisa entender o que ocorre se a internet ou o serviço falhar |
| Centralizar o menu/layout compartilhado | Evita menus diferentes ou links desatualizados entre páginas |
| Integrar busca aos dados reais | A busca atual encontra somente conteúdo fixo na página |
| Criar filtros de contatos por setor | É um requisito funcional da agenda corporativa |
| Gerar link WhatsApp a partir do telefone | Evita salvar URL manualmente e reduz erros |
| Validar formulários do admin | Impede links, telefones e PDFs inválidos |
| Proteger a rota administrativa no navegador | A interface não deve aparecer para quem não for administrador |
| Revisar links de manuais sem destino (`#`) | Impede que o usuário encontre conteúdo sem acesso ao arquivo |
| Testar responsividade e acessibilidade | Garante uso em celular, teclado e leitores de tela |

### Pendências de backend

| Pendência | Por que é necessária |
|---|---|
| Criar projeto Supabase | É onde dados, contas e arquivos ficarão centralizados |
| Criar autenticação de admin e setores | O login visual atual não valida credenciais reais |
| Criar banco de dados | Os registros de hoje existem só no HTML/JavaScript |
| Criar Storage privado de PDFs | Os PDFs precisam estar protegidos por setor |
| Configurar regras RLS | O banco, e não o navegador, deve garantir as permissões |
| Conectar CRUD do admin ao Supabase | Hoje as alterações somem ao recarregar a página |
| Implementar upload/substituição/exclusão de PDF | O campo de arquivo atual é apenas demonstrativo |
| Criar registro de auditoria (recomendado) | Ajuda TI a identificar alterações feitas no conteúdo |
| Criar rotina de backup | Protege a empresa de exclusão acidental ou problema externo |

## 4.1 Como o código atual passará a funcionar com o banco

Para que todos vejam a mesma informação — administradores, equipe de desenvolvimento e colaboradores — o portal precisa de um banco de dados central. Sem ele, qualquer alteração ficaria apenas no navegador ou no arquivo HTML de quem a realizou.

O código que já foi desenvolvido será preservado. A integração não substitui a interface atual; ela separa a apresentação dos dados.

| Parte do projeto atual | Continuará responsável por | O que muda |
|---|---|---|
| HTML | Estrutura das páginas, tabelas, cartões, botões e formulários | Deixa de guardar listas fixas de conteúdo; passa a conter os espaços onde os dados serão exibidos |
| CSS | Cores, tipografia, responsividade, layout e identidade visual | Não precisa ser refeito; os cartões e tabelas continuarão com o mesmo visual |
| JavaScript | Busca, filtros, modais, botões e criação dos elementos visuais | Passará a buscar e salvar dados no Supabase |
| Supabase | Não existe no projeto atual | Será a fonte central de dados, contas, permissões e PDFs |

### Exemplo: downloads

Hoje, cada cartão de software está escrito diretamente em `downloads.html`, com nome, descrição e link. Depois da integração, a página continuará com a mesma seção e o mesmo estilo, mas o JavaScript fará o seguinte:

1. Solicita a lista de downloads ao banco.
2. Recebe, por exemplo, nome, descrição, link oficial e ícone do AnyDesk.
3. Cria na tela o mesmo cartão visual que existe hoje.
4. Quando TI altera esse cadastro no admin, todos veem a atualização na próxima visita ou atualização da página.

### Exemplo: manuais

```text
Administrador adiciona “Manual de integração” no painel
                |
                v
PDF é enviado ao Storage privado do Supabase
Dados do manual são salvos no banco
                |
                v
Colaborador abre manuais.html
                |
                v
JavaScript verifica a sessão e consulta os manuais permitidos
                |
                v
O mesmo cartão visual criado no projeto atual é exibido na tela
```

### Exemplo: painel administrativo

Atualmente o painel utiliza o objeto temporário `records` no arquivo `admin/admin.js`. Ao adicionar um item, ele fica somente na memória da aba aberta e desaparece ao atualizar a página.

Após a integração, a sequência será:

1. Administrador preenche o formulário que já existe.
2. JavaScript valida as informações.
3. JavaScript envia os dados ao Supabase.
4. Supabase salva os dados de forma centralizada.
5. O painel atualiza a tabela usando a resposta do banco.
6. As páginas públicas consultam o mesmo banco e exibem o conteúdo atualizado.

Isso significa que não será necessário editar HTML sempre que um manual, contato ou software mudar.

### Migração do conteúdo existente

Os manuais, downloads e contatos já cadastrados nas páginas atuais serão importados uma única vez para o banco. Depois da migração:

- o conteúdo aparecerá no painel administrativo;
- o conteúdo continuará aparecendo nas páginas públicas;
- alterações futuras serão feitas somente no painel;
- o HTML deixará de ser a fonte de dados, mas continuará sendo a base visual do portal.

> Para a integração de produção, será necessário criar o projeto gratuito no Supabase e informar ao código a URL do projeto e a chave pública `anon`. A chave `service_role` nunca deve ser usada ou exposta no frontend.

## 5. Estrutura de dados proposta

### `categories`

Setores e categorias disponíveis: RH, Financeiro, Produção, TI, Público etc.

Campos principais: `id`, `name`, `is_public`, `active`.

### `profiles`

Complementa a conta de login com tipo e setor.

Campos principais: `user_id`, `role` (`admin` ou `sector`), `category_id`, `active`.

### `manuals`

Catálogo dos procedimentos e documentos.

Campos principais: `id`, `category_id`, `title`, `description`, `file_path`, `created_at`, `updated_at`, `active`.

### `downloads`

Catálogo de softwares homologados.

Campos principais: `id`, `name`, `description`, `official_url`, `icon_name`, `active`.

### `contacts`

Agenda corporativa.

Campos principais: `id`, `name`, `department`, `category`, `garage`, `phone`, `active`.

### `audit_logs` — recomendado

Registro de atividades administrativas.

Campos principais: `id`, `user_id`, `action`, `entity`, `entity_id`, `created_at`.

## 6. Segurança dos manuais

Os PDFs devem ficar no bucket privado `manuals` do Supabase Storage. O portal solicitará o arquivo apenas após confirmar a sessão e o setor do usuário.

Não será usado Google Drive como fonte principal de manuais restritos. Um arquivo compartilhado como “qualquer pessoa com o link” pode ser acessado por qualquer pessoa que receba esse endereço, mesmo fora do portal. O Drive continuará sendo útil como local de backup institucional.

As regras de acesso devem garantir:

- qualquer pessoa lê apenas manuais Públicos;
- a conta RH lê manuais Públicos e RH;
- a conta Financeiro lê manuais Públicos e Financeiro;
- somente administrador cria, edita ou exclui registros e arquivos.

## 7. Plano de execução

### Fase 1 — Organização do projeto

**Objetivo:** preparar o código estático para receber dados reais.

1. Criar branch de desenvolvimento e garantir repositório GitHub privado.
2. Centralizar navegação, estilos compartilhados e configurações em arquivos reutilizáveis.
3. Remover dados de demonstração conforme cada módulo for integrado.
4. Revisar links de softwares, manuais e formulários.
5. Definir oficialmente setores, conteúdos públicos e responsáveis pelos cadastros.

**Concluído quando:** o portal mantém o visual atual, tem navegação consistente e não contém links de teste.

### Fase 2 — Criar infraestrutura

**Objetivo:** disponibilizar banco, arquivos e autenticação.

1. Criar conta institucional no Supabase.
2. Criar o projeto `portal-vesper`.
3. Criar as tabelas descritas neste documento.
4. Criar bucket privado `manuals`.
5. Criar contas de admin e de cada setor.
6. Configurar RLS para tabelas e arquivos.
7. Registrar em local seguro as credenciais e responsáveis pelas contas.

**Concluído quando:** cada perfil recebe somente as permissões previstas, mesmo se tentar acessar diretamente a API.

### Fase 3 — Login e proteção do painel

**Objetivo:** substituir a simulação de login por autenticação real.

1. Conectar o formulário de login ao Supabase Auth.
2. Manter a sessão no navegador com segurança.
3. Redirecionar usuário comum para a área permitida.
4. Impedir abertura do painel admin sem sessão de administrador.
5. Criar botão de sair.
6. Opcionalmente adicionar Turnstile ao login.

**Concluído quando:** credenciais erradas são recusadas e a URL do painel não oferece acesso indevido.

### Fase 4 — Módulo de manuais

**Objetivo:** entregar o recurso mais sensível do portal.

1. Ler a lista de manuais do Supabase.
2. Mostrar apenas manuais permitidos para a sessão atual.
3. Implementar pesquisa por título e categoria.
4. Fazer upload de PDF pelo painel administrativo.
5. Gerar acesso ao PDF privado conforme a permissão.
6. Permitir editar categoria, título e arquivo.
7. Excluir PDF do Storage somente após confirmação administrativa.

**Concluído quando:** um setor não consegue ver nem baixar manual de outro setor.

### Fase 5 — Downloads e contatos

**Objetivo:** tornar o conteúdo editável sem mexer no código.

1. Buscar downloads do banco e renderizar os cartões.
2. Validar URLs e manter apenas fontes oficiais.
3. Buscar contatos do banco.
4. Implementar pesquisa por nome e filtro por setor.
5. Formatar telefone e gerar link `https://wa.me/55DDDNUMERO` automaticamente.
6. Conectar inclusão, edição e exclusão do painel administrativo.

**Concluído quando:** administrador altera dados e a alteração aparece imediatamente no portal.

### Fase 6 — Testes, publicação e operação

**Objetivo:** colocar o portal em uso com controle operacional.

1. Testar os perfis Público, cada setor e Administrador.
2. Testar upload, troca e exclusão de PDFs.
3. Testar links de software, formulário de chamado e WhatsApp.
4. Testar desktop, celular, navegação por teclado e conexão lenta.
5. Conectar repositório ao Cloudflare Pages.
6. Publicar no endereço gratuito `*.pages.dev`.
7. Estabelecer backup mensal de dados e PDFs no Google Drive institucional.
8. Criar uma checklist mensal para atualização de contatos, links e senhas compartilhadas.

**Concluído quando:** o portal está publicado, acessível e validado pelos responsáveis de cada setor.

## 8. Ordem de prioridade

1. Criar Supabase, tabelas, Storage e regras RLS.
2. Implementar login e bloqueio administrativo.
3. Integrar manuais e PDFs privados.
4. Integrar painel administrativo real.
5. Integrar downloads e contatos.
6. Revisar busca geral, responsividade e acessibilidade.
7. Publicar e homologar.

Essa ordem prioriza a proteção dos documentos internos. Downloads e contatos trazem valor importante, mas envolvem menos risco do que o acesso aos manuais por setor.

## 9. Responsabilidades sugeridas

| Responsável | Responsabilidades |
|---|---|
| Equipe de desenvolvimento | Implementar integrações, banco, permissões, testes e publicação |
| TI administrador | Manter credenciais, cadastrar conteúdo, revisar links e executar backups |
| Responsáveis dos setores | Fornecer manuais corretos, validar permissões e manter contatos atualizados |
| Gestor do projeto | Aprovar categorias, regras de acesso e entrada em produção |

## 10. Limites da versão gratuita

Esta proposta é adequada para uma primeira versão interna de pequeno ou médio porte. O Supabase Free oferece 500 MB de banco, 1 GB de armazenamento de arquivos e 5 GB de transferência; o uso deve ser acompanhado. Projetos gratuitos também podem ser pausados após uma semana de inatividade.

O Cloudflare Pages oferece hospedagem estática gratuita e os arquivos do projeto atual são compatíveis com a plataforma. Se, no futuro, o portal se tornar essencial para a operação ou exigir muitos PDFs e tráfego, deverá ser planejada a migração para serviços com suporte, SLA e capacidade contratada.

## 11. Critérios para considerar o projeto pronto

- [ ] Portal publicado em endereço HTTPS.
- [ ] Login real de administrador e de cada setor.
- [ ] Painel administrativo protegido e funcional.
- [ ] CRUD de manuais, downloads e contatos salvando no banco.
- [ ] PDFs privados e acessíveis somente pelo perfil correto.
- [ ] Pesquisa e filtros funcionando com dados reais.
- [ ] Links de downloads revisados e oficiais.
- [ ] Link de WhatsApp gerado corretamente para todos os contatos.
- [ ] Backup documentado e executado.
- [ ] Testes realizados com os responsáveis dos setores.

## 12. Referências

- [Cloudflare Pages — limites do plano](https://developers.cloudflare.com/pages/platform/limits/)
- [Supabase — planos e limites](https://supabase.com/pricing)
- [Google Drive — compartilhamento por link](https://support.google.com/drive/answer/7166529?hl=en)
- [Cloudflare Turnstile — início e validação](https://developers.cloudflare.com/turnstile/get-started/)