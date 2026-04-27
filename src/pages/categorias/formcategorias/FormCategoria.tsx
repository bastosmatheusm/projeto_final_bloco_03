import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, cadastrar, atualizar } from '../../../services/Service'
import type { Categoria } from '../../../models/Categoria'

function FormCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const editando = !!id

  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '' })

  useEffect(() => {
    if (id) buscar(`/categorias/${id}`, setCategoria)
  }, [id])

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value })
  }

  async function salvar(e: React.FormEvent) {
    e.preventDefault()
    if (editando) {
      await atualizar('/categorias', categoria, setCategoria)
    } else {
      await cadastrar('/categorias', categoria, setCategoria)
    }
    navigate('/categorias')
  }

  return (
    <div className="flex-1 bg-slate-100 flex flex-col items-center py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        {editando ? 'Editar categoria' : 'Cadastrar categoria'}
      </h1>

      <form onSubmit={salvar} className="w-full max-w-sm flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Categoria</label>
          <input
            type="text"
            name="nome"
            placeholder="Categoria"
            value={categoria.nome}
            onChange={atualizarEstado}
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800 transition font-semibold"
        >
          {editando ? 'Atualizar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  )
}

export default FormCategoria