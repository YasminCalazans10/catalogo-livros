import { useMemo, useState } from 'react'
import { Library, Sparkles } from 'lucide-react'
import SearchBar from './components/SearchBar'
import BookCard from './components/BookCard'
import BookForm from './components/BookForm'

const initialBooks = [
  {
    id: 1,
    title: 'Dom Casmurro',
    author: 'Machado de Assis',
    genre: 'Clássico',
    status: 'Lido',
    pages: 256,
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9788525406798-L.jpg',
    description: 'Um clássico brasileiro sobre memória, ciúme e as ambiguidades de Bentinho.',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Distopia',
    status: 'Lido',
    pages: 336,
    coverUrl: 'https://covers.openlibrary.org/b/olid/OL7576608M-L.jpg',
    description: 'Uma distopia marcante sobre vigilância, poder e controle da informação.',
  },
  {
    id: 3,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    genre: 'Fábula',
    status: 'Lendo',
    pages: 96,
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9788522005239-L.jpg',
    description: 'Uma narrativa sensível sobre amizade, afeto e a forma como enxergamos o mundo.',
  },
  {
    id: 4,
    title: 'Torto Arado',
    author: 'Itamar Vieira Junior',
    genre: 'Romance',
    status: 'Quero ler',
    pages: 264,
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9789896605773-L.jpg',
    description: 'Romance brasileiro que acompanha duas irmãs e suas relações com terra e ancestralidade.',
  },
  {
    id: 5,
    title: 'A Hora da Estrela',
    author: 'Clarice Lispector',
    genre: 'Literatura brasileira',
    status: 'Quero ler',
    pages: 88,
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9786555320350-L.jpg',
    description: 'A trajetória de Macabéa em uma narrativa sobre existência, linguagem e invisibilidade.',
  },
  {
    id: 6,
    title: 'O Hobbit',
    author: 'J. R. R. Tolkien',
    genre: 'Fantasia',
    status: 'Lido',
    pages: 336,
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9788595084742-L.jpg',
    description: 'Bilbo Bolseiro deixa sua rotina para viver uma aventura repleta de perigos e descobertas.',
  },
]

export default function App() {
  const [books, setBooks] = useState(initialBooks)
  const [search, setSearch] = useState('')

  const filteredBooks = useMemo(() => {
    const term = search.trim().toLocaleLowerCase('pt-BR')
    if (!term) return books

    return books.filter((book) =>
      [book.title, book.author, book.genre, book.status]
        .some((value) => value.toLocaleLowerCase('pt-BR').includes(term)),
    )
  }, [books, search])

  function addBook(book) {
    setBooks((current) => [{ ...book, id: Date.now() }, ...current])
  }

  function updateBookStatus(bookId, newStatus) {
    setBooks((current) =>
      current.map((book) =>
        book.id === bookId ? { ...book, status: newStatus } : book,
      ),
    )
  }

  function updateBook(bookId, updatedBook) {
    setBooks((current) =>
      current.map((book) =>
        book.id === bookId ? { ...book, ...updatedBook, id: book.id } : book,
      ),
    )
  }

  function deleteBook(bookId) {
    setBooks((current) => current.filter((book) => book.id !== bookId))
  }

  return (
    <main>
      <header className="hero">
        <nav className="nav container">
          <a className="brand" href="#" aria-label="Estante - início">
            <span className="brand-mark"><Library size={22} /></span>
            <span>estante.</span>
          </a>
          <span className="team">Yasmin Calazans & Vitor Assis</span>
        </nav>

        <div className="hero-content container">
          <div>
            <span className="eyebrow"><Sparkles size={14} /> CATÁLOGO INTERATIVO</span>
            <h1>Livros para guardar,<br /><em>histórias para descobrir.</em></h1>
            <p>
              Explore nossa estante, encontre títulos em tempo real,
              adicione novas leituras e gerencie os dados de cada livro.
            </p>
          </div>
        </div>
      </header>

      <section className="catalog container">
        <div className="catalog-heading">
          <div>
            <span className="eyebrow">NOSSA COLEÇÃO</span>
            <h2>Catálogo de livros</h2>
            <p>{books.length} livros cadastrados na estante</p>
          </div>
          <BookForm onAdd={addBook} />
        </div>

        <SearchBar value={search} onChange={setSearch} />

        <div className="result-line">
          <span>
            {filteredBooks.length} {filteredBooks.length === 1 ? 'resultado' : 'resultados'}
          </span>
          {search && <span>para “{search}”</span>}
        </div>

        {filteredBooks.length > 0 ? (
          <div className="book-grid">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onStatusChange={updateBookStatus}
                onUpdate={updateBook}
                onDelete={deleteBook}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Library size={34} />
            <h3>Nenhum livro encontrado</h3>
            <p>Tente outro termo de busca ou cadastre um novo livro.</p>
          </div>
        )}
      </section>
    </main>
  )
}
