import { Pencil, Trash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type { Produto } from '../../../models/Produto'

interface Props {
  produto: Produto
}

function CardProdutos({ produto }: Props) {
  return (
    <div className="w-64 border border-gray-300 rounded shadow-sm bg-white">
      <div className="bg-indigo-700 text-white px-4 py-2 font-bold rounded-t">
        Produto
      </div>

      <div className="px-4 py-3 text-gray-800 space-y-1">
        <p><strong>{produto.nome}</strong></p>
        
        {/* CORREÇÃO AQUI: Convertendo para número antes de usar o toFixed */}
        <p>R$ {Number(produto.preco).toFixed(2)}</p>
        
        <p>{produto.categoria?.nome}</p>
        <img
          src={produto.foto}
          alt={produto.nome}
          className="w-full h-32 object-cover rounded mt-2"
        />
      </div>

      <div className="bg-indigo-700 flex justify-center gap-6 py-2 rounded-b">
        <Link to={`/editarproduto/${produto.id}`}>
          <Pencil size={20} color="white" className="cursor-pointer hover:text-yellow-300" />
        </Link>

        <Link to={`/deletarproduto/${produto.id}`}>
          <Trash size={20} color="white" className="cursor-pointer hover:text-red-300" />
        </Link>
      </div>
    </div>
  )
}

export default CardProdutos