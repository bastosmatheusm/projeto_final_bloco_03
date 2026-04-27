import { MagnifyingGlass, User, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full bg-slate-900 text-white flex items-center justify-between px-6 py-3 gap-4">
      
      {/* Logo */}
      <Link to="/home" className="flex items-center gap-2 min-w-fit">
        <span className="text-red-500 text-3xl font-bold">✚</span>
        <span className="text-white font-bold text-lg tracking-wide">FARMÁCIA</span>
      </Link>

      {/* Barra de busca */}
      <div className="flex items-center bg-white rounded w-full max-w-sm">
        <input
          type="text"
          placeholder="Procurar"
          className="w-full px-3 py-2 text-gray-700 rounded-l outline-none text-sm"
        />
        <button className="bg-blue-600 px-3 py-2 rounded-r">
          <MagnifyingGlass size={18} color="white" />
        </button>
      </div>

      {/* Links e ícones */}
      <div className="flex items-center gap-6 min-w-fit">
        <Link to="/categorias" className="text-sm hover:text-blue-300 whitespace-nowrap">
          Categorias
        </Link>
        <Link to="/cadastrarcategoria" className="text-sm hover:text-blue-300 whitespace-nowrap">
          Cadastrar Categoria
        </Link>
        <User size={24} className="cursor-pointer hover:text-blue-300" />
        <ShoppingCart size={24} className="cursor-pointer hover:text-blue-300" />
      </div>

    </nav>
  )
}

export default Navbar