# Conceitos Básicos do Node

<div align="center">
  <table>
    <tr>
      <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"width="150" alt="postgres icon" /></td>
      <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" width="150" alt="postgres icon"/></td>
      <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original-wordmark.svg" width="200" alt="fastify icon"/></td>   
    </tr>
  </table>
</div>

> API simples para cadastro e gerenciamento de vídeos, desenvolvida para estudo de conceitos básicos de **Node.js**, **Fastify** e **PostgreSQL**.

## Principais funcionalidades

- criar vídeos
- listar vídeos
- buscar vídeos por título
- atualizar vídeos por completo
- atualizar vídeos parcialmente
- remover vídeos
- persistência em memória para testes simples
- persistência com PostgreSQL

## Tecnologias

- Node.js
- Fastify
- PostgreSQL
- Neon
- Render
- dotenv
- JavaScript
- UUID

## Funcionalidades da API

- cadastrar vídeo com título, descrição e duração
- listar todos os vídeos
- filtrar vídeos pelo título
- atualizar todos os campos de um vídeo
- atualizar parcialmente um vídeo
- excluir um vídeo

## Infraestrutura utilizada

- Banco de dados: Neon
- Deploy da aplicação: Render

## Estrutura dos dados

A tabela `videos` possui os seguintes campos:

- `id`
- `title`
- `description`
- `duration`

## Rotas disponíveis

Base path:

`/`

#### Criar vídeo

`POST /videos`

Exemplo de body:

```json
{
  "title": "Node.js",
  "description": "Vídeo sobre fundamentos de Node.js",
  "duration": 120
}
```

#### Listar vídeos

`GET /videos`

#### Buscar vídeos por título

`GET /videos?search=node`

#### Atualizar vídeo por completo

`PUT /videos/:id`

Exemplo de body:
```json
{
  "title": "Node.js atualizado",
  "description": "Novo conteúdo",
  "duration": 150
}
```

#### Atualizar vídeo parcialmente

`PATCH /videos/:id`

Exemplo de body:
```json
{
  "title": "Novo título"
}
```

#### Excluir vídeo

`DELETE /videos-delete/:id`

## Persistência

O projeto possui duas implementações de banco:

### DatabaseMemory

Armazena os vídeos em memória usando `Map`.

Uso indicado para:

- testes simples
- aprendizado
- execução sem banco real

### DatabasePostgres

Armazena os vídeos no PostgreSQL.

Operações implementadas:

- list
- create
- update
- patch
- delete

## Banco de dados

O projeto utiliza PostgreSQL com conexão via variável de ambiente:

```txt
DATABASE_URL=
```

No arquivo `db.js`, a conexão é feita com `postgres` usando SSL obrigatório.

### Criação da tabela

Para criar a tabela `videos`, existe o arquivo:

`create-table.js`

Estrutura criada:

```SQL
CREATE TABLE videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
);
```

## Como executar

#### Clonar o repositório
```bash
git clone https://github.com/AxelBiernastki/Node-Basics.git
cd Node-Basics
```

#### Instalar as dependências
```bash
npm install
```

#### Configurar o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com a variável:

```env
DATABASE_URL=postgresql://usuario:senha@host:porta/database
```
Este projeto foi configurado para usar um banco PostgreSQL hospedado no Neon.

#### Criar a tabela no banco
```bash
node create-table.js
```

#### Executar em desenvolvimento
```bash
npm run dev
```

#### Executar normalmente
```bash
npm start
```

A aplicação sobe por padrão em:

`http://localhost:3333`

## Conceitos praticados no projeto
- criação de API REST
- rotas HTTP com Fastify
- uso de parâmetros de rota
- uso de query string
- operações CRUD
- integração com PostgreSQL
- uso de variáveis de ambiente
- separação da camada de persistência
- uso de UUID para identificação dos registros
  
## Observações
- o projeto é simples e focado em aprendizado
- não possui validações mais robustas
- não possui testes automatizados
- existe uma implementação em memória e outra com PostgreSQL
- no server.js está sendo usada a implementação com PostgreSQL
