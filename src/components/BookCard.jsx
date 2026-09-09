import { BookOpen, UserRound } from 'lucide-react'

const statuses = ['Quero ler', 'Lendo', 'Lido']

function getStatusClass(status) {
  if (status === 'Lido') return 'read'
  if (status === 'Lendo') return 'reading'
  return 'want'
}

export default function BookCard({ book, onStatusChange }) {
  return (
    <article className="book-card">
      <div className="book-cover">
        <img
          src={book.coverUrl}
          alt={`Capa do livro ${book.title}`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            event.currentTarget.nextElementSibling.style.display = 'grid'
          }}
        />
        <div className="cover-fallback" aria-hidden="true">
          <span>{book.title.charAt(0)}</span>
        </div>
      </div>

      <div className="book-content">
        <div className="book-topline">
          <span className="genre">{book.genre}</span>
          <span className={`status ${getStatusClass(book.status)}`}>
            {book.status}
          </span>
        </div>

        <h3>{book.title}</h3>
        <p className="author"><UserRound size={15} /> {book.author}</p>
        <p className="description">{book.description}</p>

        <div className="status-control">
          <label htmlFor={`status-${book.id}`}>Status de leitura</label>
          <select
            id={`status-${book.id}`}
            value={book.status}
            onChange={(event) => onStatusChange(book.id, event.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="card-footer">
          <BookOpen size={16} />
          <span>{book.pages} páginas</span>
        </div>
      </div>
    </article>
  )
}
