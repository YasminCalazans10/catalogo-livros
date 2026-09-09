import { BookOpen, UserRound } from 'lucide-react'

export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-cover" aria-hidden="true">
        <span>{book.title.charAt(0)}</span>
      </div>

      <div className="book-content">
        <div className="book-topline">
          <span className="genre">{book.genre}</span>
          <span className={`status ${book.status === 'Lido' ? 'read' : 'reading'}`}>
            {book.status}
          </span>
        </div>

        <h3>{book.title}</h3>
        <p className="author"><UserRound size={15} /> {book.author}</p>
        <p className="description">{book.description}</p>

        <div className="card-footer">
          <BookOpen size={16} />
          <span>{book.pages} páginas</span>
        </div>
      </div>
    </article>
  )
}
