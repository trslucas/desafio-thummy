import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../contexts/ProductsContext'
import { NoRegistredProducts } from './components/NoRegistredProducts'
import { RegistredProducts } from './components/RegistredProducts'
import { CriarProdutoButton, HomeContainer } from './styles'

export function Home() {
  const navigate = useNavigate()
  const { products } = useContext(ProductsContext)
  return (
    <HomeContainer>
      <CriarProdutoButton
        onClick={() => {
          navigate('/cadastrarProduto')
        }}
      >
        Cadastrar Produto
      </CriarProdutoButton>
      {products.length > 0 ? <RegistredProducts /> : <NoRegistredProducts />}
    </HomeContainer>
  )
}
