# Blogging - Dispositivos Móvies

Autores: Felipe Luz, Filipi da Costa e João Pedro Prudêncio

O principal objetivo deste projeto é entregar uma implementação base sólida para um aplicativo de blog, que permita a expansão e evolução a longo prazo. Ele foi planejado para ser escalável, flexível e servir como um ponto de partida para novos desenvolvimentos no futuro.

---

## Funcionalidades Principais

| **Funcionalidade**   | **Descrição**                                                                 |
|-----------------------|-------------------------------------------------------------------------------|
| **Criar Post**        | Permite criar um novo post com título, conteúdo e imagens opcionais.         |
| **Editar Post**       | Oferece a funcionalidade de modificar o título, o conteúdo ou as imagens.    |
| **Visualizar Post**   | Exibe o conteúdo completo de um post, incluindo imagens, título e descrição. |
| **Listar Posts**      | Apresenta uma lista com todos os posts criados, com informações resumidas.   |

---

## Como Clonar e Rodar o Projeto Localmente

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/jp-prud/blogging
   cd blogging
   ```

2. **Instalar as dependências**:
   Execute o comando:
   ```bash
   yarn install
   ```

3. **Executar o projeto em um emulador**:
   Certifique-se de que um emulador (por exemplo, do Android Studio) esteja rodando. Em seguida, execute:
   ```bash
   yarn android
   ```
   O projeto será inicializado no emulador.

---

## Tecnologias Utilizadas

| **Tecnologia**    | **Descrição**                                                                                           | **Motivo da Escolha**                                                                                           |
|--------------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **React Native**   | Framework para desenvolvimento de aplicativos móveis com uma base de código compartilhada entre iOS e Android. | Escolhido pela sua eficiência e capacidade de criar aplicativos nativos com uma experiência fluida.          |
| **TypeScript**     | Superset de JavaScript que adiciona tipagem estática ao código.                                         | Proporciona maior segurança e reduz erros durante o desenvolvimento.                                         |
| **Restyle**        | Biblioteca para criação de design systems e estilos tipados.                                           | Facilita a manutenção e escalabilidade do design do aplicativo.                                              |

---

## Roadmap

Para expandir e aprimorar o projeto, os próximos passos incluem:

- **Criação da API e Integração com Mobile:** Implementar uma API robusta para conectar o front-end mobile ao backend, garantindo uma experiência fluida e eficiente.
- **Fluxo de Autenticação e Autorização com Roles (RBAC):** Configuração de um sistema de controle de acesso baseado em funções, assegurando permissões granulares para diferentes usuários.
- **Armazenamento e Otimização de Imagens:** Implementar o uso de servidores com técnicas de compressão para armazenar imagens de forma eficiente.

### Tecnologias Planejadas

| **Tecnologia**     | **Descrição**                                                                                           |
|---------------------|-------------------------------------------------------------------------------------------------------|
| **Serverless**      | Arquitetura para execução de funções sob demanda, otimizando escalabilidade e custos.                 |
| **Amazon S3**       | Armazenamento seguro e eficiente de imagens e arquivos.                                               |
| **Amazon SQS**      | Fila para processamento assíncrono de tarefas, como compressão e upload de imagens.                   |
| **Amazon DynamoDB** | Banco de dados NoSQL escalável para gerenciar dados estruturados do sistema.                          |
| **AWS Cognito**     | Gerenciamento de autenticação, registro e controle de acesso dos usuários com suporte a provedores externos. |

---

### Evidências da Implementação

Abaixo está um vídeo demonstrando a implementação atual do projeto, evidenciando suas principais funcionalidades em ação:

[**Clique aqui para assistir ao vídeo**](https://www.youtube.com/watch?v=AYarZ1UenRM)

Caso o vídeo não carregue, certifique-se de que ele está disponível no diretório ou repositório do projeto.
