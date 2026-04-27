import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex-1 bg-cyan-100 flex items-center justify-around px-16 py-12">
      
      {/* Texto */}
      <div className="max-w-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Seja bem vindo!</h1>
        <p className="text-gray-700 mb-6">Aqui você encontra Medicamentos e Cosméticos!</p>
        <Link to="/cadastrarcategoria">
          <button className="bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800 transition">
            Cadastrar Produto
          </button>
        </Link>
      </div>

      {/* Ilustração — placeholder enquanto não tiver a imagem */}
      <div className="w-64 h-64 bg-blue-300 rounded-full flex items-center justify-center text-6xl select-none">
        💊
      </div>

    </div>
  )
}

export default Home