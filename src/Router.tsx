import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { AlterarProdutos } from './pages/AlterarProdutos'
import { CadastrarProduto } from './pages/CadastrarProduto'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrarProduto" element={<CadastrarProduto />} />
        <Route path="/alterarProduto" element={<AlterarProdutos />} />
      </Route>
    </Routes>
  )
}
