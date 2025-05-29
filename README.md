# Simple Music Application (Spotify Clone Example)

Este projeto é um exemplo simples de uma aplicação full-stack para exibir artistas e músicas, simulando algumas funcionalidades básicas de um serviço de streaming de música como o Spotify.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

-   `front-end/`: Contém o código da interface do usuário, construído com React e Vite.
-   `back-end/`: Contém o código do servidor API, construído com Node.js, Express e conectado a um banco de dados MongoDB.

## Funcionalidades

-   Exibição de uma lista de artistas.
-   Exibição de uma lista de músicas.
-   API RESTful para fornecer dados de artistas e músicas.

## Tecnologias Utilizadas

**Front-end:**

-   React
-   Vite
-   JavaScript

**Back-end:**

-   Node.js
-   Express
-   MongoDB (via `mongodb` driver)
-   CORS
-   path

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

-   Node.js (versão 14 ou superior recomendada)
-   npm (gerenciador de pacotes do Node.js) ou yarn/pnpm
-   Acesso a um banco de dados MongoDB. Você pode usar o MongoDB Atlas (nuvem) ou instalar localmente.

## Configuração do Banco de Dados

1.  Obtenha a string de conexão (URI) do seu banco de dados MongoDB. Se estiver usando o MongoDB Atlas, encontre-a na seção "Connect".
2.  No arquivo `back-end/api/connect.js`, substitua a string de conexão existente pela sua URI:

    ```javascript:back-end\api\connect.js
    import { MongoClient } from "mongodb";

    // SUBSTITUA ESTA URI PELA SUA STRING DE CONEXÃO DO MONGODB
    const URI = "SUA_STRING_DE_CONEXAO_DO_MONGODB";

    const client = new MongoClient(URI);

    export const db = client.db("spotifyAula"); // Altere "spotifyAula" se desejar outro nome para o banco
    ```
    **Nota:** Para ambientes de produção, é altamente recomendado usar variáveis de ambiente para armazenar a string de conexão em vez de codificá-la diretamente no arquivo.

3.  **Popule o banco de dados (Opcional, se for a primeira vez):**
    O projeto inclui um script para inserir os dados iniciais de artistas e músicas no banco de dados.
    Certifique-se de que o servidor MongoDB está rodando e acessível.
    Execute o script a partir da raiz do projeto:
    ```bash
    node back-end/api/insertMany.js
    ```
    Verifique o console para ver as respostas da inserção.

## Instalação

1.  Clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/LuizFCDO/Projeto-Spotify.git
    ```
    ```bash
    cd <nome-da-pasta-do-seu-projeto>
    ```

2.  Instale as dependências do **back-end**:
    ```bash
    cd back-end
    ```
    ```bash
    npm install
    ```
    ```bash
    cd .. # Volte para a raiz do projeto
    ```

3.  Instale as dependências do **front-end**:
    ```bash
    cd front-end
    ```
    ```bash
    npm install
    ```
    ```bash
    cd .. # Volte para a raiz do projeto
    ```

## Rodando a Aplicação

Você precisará rodar o back-end e o front-end separadamente.

1.  **Inicie o servidor back-end:**
    Abra um novo terminal, navegue até a pasta `back-end` e execute:
    ```bash
    cd back-end
    ```
    ```bash
    node api/server.js
    ```
    O servidor deve iniciar na porta 3001 (ou a porta configurada no `server.js`). Você verá uma mensagem no console indicando que o servidor está escutando.

2.  **Inicie o servidor de desenvolvimento front-end:**
    Abra **outro** terminal, navegue até a pasta `front-end` e execute:
    ```bash
    cd front-end
    ```
    ```bash
    npm run dev
    ```
    O servidor de desenvolvimento do Vite será iniciado. O terminal mostrará o endereço local (geralmente `http://localhost:5173/`) onde a aplicação está rodando.

3.  Abra seu navegador e acesse o endereço fornecido pelo comando `npm run dev` (ex: `http://localhost:5173/`).

## Endpoints da API (Back-end)

O servidor back-end expõe os seguintes endpoints:

-   `GET /api/`: Mensagem de boas-vindas.
-   `GET /api/artists`: Retorna todos os artistas do banco de dados.
-   `GET /api/songs`: Retorna todas as músicas do banco de dados.

## Contribuição

Se desejar contribuir, por favor, siga os passos abaixo:

1.  Faça um fork do projeto.
2.  Crie uma nova branch (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações e commit (`git commit -m 'feat: Adiciona nova feature'`).
4.  Envie para o seu fork (`git push origin feature/sua-feature`).
5.  Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença [Nome da Licença, ex: MIT]. Veja o arquivo `LICENSE` para mais detalhes.