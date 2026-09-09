import { useState } from 'react'
import { BookOpen, Pencil, Trash2, UserRound } from 'lucide-react'
import BookEditForm from './BookEditForm'

const statuses = ['Quero ler', 'Lendo', 'Lido']

function getStatusClass(status) {
  if (status === 'Lido') return 'read'
  if (status === 'Lendo') return 'reading'
  return 'want'
}

export default function BookCard({ book, onStatusChange, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)

  function handleDelete() {
    const confirmed = window.confirm(`Deseja realmente excluir “${book.title}”?`)
    if (confirmed) onDelete(book.id)
  }

  if (isEditing) {
    return (
      <BookEditForm
        book={book}
        onCancel={() => setIsEditing(false)}
        onSave={(updatedBook) => {
          onUpdate(book.id, updatedBook)
          setIsEditing(false)
        }}
      />
    )
  }

  return (
    <article className="book-card">
      <div className="book-cover">
        <img
          key={book.coverUrl}
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
          <div className="page-info">
            <BookOpen size={16} />
            <span>{book.pages} páginas</span>
          </div>

          <div className="card-actions">
            <button className="edit-btn" type="button" onClick={() => setIsEditing(true)}>
              <Pencil size={15} /> Editar
            </button>
            <button className="delete-btn" type="button" onClick={handleDelete}>
              <Trash2 size={15} /> Excluir
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
