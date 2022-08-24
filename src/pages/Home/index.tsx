import { NavLink } from 'react-router-dom'
import {
  CriarProdutoButton,
  HomeContainer,
  SemProdutosCadastradosContainer,
} from './styles'
import semProdutosImage from '../../assets/empty.svg'

export function Home() {
  return (
    <HomeContainer>
      <CriarProdutoButton>
        <nav>
          <NavLink to="/cadastrarProduto">Cadastrar Produto</NavLink>
        </nav>
      </CriarProdutoButton>
      <SemProdutosCadastradosContainer>
        <h1>Você ainda não tem nenhum produto cadastrado :(</h1>
        <img src={semProdutosImage} alt="" />
      </SemProdutosCadastradosContainer>
    </HomeContainer>
  )
}
