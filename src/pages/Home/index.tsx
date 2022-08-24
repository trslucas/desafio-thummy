import { NavLink } from 'react-router-dom'
import { ProdutosCadastrados } from './components/ProdutosCadastrados'
// import { SemProdutosCadastrados } from './components/SemProdutosCadastrados'

import { CriarProdutoButton, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CriarProdutoButton>
        <nav>
          <NavLink to="/cadastrarProduto">Cadastrar Produto</NavLink>
        </nav>
      </CriarProdutoButton>
      <ProdutosCadastrados />
      {/* <SemProdutosCadastrados /> */}
    </HomeContainer>
  )
}
