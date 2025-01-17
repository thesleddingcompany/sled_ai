<div align="center">

# Sledding Game x ai16z

<img src="./static/sled_banner.png" alt="Sledding Game Banner" width="100%" />

### Supported SDKs <!-- omit from toc -->
![JavaScript](https://img.shields.io/badge/JavaScript-E4CF0D?logo=data:image/svg%2bxml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMiAxMiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEzLjczLDMuMzZhMi41LDIuNSwwLDAsMC0xLjA5LTEuMDlBNi4zMSw2LjMxLDAsMCwwLDEwLDJINmE2LjMxLDYuMzEsMCwwLDAtMi42NC4yN0EyLjUsMi41LDAsMCwwLDIuMjcsMy4zNiw2LjMxLDYuMzEsMCwwLDAsMiw2djRhNi4zMSw2LjMxLDAsMCwwLC4yNywyLjY0LDIuNSwyLjUsMCwwLDAsMS4wOSwxLjA5QTYuMzEsNi4zMSwwLDAsMCw2LDE0aDRhNi4zMSw2LjMxLDAsMCwwLDIuNjQtLjI3LDIuNSwyLjUsMCwwLDAsMS4wOS0xLjA5QTYuMzEsNi4zMSwwLDAsMCwxNCwxMFY2QTYuMzEsNi4zMSwwLDAsMCwxMy43MywzLjM2Wk04LDcuNVYxMWEyLDIsMCwwLDEtNCwwdi0uNUg1VjExYTEsMSwwLDAsMCwyLDBWOEg1LjVWN0g4Wm0yLjc1LDJoLjVhMS43NSwxLjc1LDAsMCwxLDAsMy41SDExYTIsMiwwLDAsMS0yLTJoMWExLDEsMCwwLDAsMSwxaC4yNWEuNzUuNzUsMCwwLDAsMC0xLjVoLS41YTEuNzUsMS43NSwwLDAsMSwwLTMuNUgxMWEyLDIsMCwwLDEsMiwySDEyYTEsMSwwLDAsMC0xLTFoLS4yNWEuNzUuNzUsMCwwLDAsMCwxLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMikiLz48L3N2Zz4=)

</div>

## Table of Contents
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
  - [Running the application](#running-the-application)
    - [Setting up the database](#setting-up-the-database)
    - [Development](#development)
    - [Production](#production)
  - [Endpoint Documentation](#endpoint-documentation)
  - [Contributing](#contributing)

## Features

- Extremely customizable agents, through the use of [ai16z's characterfile format](https://github.com/elizaOS/characterfile)
- Support for multiple AI providers, including Anthropic, DeepSeek and OpenAI
- Extensible behaviour through either a custom framework, or using [Eliza](https://github.com/ai16z/eliza).
## Usage

This application consists of a backend that provides the underlying logic for tracking conversations and uses [Eliza](https://github.com/ai16z/eliza) as the agent framework, through a custom client. It is built using Node.js and Fastify, using PostgreSQL as a database.

Developers can then use the SDKs to interact with this backend, and build their own chatbot applications on top of it. The current supported SDKs are:
- [JavaScript](./sdk/js/)

### Installation

This application was built with Node v23, and using this version of Node is recommended.

You can use any preferred package manager to install the dependencies. We recommend using [pnpm](https://pnpm.io/installation).

### Environment Variables

When using this application, you need to set the following environment variables in an `.env` file (An example is provided [here](./.env.example)):

- `AGENT_PROVIDER`: The provider to use for the agent. This should be set to `eliza` or left empty.
- `PROVIDER`: `anthropic` (Claude 3.5), `deepseekv3` or `openai` (GPT4).
- `AI_API_KEY`: The API key to pass to the model's API.
- `SERVER_PORT`: The port to run the app on.
- `ENDPOINT_API_KEY`: The authentication key that all incoming requests must provide.
- `ENVIRONMENT`: The environment to run the server in. This should be set to `development` or `production`. In a development environment, certain security features are disabled to make development easier. The Scalar API key (in the API reference) is for example filled in automatically.
- `POSTGRES_USER`: The username to use for the PostgreSQL database.
- `POSTGRES_PASSWORD`: The password to use for the PostgreSQL database.
- `POSTGRES_HOST`: The host to use for the PostgreSQL database.
- `POSTGRES_PORT`: The port to use for the PostgreSQL database.
- `POSTGRES_DB`: The database to use for the PostgreSQL database.
- `DATABASE_URL`: In order to dynamically fill in database details, the database URL should be set. This should generally be `"postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"`. This is then sent to Prisma to connect to the database.

If you are using Eliza (`AGENT_PROVIDER=eliza`), have a look at the [Eliza documentation](https://elizaos.github.io/eliza/docs/quickstart/#installation) to see what environment variables are required.

## Running the application

### Setting up the database

We use [Prisma](https://www.prisma.io/) to manage the database. To start the database and set it up, run the following commands (assuming all environment variables are set and [Docker](https://www.docker.com/) is installed):

```bash
docker compose up -d
npx prisma db push
```

### Development

```bash
npm run dev
```

This starts a development server. The server will automatically reload if you make changes to the code, through the use of [nodemon](https://github.com/remy/nodemon).

### Production

To start the server in production, run the following command:

```bash
npm run deploy
```

A solution like [PM2](https://pm2.keymetrics.io/) is recommended for running the server in production.

## Endpoint Documentation

By defining an OpenAPI scheme for every endpoint, a documentation page is generated automatically at `/reference` when the server is running. This page is generated using Scalar.

## Contributing

If you find any bugs or have any suggestions for the project, please let us know [here](https://github.com/stealthstudios/stealth-sdk/issues)!
