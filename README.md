# Jonas — Personal Chef Omakase (Site Premium)

Site institucional de alto padrão para um Personal Chef especializado em culinária japonesa,
desenvolvido em **React 18**, **CSS Modules** e animações avançadas com **GSAP** (`useGSAP` + `ScrollTrigger`).

## Como rodar o projeto

```bash
npm install
npm run dev
```

O site abrirá em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

Os arquivos finais ficam na pasta `dist/`, prontos para publicação em qualquer hospedagem estática
(Vercel, Netlify, servidor próprio etc).

## Estrutura do projeto

```
src/
  assets/                  → imagem do chef
  components/
    Header/                → navegação fixa com menu mobile
    Hero/                  → seção de abertura em tela cheia
    Servicos/               → Omakase, Corporativo, Jantares, Consultoria
    Galeria/                → galeria estilo masonry
    SobreChef/              → biografia editorial + linha do tempo
    Certificacoes/          → credenciais, selos e menções de imprensa
    Processo/               → etapas de contratação
    Depoimentos/            → depoimentos com seletor
    FAQ/                    → perguntas frequentes em acordeão
    CTAFinal/               → chamada final + formulário de orçamento
    Footer/                 → rodapé
    ParticulasFundo/        → camada de partículas ambiente (canvas)
  styles/global.css         → tokens de cor, tipografia e reset
  App.jsx / main.jsx        → montagem da aplicação
```

Todas as classes CSS e nomes de componentes/variáveis foram escritos em português para
facilitar manutenção pela equipe local.

## Identidade visual

- **Paleta:** preto profundo (`#0a0908`), vermelho japonês (`#a91d24` / `#d4322f`), dourado suave
  (`#c8a865`) e off-white (`#f1ece1`).
- **Tipografia:** Playfair Display (títulos), Cormorant Garamond itálico (textos editoriais/eyebrows),
  Inter (interface e corpo de texto).
- **Elemento assinatura:** um selo circular vermelho com caractere japonês (`匠` — "mestre artesão"),
  usado como marca pessoal do chef no cabeçalho, hero, rodapé e formulário.

## Substituindo imagens de exemplo

A galeria e alguns painéis visuais usam blocos gerados em CSS (gradientes + caracteres japoneses
como textura) no lugar de fotografias reais, já que nenhuma imagem de prato/evento foi fornecida.
Basta trocar os blocos `.superficieItem` / `.painelVisual` por tags `<img>` com as fotos reais do
chef — a estrutura de animação (GSAP) já está preparada para revelar imagens com `clip-path`.

## Contato usado como placeholder

E-mail, WhatsApp e redes sociais no rodapé e na seção de contato são exemplos — atualize com os
dados reais do chef antes de publicar.
