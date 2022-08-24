import { NavLink } from 'react-router-dom'
import { RegistredProducts } from './components/RegistredProducts'
import { CriarProdutoButton, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CriarProdutoButton>
        <nav>
          <NavLink to="/cadastrarProduto">Cadastrar Produto</NavLink>
        </nav>
      </CriarProdutoButton>
      <RegistredProducts />
      {/* <NoRegistredProducts /> */}
    </HomeContainer>
  )
}
