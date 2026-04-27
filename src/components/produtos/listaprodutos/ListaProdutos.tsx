import { useEffect, useState } from 'react'
import { buscar } from '../../../services/Service'
import type { Produto } from '../../../models/Produto'
import CardProdutos from '../cardprodutos/CardProdutos'

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    buscar('/produtos', setProdutos)
  }, [])

  return (
    <div className="flex-1 bg-slate-100 p-8">
      <div className="flex flex-wrap gap-4">
        {produtos.map(prod => (
          <CardProdutos key={prod.id} produto={prod} />
        ))}
      </div>
    </div>
  )
}

export default ListaProdutos