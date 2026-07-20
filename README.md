# 📌 Roadmap Oficial do Projeto FLBBQ

> **Versão:** Roadmap 1.0
>
> Este documento tem como objetivo organizar o desenvolvimento do projeto FLBBQ desde a criação do layout até a integração completa com a Loja Integrada. Cada versão representa uma etapa importante do projeto e deve ser concluída antes de iniciar a próxima.

---

# 📖 Sobre o Projeto

O projeto **FLBBQ** consiste no desenvolvimento de um e-commerce moderno, responsivo e de alta performance para a loja FLBBQ.

A proposta não é apenas criar um novo site, mas desenvolver uma plataforma personalizada capaz de oferecer uma experiência superior à da Loja Integrada, mantendo toda a infraestrutura de catálogo, estoque, pedidos e checkout da plataforma principal.

O site será dividido em duas partes:

- **Front-end:** Interface desenvolvida com HTML5, CSS3 e JavaScript.
- **Back-end:** API própria desenvolvida em Node.js + Express, responsável por consumir os dados da Loja Integrada.

Essa arquitetura permitirá liberdade total para criar animações, componentes exclusivos, filtros inteligentes e novos recursos sem depender das limitações do tema padrão da Loja Integrada.

---

# 🛠 Tecnologias

## Front-end

- HTML5
- CSS3
- JavaScript (ES6+)

## Back-end

- Node.js
- Express.js

## Banco de Dados

- PostgreSQL (Somente recursos exclusivos)

## API

- API Oficial da Loja Integrada

## Hospedagem

- Front-end → Vercel
- API → Render

## Versionamento

- Git
- GitHub

---

# 🚀 V1 — Layout Base (✅Concluído)

## Objetivo

Construir toda a identidade visual do projeto utilizando HTML, CSS e JavaScript, criando uma interface moderna, responsiva e alinhada à identidade da FLBBQ.

Essa etapa representa a fundação do projeto. Nela são definidos os componentes visuais, a paleta de cores, tipografia, animações iniciais e a organização geral das páginas.

---

## Funcionalidades

- Header responsivo
- Banner principal
- Categorias
- Produtos em destaque (visual)
- Marcas parceiras
- Footer
- Design System
- Paleta de cores
- Componentes reutilizáveis
- Estrutura inicial do JavaScript

---

## Status

✅ Concluído

---

# 🚀 V2 — Loja Navegável

## Objetivo

Transformar o layout em um site totalmente navegável, permitindo que o usuário percorra todas as páginas da loja mesmo sem existir integração com banco de dados ou API.

Nesta versão o foco é criar toda a estrutura das páginas, melhorar a experiência do usuário e deixar o projeto com aparência de uma loja profissional.

---

## Funcionalidades

### Página do Produto

Criação da página responsável por apresentar todas as informações detalhadas de um produto.

Ela deverá possuir:

- Galeria de imagens
- Nome
- Marca
- Categoria
- Preço
- Parcelamento
- Descrição
- Especificações
- Produtos relacionados
- Botão Comprar

---

### Página de Categorias

Cada categoria possuirá sua própria página exibindo apenas produtos pertencentes àquela categoria.

---

### Pesquisa

Implementação da barra de pesquisa.

Inicialmente utilizando dados simulados.

---

### Filtros

Criação de filtros como:

- Marca
- Categoria
- Faixa de preço
- Promoções

---

### Responsividade

O site deverá funcionar corretamente em:

- Desktop
- Notebook
- Tablet
- Smartphone

---

### Página 404

Tela personalizada para páginas inexistentes.

---

### Loading

Animação de carregamento durante troca de páginas.

---

### Melhorias Visuais

- Hover
- Transições
- Scroll Animations
- Micro animações

---

### Organização do Código

Separação dos arquivos JavaScript em módulos.

---

## Status

🟨 Em desenvolvimento

---

# 🚀 V3 — Loja Inteligente

## Objetivo

Nesta etapa o site deixará de utilizar HTML estático para exibir produtos e passará a gerar todas as informações dinamicamente através do JavaScript.

Embora ainda não exista integração com a API oficial, o funcionamento será praticamente idêntico ao de uma loja real.

Isso permitirá desenvolver toda a lógica da aplicação antes da criação do back-end.

---

## Funcionalidades

### Banco de Produtos Simulado

Criação de um arquivo JavaScript contendo todos os produtos.

Exemplo:

- Nome
- Marca
- Categoria
- Preço
- Imagens
- Descrição

---

### Produtos Dinâmicos

Todos os cards serão criados automaticamente.

---

### Página do Produto Dinâmica

Utilização de parâmetros na URL.

Exemplo:

```
produto.html?id=15
```

---

### Produtos Relacionados

Exibição automática de produtos semelhantes.

---

### Pesquisa Inteligente

Pesquisa funcionando através do JavaScript.

---

### Categorias Dinâmicas

As categorias passarão a ser carregadas automaticamente.

---

### Favoritos

Sistema utilizando LocalStorage.

---

### Carrinho

Carrinho utilizando LocalStorage.

---

### Mini Carrinho

Resumo do carrinho disponível em qualquer página.

---

### Organização da Arquitetura

Separação dos scripts em:

- Components
- Pages
- Services
- Utils

---

## Status

⬜ Não iniciado

---

# 🚀 V4 — API Própria

## Objetivo

Criar uma API própria utilizando Node.js e Express.

Ela ficará hospedada separadamente no Render e será responsável por intermediar toda a comunicação entre o site da FLBBQ e a Loja Integrada.

Essa arquitetura aumenta a segurança, melhora a organização do projeto e facilita futuras migrações para outras plataformas.

---

## Funcionalidades

### Estrutura do Projeto

- Express
- Controllers
- Routes
- Services
- Middlewares
- Config
- Utils

---

### Endpoints

Exemplos:

```
GET /produtos

GET /produto/:id

GET /categorias

GET /marcas

GET /banner
```

---

### Consumo da Loja Integrada

Apenas a API conhecerá a Loja Integrada.

O Front-end nunca acessará diretamente a API oficial.

---

### Cache

Implementação de cache para reduzir chamadas desnecessárias.

---

### Variáveis de Ambiente

Utilização de arquivo `.env` para armazenar:

- API Key
- Token
- URLs
- Porta

---

### Deploy

Hospedagem da API no Render.

---

## Status

⬜ Não iniciado

---

# 🚀 V5 — Integração Completa

## Objetivo

Substituir todos os dados simulados pela API própria desenvolvida na versão anterior.

Nesta etapa o site se tornará um e-commerce totalmente funcional, consumindo informações reais da Loja Integrada e utilizando sua infraestrutura para catálogo, estoque, pedidos e checkout.

O objetivo é manter um visual totalmente personalizado sem abrir mão da estabilidade e dos recursos já existentes na plataforma principal.

---

## Funcionalidades

### Produtos

Carregamento através da API.

---

### Categorias

Categorias vindas da Loja Integrada.

---

### Marcas

Carregamento automático.

---

### Estoque

Quantidade em tempo real.

---

### Preços

Atualização automática.

---

### Promoções

Produtos promocionais.

---

### Pesquisa

Busca utilizando a API.

---

### Página do Produto

Informações reais.

---

### Checkout

Integração completa com o Checkout da Loja Integrada.

---

### Deploy Final

Publicação da primeira versão oficial do projeto.

---

## Status

⬜ Não iniciado

---

# 📅 Cronograma

| Versão | Nome | Status |
|----------|-------------------------|------------|
| ✅ V1 | Layout Base | Concluído |
| 🟨 V2 | Loja Navegável | Em desenvolvimento |
| ⬜ V3 | Loja Inteligente | Não iniciado |
| ⬜ V4 | API Própria | Não iniciado |
| ⬜ V5 | Integração Completa | Não iniciado |

---

# 🎯 Objetivo Final

Ao final da V5, o projeto FLBBQ será um e-commerce totalmente funcional, moderno, responsivo e escalável, utilizando uma arquitetura desacoplada entre Front-end e Back-end.

A aplicação contará com uma interface personalizada desenvolvida exclusivamente para a FLBBQ, enquanto utilizará a infraestrutura da Loja Integrada para gerenciamento de catálogo, estoque e processamento de pedidos.

Essa arquitetura permitirá futuras expansões, novas funcionalidades e integrações sem comprometer a estabilidade do sistema.

---

## Desenvolvido por

**FLipeCode**

Desenvolvimento Web • Interfaces Modernas • Soluções Personalizadas

© 2026 - Todos os direitos reservados.