# 🚀 ClipStream

**ClipStream** é uma aplicação web moderna para exibição, busca e interação com vídeos e artigos, integrando recursos de frontend reativo, gerenciamento de estado global e consumo de APIs externas.

---

## ✨ Funcionalidades

- 🔍 **Busca de Vídeos**: Pesquisa instantânea de vídeos por título.  
- 🎬 **Listagem de Vídeos**: Exibição de vídeos em cards, com player embutido.  
- 📄 **Detalhes do Vídeo**: Página dedicada com player, likes, dislikes e comentários.  
- 💬 **Comentários**: Usuários podem comentar nos vídeos.  
- 👍👎 **Likes/Dislikes**: Interação de likes e dislikes.  
- 📰 **Artigos em Destaque**: Carrossel de artigos com visualização e contagem de visualizações.  
- 📱 **Responsividade**: Layout adaptável para qualquer dispositivo.  
- 🌌 **Animação no Header**: Efeito visual com p5.js no cabeçalho.  

---

## 🛠️ Tecnologias Utilizadas

- **React 18** ⚛️  
- **Redux & Redux Thunk** 🗃️  
- **TypeScript** 🟦  
- **React Router DOM** 🔗  
- **Axios** 🔄  
- **p5.js** (animações no header) 🎨  
- **Swiper** (carrossel de artigos) 🏞️  
- **Material UI Icons** 🎨  
- **Jest & Testing Library** 🧪  
- **Prettier** 💅  
- **New Relic Browser Agent** 📈  

---

## 🏗️ Implementações

### 🔧 Gerenciamento de Estado

- Redux para vídeos, detalhes e artigos, com **actions** e **reducers** modulares.

### 🔄 Hooks Customizados

- `useFilteredVideos`: Filtra vídeos conforme o termo de busca.  
- `useFetchData`: Busca vídeos e artigos via API.

### 🧩 Componentização

- Componentes reutilizáveis para Header, Card, Input, Title, Carrossel, entre outros.

### 🔗 Integração com API

- Consome endpoints para vídeos e artigos, incluindo atualização de views e comentários.

### 🎨 Estilização Modular

- CSS modularizado por componente, com responsividade e suporte a tema escuro.

---

## 📁 Estrutura do Projeto

```text
frontend-clipStream/
├── public/
│   └── index.html
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── types.ts
│   ├── components/
│   │   ├── Header/
│   │   ├── Card/
│   │   ├── Carousel/
│   │   ├── Articles/
│   │   ├── FilteredVideos/
│   │   ├── Input/
│   │   ├── P5Sketch/
│   │   └── Title/
│   ├── hooks/
│   │   ├── useFilteredVideos.tsx
│   │   └── useFetchData.tsx
│   ├── pages/
│   │   └── VideoDetail/
│   ├── redux/
│   │   ├── articles/
│   │   ├── video/
│   │   ├── video-detail/
│   │   ├── root-reducer.tsx
│   │   └── store.tsx
│   └── App.css
├── package.json
└── README.md
```

---

## 📝 Alterações e Melhorias

- Refatoração para uso de TypeScript em todos os componentes.  
- Modularização dos reducers e actions do Redux.  
- Implementação de hooks customizados para filtragem e fetch de dados.  
- Adição de animação p5.js no header.  
- Responsividade aprimorada com CSS modular.  
- Integração do carrossel de artigos com Swiper.  
- Melhoria na UX de busca e carregamento.

---

## 📦 Instalação

Para clonar e executar o projeto localmente:

```bash
git clone https://github.com/seu-usuario/frontend-clipStream.git
cd frontend-clipStream
npm install
npm start
```

