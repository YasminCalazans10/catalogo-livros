import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrap">
      <Search size={19} aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Busque por título, autor ou gênero..."
        aria-label="Buscar livros"
      />
    </div>
  )
}
