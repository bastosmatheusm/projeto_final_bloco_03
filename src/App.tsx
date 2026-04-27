import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import DeletarCategoria from './pages/categorias/deletarcategoria/DeletarCategoria'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import FormCategoria from './pages/categorias/formcategorias/FormCategoria'

// produtos
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import FormProduto from './pages/produtos/formproduto/FormProduto'
import DeletarProduto from './pages/produtos/deletarproduto/DeletarProduto'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/cadastrarproduto" element={<FormProduto />} />
          <Route path="/editarproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App