# Gerador de Contratos - SAAS

Este projeto é um SAAS (Software as a Service) para geração de contratos personalizados. O MVP (Minimum Viable Product) inclui funcionalidades básicas como criação de contratos a partir de templates, personalização de cláusulas, geração de PDF e armazenamento dos contratos gerados.

## Tecnologias Utilizadas

### Frontend
- **React.js**: Para a construção da interface do usuário.
- **Vite**: Para build e desenvolvimento rápido.
- **Axios**: Para chamar a API
- **React Router** : Para navegação entre páginas

### Backend
- **Node.js**:  Ambiente de execução do JavaScript no servidor.
- **Express**: Framework para construção da API.
- **Mongoose**: ORM para interação com o MongoDB.
- **JSON Web Tokens (JWT)**:  Para autenticação de usuários.
- **PDFKit**: Para geração de PDFs.

### Banco de Dados
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.

### Hospedagem
- **Vercel**: Para hospedagem do frontend.
- **Render**: Para hospedagem do backend.

---

## Arquitetura do Projeto

### Estrutura de Pastas
```
gerador-de-contratos/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── contractController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Contract.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── contractRoutes.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── contractService.js
│   │   ├── utils/
│   │   │   ├── generatePdf.js
│   │   ├── app.js
│   │   ├── server.js
│   ├── .env
│   ├── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
├── README.md
├── .gitignore
```

---

# Descrição dos Módulos

## Backend

### `src/server.js`:
- **Ponto de entrada da aplicação Node.js**.
- Configuração do servidor Express e conexão com o banco de dados.

### `src/config/db.js`:
- **Configuração da conexão com o MongoDB usando Mongoose**.

### `src/routes/`:
- Contém os roteadores para cada recurso (usuários, contratos, autenticação).
- Exemplo:
  - `authRoutes.js`: Rotas para login e registro.
  - `contractRoutes.js`: Rotas para criação, listagem e download de contratos.

### `src/controllers/`:
- Contém a lógica de negócio para cada rota.
- Exemplo:
  - `authController.js`: Lógica de autenticação.
  - `contractController.js`: Lógica de gerenciamento de contratos.

### `src/models/`:
- Define os modelos de banco de dados usando Mongoose.
- Exemplo:
  - `User.js`: Modelo de usuário.
  - `Contract.js`: Modelo de contrato.

### `src/services/`:
- Contém serviços auxiliares.
- Exemplo:
  - `authService.js`: Serviço de autenticação.
  - `contractService.js`: Serviço de gerenciamento de contratos.

### `src/utils/`:
- Contém utilitários.
- Exemplo:
  - `generatePdf.js`: Lógica para geração de PDFs.

### `.env`:
- Variáveis de ambiente (banco de dados, chaves JWT, etc.).

---

## Frontend

### `public/`:
- Arquivos estáticos (ex.: favicon, index.html).

### `src/`:
- Código fonte da aplicação React.
- Exemplo:
  - `components/`: Componentes reutilizáveis (ex.: navbar, formulários).
  - `pages/`: Páginas da aplicação (ex.: login, criação de contrato).
  - `services/`: Chamadas à API (ex.: autenticação, contratos).
  - `App.jsx`: Componente principal.
  - `main.jsx`: Ponto de entrada.

### `package.json`:
- Dependências e scripts do frontend.

### `vite.config.js`:
- Configuração do Vite para build e desenvolvimento.

---

## Fluxo de Dados

### Autenticação:
1. O usuário faz login/registro via API.
2. O backend gera um token JWT para autenticação nas requisições subsequentes.

### Criação de Contrato:
1. O usuário seleciona um template e personaliza as cláusulas.
2. O frontend envia os dados para o backend via API.
3. O backend gera o PDF usando PDFKit e armazena o contrato no banco de dados.

### Download de Contrato:
1. O usuário solicita o download de um contrato.
2. O backend recupera o contrato do banco de dados e envia o PDF para o frontend.
