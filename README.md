# Bookstore Controle Digital (Front-end)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![home](https://github.com/prpires66/bookstore-front/assets/4954302/88879b68-79da-488c-b7ca-3088b91cb482)

<p align="center">
  <a href="#-descrição">Descrição</a> •
  <a href="#%E2%84%B9%EF%B8%8F-reprograme-se">Reprograme-se</a> •
  <a href="#-pré-requisitos">Pré-requisitos</a> •
  <a href="#%EF%B8%8F-tecnologias-utilizadas">Tecnologias Utilizadas</a> •
  <a href="#-instalação-e-uso">Instalação e Uso</a> •
  <a href="#-implantação">Implantação</a> •
  <a href="#-licença">Licença</a> •
  <a href="#-agradecimentos">Agradecimentos</a>
</p>

---
## 🚀 Descrição

Este projeto faz parte das atividades práticas do módulo 2024-F2M4: Node.js, do programa **Reprograme-se**. A proposta consiste em desenvolver um sistema de cadastro de livros e funcionários, dividido em duas partes:

1. **Aplicação Front-end**: Responsável pela interface do usuário, esta parte permite que os usuários visualizem, adicionem, editem e excluam informações sobre livros e funcionários de forma intuitiva e amigável. [Repositório no Github](https://github.com/prpires66/bookstore-front)

2. **Aplicação Back-end**: Esta parte gerencia os dados dos livros e funcionários, possibilitando a realização de operações de CRUD (Create, Read, Update, Delete) por meio de uma API, garantindo assim a integridade e segurança dos dados. [Repositório no Github](https://github.com/prpires66/bookstore-api)

> [!NOTE]
> Esta aplicação refere-se ao **item 1 (Aplicação Front-end)** e permite o gerenciamento de funcionários e livros em um sistema de livraria. Inclui funcionalidades como cadastro, listagem, atualização e exclusão de funcionários e livros.

## ℹ️ Reprograme-se

O Reprograme-se é um programa oferecido pelo IFES - Instituto Federal do Espírito Santo, com o objetivo de qualificar jovens e adultos para o mercado de trabalho na área de Tecnologia da Informação (TI). Para mais informações, visite [o site oficial do Reprograme-se](https://reprograme-se.org.br/).

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando um conjunto de tecnologias modernas e poderosas que contribuem para a construção de uma aplicação web robusta e eficiente:

- **JavaScript**: Uma linguagem de programação amplamente utilizada, tanto no front-end quanto no back-end, que oferece flexibilidade e desempenho.
- **Node.js**: Um ambiente de execução JavaScript que permite a criação de aplicativos escaláveis do lado do servidor.
- **Express.js**: Um framework web minimalista para Node.js que simplifica o desenvolvimento de APIs e aplicativos web, fornecendo uma série de recursos úteis e uma estrutura organizada.

## 💻 Pré-requisitos

Antes de iniciar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/): Faça o download e siga as instruções de instalação para o seu sistema operacional.
- [Git](https://git-scm.com/): Utilizado para clonar o repositório e trabalhar com controle de versão.
- [API](https://github.com/prpires66/bookstore-api): Fornece os recursos necessários para a aplicação front-end, incluindo operações CRUD. É fundamental para o funcionamento da aplicação.

Além disso, você precisará de um editor de código de sua preferência, como [Visual Studio Code](https://code.visualstudio.com/).

## 🔧 Instalação e Uso

1. **Clonagem do repositório:** Clone este repositório para o seu ambiente local usando o comando:

```
git clone https://github.com/prpires66/bookstore-front.git
```

2. **Instalação de dependências:** Navegue até o diretório do projeto e instale as dependências usando o comando:

```
npm install
```
3. **Configuração do ambiente:** Antes de executar a aplicação, certifique-se de configurar as seguintes variáveis de ambiente:

- **`URL_API`:** URL do endpoint da API (Back-end).
- **`PORT`:** Porta em que o servidor da API será executado. Por padrão, é 3000, mas você pode definir uma porta diferente se necessário.

> [!TIP]
> Você pode definir essas variáveis de ambiente em um arquivo `.env` na raiz do projeto ou configurá-las diretamente no ambiente de execução, dependendo das suas preferências e ambiente de desenvolvimento.

4. **Execução da Aplicação:** Inicie o servidor usando o comando:

```
npm start
```

5. **Utilização da API:** A API estará disponível em `http://localhost:3000` por padrão, ou na porta especificada pela variável de ambiente `PORT`. Você pode enviar requisições HTTP para as rotas especificadas abaixo.

> [!IMPORTANT]
> Esta aplicação requer uma conexão ativa com uma API externa para funcionar. Certifique-se de que a aplicação [back-end](https://github.com/prpires66/bookstore-api) esteja sendo executada e disponível.

## 📦 Implantação

Para implantar esta aplicação, você pode considerar duas abordagens populares:

1. **Implantação em Servidor de Nuvem:**

   - Esta abordagem envolve hospedar a sua aplicação em um provedor de serviços de nuvem, como Vercel, Heroku ou Netlify.
   - Você pode fazer o upload do código fonte da sua aplicação para a plataforma de hospedagem e seguir as instruções fornecidas pela plataforma para implantar a aplicação.
   - Essas plataformas geralmente oferecem integração contínua, escalabilidade automática e gerenciamento simplificado de infraestrutura, o que facilita o processo de implantação e gerenciamento da aplicação.

2. **Implantação em Container Docker**:
   - Nesta abordagem, você empacota sua aplicação e suas dependências em um contêiner Docker, que pode ser implantado em qualquer ambiente compatível com Docker.
   - É necessário criar um arquivo de configuração Dockerfile para a aplicação e construir a imagem do contêiner.
   - Depois de construir a imagem, você pode implantar o contêiner em qualquer host que execute o Docker Engine, como servidores físicos, máquinas virtuais ou clusters de contêineres gerenciados.
   - O uso de contêineres Docker oferece portabilidade, consistência de ambiente e isolamento de recursos, o que pode ser vantajoso para ambientes de desenvolvimento, teste e produção.

> [!NOTE]
> Cada abordagem tem suas próprias vantagens e desvantagens, e a escolha entre elas dependerá das necessidades específicas do seu projeto, dos requisitos de escalabilidade, do orçamento e da preferência pessoal. Certifique-se de avaliar cuidadosamente cada opção antes de decidir qual é a melhor para sua aplicação.

## 📄 Licença
![License: MIT](https://img.shields.io/github/license/prpires66/nlw-esports?style=for-the-badge)

Copyright © 2024 [Paulo Pires](https://github.com/prpires66).

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](https://github.com/prpires66/bookstore-front/blob/main/LICENSE) para obter mais detalhes.

## 🙏 Agradecimentos

> - Agradeço ao IFES - Instituto Federal do Espírito Santo pelo apoio através do projeto Reprograme-se, assim como professores e colegas.
> - Contribuições e sugestões são sempre bem-vindas.
> - Muito obrigado! :blue_heart:
