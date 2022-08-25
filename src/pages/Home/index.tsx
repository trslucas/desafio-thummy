import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductsContext } from '../../contexts/ProductsContext'
import { NoRegistredProducts } from './components/NoRegistredProducts'
import { RegistredProducts } from './components/RegistredProducts'
import { CriarProdutoButton, HomeContainer } from './styles'

export function Home() {
  const { products } = useContext(ProductsContext)
  return (
    <HomeContainer>
      <CriarProdutoButton>
        <nav>
          <NavLink to="/cadastrarProduto">Cadastrar Produto</NavLink>
        </nav>
      </CriarProdutoButton>
      {products ? <RegistredProducts /> : <NoRegistredProducts />}
      {/* <RegistredProducts /> */}
    </HomeContainer>
  )
}
