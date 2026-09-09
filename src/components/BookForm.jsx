import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const initialForm = {
  title: '',
  author: '',
  genre: '',
  status: 'Quero ler',
  pages: '',
  description: '',
}

export default function BookForm({ onAdd }) {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState(initialForm)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.title.trim() || !form.author.trim() || !form.genre.trim()) return

    onAdd({
      ...form,
      pages: Number(form.pages) || 0,
      description: form.description.trim() || 'Livro adicionado ao catálogo.',
    })
    setForm(initialForm)
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <button className="primary-btn" onClick={() => setIsOpen(true)}>
        <Plus size={18} /> Adicionar livro
      </button>
    )
  }

  return (
    <section className="form-panel">
      <div className="form-heading">
        <div>
          <span className="eyebrow">NOVO ITEM</span>
          <h2>Adicionar à estante</h2>
        </div>
        <button className="icon-btn" onClick={() => setIsOpen(false)} aria-label="Fechar formulário">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
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
            Páginas
            <input name="pages" type="number" min="0" value={form.pages} onChange={updateField} />
          </label>
          <label className="wide">
            Descrição
            <input name="description" value={form.description} onChange={updateField} />
          </label>
        </div>
        <button className="primary-btn submit-btn" type="submit">
          <Plus size={18} /> Cadastrar livro
        </button>
      </form>
    </section>
  )
}
