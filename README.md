# Meu portfólio

Este é um projeto de portfólio pessoal construído com **React**, **Tailwind CSS** e **Vite**. O portfólio exibe meus trabalhos, habilidades, um pouco Sobre mim, e um formulário para me contatar para serviços como desenvolvedor.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Vite**: Ferramenta de build rápida para projetos modernos, oferecendo uma ótima experiência de desenvolvimento com pouca configuração.

## Funcionalidades

- **Design Responsivo**: Layout totalmente responsivo que funciona em dispositivos móveis, tablets e desktops.
- **Conteúdo Dinâmico**: Projetos e habilidades são exibidos dinamicamente usando componentes do React.
- **Otimização de Desempenho**: Tempos de carregamento extremamente rápidos graças ao processo de build otimizado do Vite.
- **Código Limpo**: Componentes estruturados e reutilizáveis para fácil manutenção e atualizações.

## Como Começar

Siga os passos abaixo para executar o projeto localmente na sua máquina.

### Pré-requisitos

Certifique-se de que você tenha o Node.js e o npm (ou Yarn) instalados em sua máquina:

- [Node.js](https://nodejs.org/en/download/)
- npm vem junto com o Node.js (ou instale o [Yarn](https://yarnpkg.com/getting-started/install) como uma alternativa)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/portfolio-website.git
```

2. Acesse a pasta do projeto:

```bash
cd portfolio
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

Isso irá iniciar o servidor de desenvolvimento do Vite, e você pode acessar a aplicação em `http://localhost:4173`.


## Estrutura do Projeto

```bash
├── src
│   ├── assets         # Imagens estáticas, ícones, etc.
│   ├── components     # Componentes reutilizáveis do React
│   ├── pages          # Páginas da aplicação (Home, Sobre, Projetos, etc.)
│   ├── App.jsx        # Componente principal da aplicação
│   ├── main.jsx       # Ponto de entrada da aplicação
│   └── index.css      # Tailwind CSS e estilos globais
├── public             # Arquivos públicos
├── package.json       # Dependências do projeto e scripts
├── postcss.config.js  # Configuração do PostCSS
├── tailwind.config.js # Configuração do Tailwind CSS
├── vite.config.js     # Configuração do Vite
└── README.md          # Documentação do projeto
```

### Adicionando Novas Páginas

Para adicionar novas páginas, simplesmente crie um novo componente dentro da pasta `pages` e adicione uma rota para ele no arquivo principal `App.jsx`.

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma ideia ou melhoria, sinta-se à vontade para abrir uma pull request ou enviar uma issue.



### Autor

**Murillo Oliveira**  
- [LinkedIn](https://www.linkedin.com/in/murilloliveiraz)
- [GitHub](https://github.com/murilloliveiraz)
