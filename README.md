# Ação Verde — SPA

Projeto: Single-Page Application (SPA) para a ONG Ação Verde.
Este repositório contém a versão final com acessibilidade (WCAG 2.1 AA), build otimizado e fluxo de deploy via GitHub Actions.

## Estrutura
- `index.html` — layout base
- `pages/*` — templates (conteúdo)
- `css/*` — estilos (base, layout, components, themes, responsive)
- `js/*` — código modular (app, router, templates, formValidation, accessibility)
- `dist/` — saída do build (gerada pelo script `npm run build`)

## Instalação (local)
```bash
git clone https://github.com/SEU_USUARIO/acao-verde-spa.git
cd acao-verde-spa
npm install
npm run build
npm run start
# abrir http://localhost:5000

# 3 — Procedimentos recomendados para imagens e otimização
- Antes de commitar, comprima imagens:
  - `imagemin imagens/* --out-dir=imagens/` (ou use `imagemin-cli`)
- Geração de sprites ou WebP para navegadores que suportam:
  - `cwebp imagem.jpg -q 80 -o imagem.webp`
- Habilite cache-control no servidor de produção (GitHub Pages já faz algum cache).

---

# 4 — Estratégia de versionamento e commits (resumo)
- Branches:
  - `main` (produção)
  - `develop` (integração)
  - `feature/<nome>` (novas features)
  - `hotfix/<nome>` (correções urgentes)
- Commits: **Conventional Commits**:
  - `feat(projetos): adicionar página de projetos em SPA`
  - `fix(form): corrigir validação de CPF`
  - `chore(build): adicionar esbuild e scripts`
- Releases:
  - Use tags `vX.Y.Z`.
  - No GitHub gere a Release com notas, checklist e link para artefatos.

---

# 5 — Checklist de entrega final (o que deve constar no repositório)
1. Fonte versionada no GitHub (commit history organizado com Conventional Commits).  
2. `README.md` completo (já acima).  
3. Workflow GitHub Actions para build+deploy (adicionado).  
4. `package.json` + `postcss.config.js` (adicionados).  
5. `dist/` gerado via `npm run build` (não commitar `node_modules`).  
6. Testes de acessibilidade: executar `axe` e consertar os issues maiores.  
7. Imagens otimizadas.  
8. Release tag final (ex: `v1.0.0`) e CHANGELOG.

---

# 6 — Próximos passos que eu posso executar imediatamente (escolha)
- 1) **Gerar .zip** com a versão atual + novos arquivos (incluindo `package.json`, `accessibility.js`, `README.md`, workflow).  
- 2) **Gerar todos os arquivos no repositório aqui** (eu já gerei o ZIP do passo anterior antes; posso gerar outro incluindo os arquivos acima).  
- 3) **Criar um `CHANGELOG.md` e `RELEASE_TEMPLATE.md`** com um modelo pronto.  
- 4) **Instruções passo-a-passo para subir ao GitHub (git commands)** e criar a primeira release.

Diz qual destes você quer agora (ou escolha múltiplas) — eu **vou fornecer os arquivos/zip e os comandos** prontos para uso.
