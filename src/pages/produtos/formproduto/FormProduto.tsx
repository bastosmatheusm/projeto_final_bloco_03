import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, cadastrar, atualizar } from '../../../services/Service'
import type { Produto } from '../../../models/Produto'
import type { Categoria } from '../../../models/Categoria'

function FormProduto() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const editando = !!id

  const [categorias, setCategorias] = useState<Categoria[]>([])

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: 0,
    foto: '',
    categoria: {} as Categoria
  })

  // 🔹 Buscar produto (edição)
  useEffect(() => {
    if (id) buscar(`/produtos/${id}`, setProduto)
  }, [id])

  // 🔹 Buscar categorias (SEMPRE)
  useEffect(() => {
    buscar('/categorias', setCategorias)
  }, [])

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setProduto({ ...produto, [e.target.name]: e.target.value })
  }

  // 🔥 PARTE MAIS IMPORTANTE
  function selecionarCategoria(e: React.ChangeEvent<HTMLSelectElement>) {
    setProduto({
      ...produto,
      categoria: { id: Number(e.target.value) } as Categoria
    })
  }

  async function salvar(e: React.FormEvent) {
    e.preventDefault()

    if (editando) {
      await atualizar('/produtos', produto, setProduto)
    } else {
      await cadastrar('/produtos', produto, setProduto)
    }

    navigate('/produtos')
  }

  return (
    <div className="flex-1 bg-slate-100 flex flex-col items-center py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        {editando ? 'Editar produto' : 'Cadastrar produto'}
      </h1>

      <form onSubmit={salvar} className="w-full max-w-sm flex flex-col gap-4">

        {/* NOME */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Nome do produto"
            value={produto.nome}
            onChange={atualizarEstado}
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        {/* PREÇO */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Preço</label>
          <input
            type="number"
            name="preco"
            placeholder="Preço"
            value={produto.preco}
            onChange={atualizarEstado}
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        {/* FOTO */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Foto (URL)</label>
          <input
            type="text"
            name="foto"
            placeholder="URL da imagem"
            value={produto.foto}
            onChange={atualizarEstado}
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        {/* 🔥 SELECT DE CATEGORIA */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Categoria</label>
          <select
            value={produto.categoria?.id || ''}
            onChange={selecionarCategoria}
            className="border border-gray-300 rounded px-3 py-2 outline-none focus:border-indigo-500"
          >
            <option value="">Selecione uma categoria</option>

            {categorias.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
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

export default FormProduto