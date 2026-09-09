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
- Alteração do status de leitura diretamente em cada card.
- Status disponíveis: **Quero ler**, **Lendo** e **Lido**.
- Cards reutilizáveis.
- Cadastro de novos livros.
- Campo opcional de URL da capa para novos livros.
- Atualização imediata da interface por estado reativo.
- Layout responsivo.
- Estado vazio quando nenhuma busca encontra resultados.

## Passo a passo do desenvolvimento

1. **Setup inicial:** projeto estruturado com Vite e React.
2. **Dados iniciais:** 6 livros com título, autor, gênero, status, páginas, descrição e URL de capa.
3. **Componentização:**
   - `App.jsx`: componente principal, centraliza os estados e organiza a aplicação.
   - `SearchBar.jsx`: componente de busca.
   - `BookCard.jsx`: exibe livro, capa e seletor de status.
   - `BookForm.jsx`: formulário de inclusão de novos livros.
4. **Gerenciamento de estado:** `useState` controla a lista e a busca.
5. **Busca reativa:** `filter()`, `some()` e `includes()` filtram os livros enquanto o usuário digita.
6. **Renderização:** `map()` cria um `BookCard` para cada livro.
7. **Inclusão dinâmica:** `setBooks()` adiciona o novo livro ao estado.
8. **Alteração de status:** `updateBookStatus()` usa `map()` para criar uma nova lista alterando somente o livro selecionado.
9. **Capas:** os livros iniciais usam imagens de capa fornecidas pelo serviço de capas do Open Library.

## Como executar o projeto

### Sem Git/GitHub Desktop

1. Baixe e extraia o ZIP do projeto.
2. Abra a pasta `catalogo-livros-atualizado` no VS Code.
3. Abra **Terminal > New Terminal**.
4. Execute:

```bash
npm install
npm run dev
```

No PowerShell, caso a execução de `npm.ps1` esteja bloqueada, use:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra no navegador o endereço mostrado pelo Vite, normalmente `http://localhost:5173/`.

### Clonando do GitHub

```bash
git clone https://github.com/YasminCalazans10/catalogo-livros.git
cd catalogo-livros
npm install
npm run dev
```

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos finais serão criados na pasta `dist`.

## Conceitos principais

### State

O estado contém dados que podem mudar durante a execução. `books` guarda a lista atual e `search` guarda o termo digitado.

### Props

O `App` passa o objeto `book` e a função `onStatusChange` para `BookCard`. Também envia `value` e `onChange` para `SearchBar`, e `onAdd` para `BookForm`.

### Alteração de status

Ao selecionar um novo status no card, `BookCard` chama:

```jsx
onStatusChange(book.id, event.target.value)
```

No componente pai, `updateBookStatus()` percorre os livros com `map()` e substitui somente o objeto cujo `id` corresponde ao livro alterado:

```jsx
setBooks((current) =>
  current.map((book) =>
    book.id === bookId ? { ...book, status: newStatus } : book
  )
)
```

Isso mantém a atualização de estado imutável e faz o React renderizar o novo status imediatamente.

### Busca

A busca continua considerando título, autor, gênero e status. Portanto, se o status de um livro for alterado, ele passa a responder ao novo status também durante a pesquisa.

## Observação sobre persistência

Os dados ficam no estado do React. Ao atualizar a página do navegador, os livros adicionados e as alterações de status feitas durante a sessão voltam aos valores iniciais. Persistência permanente exigiria `localStorage`, API ou banco de dados, o que não faz parte do escopo atual.
