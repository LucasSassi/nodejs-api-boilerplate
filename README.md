# Node.js API Boilerplate

Boilerplate simples e limpo para criação de APIs REST com Node.js, Express e MongoDB.

## 📋 Características

- **Arquitetura em camadas**: Controllers, Services, Repositories, Models
- **Autenticação JWT**: Sistema completo de login e registro
- **Segurança**: Senhas criptografadas com bcrypt
- **Express.js**: Framework web minimalista
- **MongoDB**: Banco de dados NoSQL com Mongoose
- **ES Modules**: Sintaxe moderna de JavaScript
- **Error Handling**: Tratamento centralizado de erros
- **Validação**: Middleware para validação de IDs

## 🚀 Começando

### Pré-requisitos

- Node.js (v14 ou superior)
- MongoDB (local ou Atlas)

### Instalação

1. Clone o repositório e remova o .git:
```bash
git clone <url-do-repositorio>
cd nodejs-api-boilerplate
rm -rf .git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com suas configurações:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/boilerplate_db
JWT_SECRET=your_super_secret_key_here_change_this
```

5. Inicie o servidor:
```bash
# Desenvolvimento (com hot-reload)
npm run dev

# Produção
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── config/          # Configurações (database, etc)
├── controllers/     # Controladores das rotas
├── middlewares/     # Middlewares customizados
├── models/          # Schemas do MongoDB
├── repositories/    # Camada de acesso ao banco de dados
├── routes/          # Definição de rotas
├── services/        # Lógica de negócio
├── utils/           # Funções utilitárias
├── app.js           # Configuração do Express
└── server.js        # Ponto de entrada da aplicação
```

## 🔌 API Endpoints

### Authentication

| Método | Endpoint            | Descrição                          | Auth Required |
|--------|--------------------|------------------------------------|---------------|
| POST   | /api/auth/register | Criar nova conta                   | ❌            |
| POST   | /api/auth/login    | Fazer login e receber token        | ❌            |

### Users

| Método | Endpoint         | Descrição                | Auth Required |
|--------|-----------------|--------------------------|---------------|
| POST   | /api/users      | Criar novo usuário       | ✅            |
| GET    | /api/users      | Listar todos usuários    | ✅            |
| GET    | /api/users/:id  | Buscar usuário por ID    | ✅            |
| PUT    | /api/users/:id  | Atualizar usuário        | ✅            |
| DELETE | /api/users/:id  | Deletar usuário          | ✅            |

### Exemplos de Uso

**Registrar novo usuário:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"João Silva","email":"joao@email.com","password":"senha123"}'
```

**Fazer login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"joao@email.com","password":"senha123"}'
```

**Listar usuários (com autenticação):**
```bash
curl http://localhost:3000/api/users \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

## 🛠️ Como Usar como Boilerplate

1. **Renomeie o projeto** no `package.json`
2. **Adicione novos models** em `src/models/`
3. **Crie repositories** correspondentes em `src/repositories/`
4. **Implemente services** com lógica de negócio em `src/services/`
5. **Adicione controllers** em `src/controllers/`
6. **Defina rotas** em `src/routes/`
7. **Registre rotas** no `src/app.js`

## 📦 Dependências

- **express**: Framework web
- **mongoose**: ODM para MongoDB
- **jsonwebtoken**: Autenticação JWT
- **bcrypt**: Criptografia de senhas
- **dotenv**: Gerenciamento de variáveis de ambiente

## 🔧 Scripts Disponíveis

- `npm start`: Inicia o servidor em produção
- `npm run dev`: Inicia o servidor em modo desenvolvimento (nodemon)

## 📝 Licença

MIT

## 🤝 Contribuindo

Sinta-se livre para contribuir com melhorias neste boilerplate!
