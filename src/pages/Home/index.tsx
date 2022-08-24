import { NavLink } from 'react-router-dom'
import { NovoProdutoForm } from './components/NovoProdutoForm'
import { CriarProduto, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <NovoProdutoForm />
      </form>
      <CriarProduto>
        <nav>
          <NavLink to="/cadastrarProduto">Cadastrar Produto</NavLink>
        </nav>
      </CriarProduto>
    </HomeContainer>
  )
}
