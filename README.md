# Mini Catálogo Interativo de Livros - React

Aplicação web em tela única desenvolvida para a disciplina de **Desenvolvimento Front-end**, atendendo ao desafio de construção de interface com frameworks.

## Integrantes da Equipe

- Yasmin Calazans
- Vitor Assis

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- Lucide React

## Funcionalidades

- Lista inicial com 6 livros.
- Capas dos 6 livros iniciais.
- Busca em tempo real por título, autor, gênero ou status.
- Alteração rápida do status de leitura diretamente em cada card.
- Edição completa de um livro já cadastrado.
- Na edição é possível alterar título, autor, gênero, status, páginas, URL da capa e descrição.
- Exclusão de livros com confirmação antes da remoção.
- Cadastro de novos livros.
- Campo opcional de URL da capa para novos livros.
- Atualização imediata da interface por estado reativo.
- Layout responsivo.
- Estado vazio quando nenhuma busca encontra resultados.

## Estrutura de componentes

- `App.jsx`: componente principal, controla a lista de livros e as funções de adicionar, editar, excluir e alterar status.
- `SearchBar.jsx`: campo de busca reativa.
- `BookCard.jsx`: exibe as informações do livro e os controles de status, edição e exclusão.
- `BookEditForm.jsx`: formulário de edição completa de um livro existente.
- `BookForm.jsx`: formulário de inclusão de novos livros.

## Gerenciamento de estado

O `App.jsx` utiliza `useState` para guardar a lista atual de livros e o termo de busca. Quando um livro é adicionado, editado, excluído ou tem seu status alterado, o estado é atualizado e o React renderiza novamente a interface sem recarregar a página.

### Editar livro

A função `updateBook()` utiliza `map()` para criar uma nova lista e substituir apenas o livro com o `id` correspondente:

```jsx
function updateBook(bookId, updatedBook) {
  setBooks((current) =>
    current.map((book) =>
      book.id === bookId ? { ...book, ...updatedBook, id: book.id } : book
    )
  )
}
```

### Excluir livro

A função `deleteBook()` utiliza `filter()` para gerar uma nova lista sem o livro selecionado:

```jsx
function deleteBook(bookId) {
  setBooks((current) => current.filter((book) => book.id !== bookId))
}
```

## Como executar o projeto

### Usando o ZIP no VS Code

1. Baixe e extraia o ZIP.
2. Abra no VS Code a pasta que contém diretamente o arquivo `package.json`.
3. Abra **Terminal > New Terminal**.
4. No PowerShell, execute:

```powershell
npm.cmd install
npm.cmd run dev
```

5. Abra no navegador o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173/
```

Durante o uso do site, mantenha o terminal com o Vite aberto.

### Clonando do GitHub

```bash
git clone https://github.com/YasminCalazans10/catalogo-livros.git
cd catalogo-livros
npm install
npm run dev
```

## Observação sobre persistência

Os dados ficam no estado do React. Ao atualizar a página com F5, os livros adicionados, editados, excluídos ou com status modificado durante a sessão retornam aos valores iniciais. Para persistência permanente seria necessário utilizar `localStorage`, API ou banco de dados.
