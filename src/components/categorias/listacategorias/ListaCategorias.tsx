import { useEffect, useState } from 'react'
import { buscar } from '../../../services/Service'
import CardCategorias from '../../../components/categorias/cardcategorias/CardCategorias'
import type { Categoria } from '../../../models/Categoria'

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  useEffect(() => {
    buscar('/categorias', setCategorias)
  }, [])

  return (
    <div className="flex-1 bg-slate-100 p-8">
      <div className="flex flex-wrap gap-4">
        {categorias.map(cat => (
          <CardCategorias key={cat.id} categoria={cat} />
        ))}
      </div>
    </div>
  )
}

export default ListaCategorias