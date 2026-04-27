import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import DeletarCategoria from './pages/categorias/deletarcategoria/DeletarCategoria'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import FormCategoria from './pages/categorias/formcategorias/FormCategoria'

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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App