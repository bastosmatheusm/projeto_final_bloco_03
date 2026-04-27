import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, deletar } from '../../../services/Service'
import type { Categoria } from '../../../models/Categoria'

function DeletarCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '' })

  useEffect(() => {
    buscar(`/categorias/${id}`, setCategoria)
  }, [id])

  async function confirmarDeletar() {
    await deletar(`/categorias/${id}`)
    navigate('/categorias')
  }

  return (
    <div className="flex-1 bg-slate-100 flex flex-col items-center py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Deletar categoria</h1>
      <p className="text-gray-500 mb-6">Você tem certeza de que deseja apagar a categoria a seguir?</p>

      <div className="w-80 border border-gray-300 rounded shadow-sm bg-white">
        <div className="bg-indigo-700 text-white px-4 py-2 font-bold rounded-t">
          Categoria
        </div>
        <div className="px-4 py-4 text-gray-800 font-medium">
          {categoria.nome}
        </div>
        <div className="flex rounded-b overflow-hidden">
          <button
            onClick={() => navigate('/categorias')}
            className="flex-1 bg-red-400 text-white py-2 hover:bg-red-500 transition flex items-center justify-center text-xl"
          >
            ✕
          </button>
          <button
            onClick={confirmarDeletar}
            className="flex-1 bg-indigo-500 text-white py-2 hover:bg-indigo-600 transition flex items-center justify-center text-xl"
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria