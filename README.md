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

## Passo a Passo do Desenvolvimento

1. **Setup inicial:** o projeto foi estruturado com Vite e React.
2. **Dados iniciais:** foram cadastrados 6 livros em uma estrutura JavaScript contendo título, autor, gênero, status, páginas e descrição.
3. **Estrutura de componentes:**
   - `App.jsx`: componente principal, centraliza os estados e organiza a página.
   - `SearchBar.jsx`: componente de busca, recebe o valor e a função de alteração via props.
   - `BookCard.jsx`: componente reutilizável que recebe um livro via props e apresenta seus dados.
   - `BookForm.jsx`: formulário para inclusão dinâmica de novos livros.
4. **Gerenciamento de estado:** `useState` controla a lista de livros e o termo de busca.
5. **Busca reativa:** a lista é filtrada conforme o usuário digita, sem recarregar a página.
6. **Renderização:** `map()` transforma os livros filtrados em componentes `BookCard`.
7. **Inclusão dinâmica:** o formulário adiciona um novo objeto ao estado da lista e a tela é atualizada automaticamente.
8. **Interface:** foi criado um layout responsivo, moderno e adaptável a desktop e celular.

## Como executar o projeto

```bash
git clone https://github.com/YasminCalazans10/catalogo-livros.git
cd catalogo-livros
npm install
npm run dev
```

Depois, abra no navegador o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos finais serão criados na pasta `dist`.

## Funcionalidades

- Lista inicial com 6 livros.
- Busca em tempo real por título, autor, gênero ou status.
- Cards reutilizáveis.
- Cadastro de novos livros.
- Atualização imediata da interface por estado reativo.
- Layout responsivo.
- Estado vazio quando nenhuma busca encontra resultados.

## Principais conceitos demonstrados

### State
O estado representa dados que podem mudar durante o uso da aplicação. No `App.jsx`, a lista de livros e o texto da busca são estados criados com `useState`.

### Props
Props são dados enviados de um componente pai para um componente filho. O `App` envia cada objeto `book` ao `BookCard` e envia `value` e `onChange` ao `SearchBar`.

### Reatividade
Quando o usuário altera a busca ou adiciona um livro, o React detecta a mudança de estado e renderiza novamente somente o necessário.

### filter()
É utilizado para gerar uma nova lista contendo apenas os livros que correspondem ao termo pesquisado.

### map()
É utilizado para percorrer a lista filtrada e criar um `BookCard` para cada livro.

## Desafios e aprendizados

O principal objetivo foi organizar a aplicação em componentes independentes e compreender o fluxo de dados no React. A equipe trabalhou com estado, props, eventos de formulário, filtragem de arrays e renderização condicional, mantendo a interface em uma única página.
