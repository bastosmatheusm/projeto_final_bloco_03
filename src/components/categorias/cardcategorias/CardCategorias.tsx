import { Pencil, Trash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type { Categoria } from '../../../models/Categoria'


interface Props {
  categoria: Categoria
}

function CardCategorias({ categoria }: Props) {
  return (
    <div className="w-64 border border-gray-300 rounded shadow-sm bg-white">
      <div className="bg-indigo-700 text-white px-4 py-2 font-bold rounded-t">
        Categoria
      </div>
      <div className="px-4 py-3 text-gray-800">
        {categoria.nome}
      </div>
      <div className="bg-indigo-700 flex justify-center gap-6 py-2 rounded-b">
        <Link to={`/editarcategoria/${categoria.id}`}>
          <Pencil size={20} color="white" className="cursor-pointer hover:text-yellow-300" />
        </Link>
        <Link to={`/deletarcategoria/${categoria.id}`}>
          <Trash size={20} color="white" className="cursor-pointer hover:text-red-300" />
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias