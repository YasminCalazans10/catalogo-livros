import { useState } from 'react'
import { Check, X } from 'lucide-react'

export default function BookEditForm({ book, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    status: book.status,
    pages: book.pages,
    coverUrl: book.coverUrl,
    description: book.description,
  })

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.title.trim() || !form.author.trim() || !form.genre.trim()) return

    onSave({
      ...form,
      title: form.title.trim(),
      author: form.author.trim(),
      genre: form.genre.trim(),
      pages: Number(form.pages) || 0,
      coverUrl: form.coverUrl.trim(),
      description: form.description.trim() || 'Livro sem descrição cadastrada.',
    })
  }

  return (
    <article className="book-card edit-card">
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="edit-form-heading">
          <div>
            <span className="eyebrow">EDITAR LIVRO</span>
            <h3>Atualizar cadastro</h3>
          </div>
          <button className="icon-btn" type="button" onClick={onCancel} aria-label="Cancelar edição">
            <X size={19} />
          </button>
        </div>

        <label>
          Título *
          <input name="title" value={form.title} onChange={updateField} required />
        </label>

        <label>
          Autor *
          <input name="author" value={form.author} onChange={updateField} required />
        </label>

        <label>
          Gênero *
          <input name="genre" value={form.genre} onChange={updateField} required />
        </label>

        <label>
          Status
          <select name="status" value={form.status} onChange={updateField}>
            <option>Quero ler</option>
            <option>Lendo</option>
            <option>Lido</option>
          </select>
        </label>

        <label>
          Quantidade de páginas
          <input
            name="pages"
            type="number"
            min="0"
            value={form.pages}
            onChange={updateField}
          />
        </label>

        <label>
          URL da capa
          <input
            name="coverUrl"
            type="url"
            placeholder="https://..."
            value={form.coverUrl}
            onChange={updateField}
          />
        </label>

        <label>
          Descrição
          <textarea
            name="description"
            rows="5"
            value={form.description}
            onChange={updateField}
          />
        </label>

        <div className="edit-actions">
          <button className="cancel-btn" type="button" onClick={onCancel}>
            <X size={16} /> Cancelar
          </button>
          <button className="primary-btn" type="submit">
            <Check size={17} /> Salvar alterações
          </button>
        </div>
      </form>
    </article>
  )
}
