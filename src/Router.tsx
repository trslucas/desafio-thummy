import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { ChangeProduct } from './pages/ChangeProduct'
import { CreateNewProduct } from './pages/CreateNewProduct'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrarProduto" element={<CreateNewProduct />} />
        <Route path="/alterarProduto" element={<ChangeProduct />} />
      </Route>
    </Routes>
  )
}
