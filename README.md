# 🚀 ClipStream

**ClipStream** é uma aplicação web moderna e responsiva para **exibição, busca e interação com vídeos e artigos**, com foco em performance, reatividade e excelente experiência do usuário. A arquitetura foi aprimorada com hooks customizados, state management escalável e estilização modular com suporte a dark mode.

![Demo do ClipStream](./public/ClipstreamGIF.gif)

---

## ✨ Funcionalidades

- 🔍 **Busca de Vídeos:** Filtro instantâneo por título com debounce.
- 🎬 **Listagem de Vídeos:** Cards com thumbnails interativos e botão de play.
- 📄 **Detalhes do Vídeo:** Página dedicada com player, likes, dislikes e comentários.
- 💬 **Comentários:** Interação em tempo real com envio assíncrono e username randômico.
- 👍👎 **Likes/Dislikes:** Sistema reativo com controle de estado e persistência.
- 📰 **Artigos em Destaque:** Carrossel estilizado com contagem de visualizações.
- 📱 **Responsividade Completa:** Adaptável de mobile a 4K.
- 🌘 **Dark Mode:** Ativado por tokens via `oklch` com Tailwind.
- 🌌 **Animação p5.js:** Efeito dinâmico no header com WebGL.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia             | Descrição                                         |
| ---------------------- | ------------------------------------------------- |
| **React 18**           | SPA moderna com JSX e reatividade                 |
| **TypeScript**         | Tipagem segura e modularização avançada           |
| **Redux + Thunk**      | Gerenciamento global assíncrono                   |
| **React Router DOM**   | Navegação entre páginas                           |
| **Axios**              | Requisições HTTP com interceptadores              |
| **Swiper**             | Carrossel de artigos responsivo                   |
| **p5.js**              | Animação vetorial no header                       |
| **Material UI Icons**  | Ícones para ações interativas                     |
| **Jest + Testing Lib** | Testes unitários de actions e reducers            |
| **TailwindCSS**        | Estilização com utilitários e dark mode integrado |
| **New Relic**          | Monitoramento de performance                      |
| **Prettier**           | Padronização de código                            |

---

## 🔧 Implementações Técnicas

### 🎯 Estado Global com Redux

- `videoReducer`: Lista de vídeos e termos de busca
- `videoDetailReducer`: Detalhes, likes, dislikes e comentários
- Modularização com actions e reducers separados

### 🧪 Testes Unitários

- Cobertura de actions e reducers
- Testes com Jest e React Testing Library

### 🧩 Componentização

- `CardComponent`, `Carousel`, `Header`, `Input`, `ExpandableText`, `Skeletons`, `Typography`
- Design escalável com props reutilizáveis

### 📦 Hooks Customizados

- `useFilteredVideos`: Filtra resultados conforme o termo de busca
- `useFetchData`: Consome vídeos e artigos via `.env` com loading controlado
- `useCheckScreen`: Detecta breakpoints responsivamente

### 🎨 Estilização Modular

- Tailwind com tokens `oklch` para temas claro/escuro
- Layout responsivo com `clamp`, `grid`, `aspect-video`

---

## 📈 Melhorias Recentes

| Área         | Antes                           | Depois                                    |
| ------------ | ------------------------------- | ----------------------------------------- |
| Estilização  | CSS Modules e classes repetidas | Tailwind com tokens e utilitários         |
| Player       | `<iframe>` direto no card       | Thumbnail com botão play personalizado    |
| UX           | Descrição fixa                  | Texto expandível (ver mais/ver menos)     |
| Carregamento | Nenhum feedback visual          | Skeleton loaders para vídeos e artigos    |
| API Fetch    | URLs hardcoded                  | Uso de `.env` com hook customizado        |
| Dark Mode    | Ausente                         | Implementado via `:root` e `oklch`        |
| Redux        | Estrutura inflada e acoplada    | Divisão por domínio com testes            |
| Comentários  | Inline e misturados             | Componente isolado com avatar e user fake |

---

## 📁 Estrutura do Projeto

```
frontend-clipStream/
├── public/
│ └── index.html
├── src/
│ ├── App.tsx
│ ├── index.tsx
│ ├── types.ts
│ ├── components/
│ │ ├── Header/
│ │ ├── Card/
│ │ ├── Carousel/
│ │ ├── Articles/
│ │ ├── FilteredVideos/
│ │ ├── Input/
│ │ ├── P5Sketch/
│ │ ├── Typography/
│ │ ├── ExpandableText/
│ │ └── Skeleton/
│ ├── hooks/
│ │ ├── useFilteredVideos.tsx
│ │ ├── useFetchData.tsx
│ │ └── useCheckScreen.tsx
│ ├── pages/
│ │ └── VideoDetail/
│ ├── redux/
│ │ ├── video/
│ │ ├── video-detail/
│ │ └── root-reducer.ts
│ ├── styles/
│ │ └── tailwind.config.css
│ └── App.css
├── .env
├── package.json
└── README.md

```

---

## 📝 Instalação

```bash
git clone https://github.com/joaovitorsamora/frontend-clipStream.git
cd frontend-clipStream
npm install
npm start
```
