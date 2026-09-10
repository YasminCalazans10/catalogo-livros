# Mini Catálogo Interativo de Livros - React

Aplicação web em tela única desenvolvida para a disciplina de **Desenvolvimento Front-end**. O projeto consiste em um catálogo dinâmico de livros criado com **React + Vite**, utilizando arquitetura baseada em componentes reutilizáveis, passagem de dados por **Props** e gerenciamento de estado reativo com **useState**.

## Integrantes da Equipe

- Yasmin Calazans
- Vitor Assis

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- Lucide React
- Git e GitHub para versionamento e publicação do código

## Passo a Passo do Desenvolvimento

### 1. Setup Inicial

O projeto foi desenvolvido com **React** e inicializado utilizando **Vite**. Após a criação do projeto, as dependências necessárias foram instaladas com o npm e a aplicação foi organizada dentro da pasta `src`, separando a interface em componentes com responsabilidades específicas.

O `App.jsx` foi definido como componente principal da aplicação. Os componentes responsáveis por busca, exibição dos livros, cadastro e edição foram separados na pasta `src/components`.

### 2. Estrutura de Componentes

A aplicação foi dividida nos seguintes componentes:

- `App.jsx`: componente pai e principal. Centraliza a lista de livros, o termo de busca e as funções que alteram o estado da aplicação.
- `SearchBar.jsx`: componente responsável por capturar o termo digitado pelo usuário e permitir a busca reativa.
- `BookCard.jsx`: componente reutilizável que recebe os dados de cada livro via **Props** e apresenta suas informações e ações.
- `BookForm.jsx`: formulário responsável pela inclusão dinâmica de novos livros.
- `BookEditForm.jsx`: formulário responsável pela edição completa de um livro existente.

O `App.jsx` envia dados e funções aos componentes filhos por meio de **Props**. Dessa forma, os componentes podem exibir informações ou solicitar alterações mantendo o estado principal centralizado.

### 3. Gerenciamento de Estado e Reatividade

O gerenciamento de estado foi realizado com o Hook `useState` do React.

O `App.jsx` mantém dois estados principais:

- a lista atual de livros;
- o termo digitado na busca.

Quando um livro é cadastrado, editado, excluído ou tem seu status alterado, a função `setBooks()` atualiza a lista. O React identifica a mudança no estado e renderiza novamente os componentes necessários, refletindo a alteração imediatamente na tela e sem recarregar a página.

A busca também é reativa: conforme o usuário digita, o estado da pesquisa é atualizado e a lista exibida é recalculada automaticamente.

### 4. Filtragem e Renderização

A filtragem dinâmica utiliza o método `filter()` para gerar uma lista contendo apenas os livros correspondentes ao termo pesquisado. A pesquisa considera título, autor, gênero e status.

Após a filtragem, o método `map()` percorre os livros encontrados e cria um componente `BookCard` para cada registro.

Fluxo simplificado:

```text
Usuário digita na busca
        ↓
State da busca é atualizado
        ↓
filter() seleciona os livros correspondentes
        ↓
map() gera os componentes BookCard
        ↓
React atualiza a interface
```

### 5. Inclusão Dinâmica de Itens

O componente `BookForm.jsx` permite cadastrar um novo livro diretamente pela interface. Após o envio do formulário, o novo objeto é adicionado ao estado da lista de livros através de `setBooks()` e aparece imediatamente no catálogo.

### 6. Edição e Exclusão

Além dos requisitos básicos da atividade, foram implementadas funcionalidades de edição completa e exclusão.

A função `updateBook()` utiliza `map()` para gerar uma nova lista e substituir somente o livro que possui o `id` correspondente:

```jsx
function updateBook(bookId, updatedBook) {
  setBooks((current) =>
    current.map((book) =>
      book.id === bookId ? { ...book, ...updatedBook, id: book.id } : book
    )
  )
}
```

A função `deleteBook()` utiliza `filter()` para gerar uma nova lista sem o livro selecionado:

```jsx
function deleteBook(bookId) {
  setBooks((current) => current.filter((book) => book.id !== bookId))
}
```

### 7. Desafios Enfrentados e Aprendizados

Um dos principais desafios foi organizar a comunicação entre os componentes, garantindo que ações realizadas nos componentes filhos atualizassem corretamente o estado centralizado no `App.jsx`.

Outro ponto importante foi implementar as alterações da lista sem modificar diretamente o estado existente. Para isso, foram utilizados métodos como `map()` e `filter()`, criando novas listas e atualizando o estado através de `setBooks()`.

A implementação da busca em tempo real também permitiu aplicar na prática o conceito de **reatividade**, pois a interface responde automaticamente às alterações do estado sem exigir recarregamento da página ou botão de pesquisa.

Durante o desenvolvimento também foi utilizado **Git** para controle de versão local e **GitHub** para hospedar o repositório remoto, permitindo registrar as etapas do desenvolvimento através de commits.

## Funcionalidades

- Lista inicial com 6 livros cadastrados.
- Exibição dos livros através de componentes `BookCard` reutilizáveis.
- Busca em tempo real por título, autor, gênero ou status.
- Atualização da busca sem recarregar a página e sem botão de pesquisa.
- Cadastro dinâmico de novos livros.
- Campo opcional de URL da capa.
- Alteração rápida do status de leitura.
- Edição completa de título, autor, gênero, status, páginas, capa e descrição.
- Exclusão de livros com confirmação antes da remoção.
- Atualização imediata da interface através do estado reativo.
- Estado vazio quando nenhuma busca encontra resultados.
- Layout responsivo.

## Estrutura do Projeto

```text
catalogo-livros/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── BookEditForm.jsx
│   │   ├── BookForm.jsx
│   │   └── SearchBar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── index.html
├── package.json
└── vite.config.js
```

## Versionamento com Git e Publicação no GitHub

O projeto foi versionado utilizando o **Git instalado localmente no computador** e publicado em um repositório público no GitHub.

Fluxo utilizado para a primeira publicação:

```bash
git init
git status
git add .
git commit -m "Criação do catálogo interativo de livros"
git branch -M main
git remote add origin https://github.com/YasminCalazans10/catalogo-livros.git
git push -u origin main
```

Após a configuração inicial, as novas alterações são versionadas com o fluxo:

```bash
git status
git add .
git commit -m "Descrição da alteração"
git push
```

Nesse processo, `git add` prepara as alterações, `git commit` registra uma versão no histórico local e `git push` envia os commits para o repositório remoto no GitHub.

## Como Executar o Projeto

### Clonando do GitHub

É necessário ter **Git** e **Node.js/npm** instalados no computador.

```bash
git clone https://github.com/YasminCalazans10/catalogo-livros.git
cd catalogo-livros
npm install
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite no terminal, normalmente:

```text
http://localhost:5173/
```

### Executando pelo ZIP no VS Code

1. Baixe e extraia o ZIP.
2. Abra no VS Code a pasta que contém diretamente o arquivo `package.json`.
3. Abra **Terminal > New Terminal**.
4. No PowerShell, execute:

```powershell
npm.cmd install
npm.cmd run dev
```

5. Abra no navegador o endereço exibido pelo Vite.

Durante o uso da aplicação, mantenha o terminal com o servidor do Vite em execução.

## Observação sobre Persistência

Os dados da aplicação são mantidos no estado do React durante a sessão. Ao atualizar a página, os livros adicionados, editados, excluídos ou com status modificado retornam aos valores iniciais definidos no código.

A persistência permanente não faz parte dos requisitos desta atividade. Para implementá-la, seria possível utilizar recursos como `localStorage`, uma API ou um banco de dados.
