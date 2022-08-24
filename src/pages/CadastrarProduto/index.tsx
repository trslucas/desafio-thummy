import { NovoProdutoForm } from './components/NovoProdutoForm'
import { CadastrarProdutosContainer, NovoProdutoButton } from './styles'

export function CadastrarProduto() {
  return (
    <CadastrarProdutosContainer>
      <h1>Cadastrar Produtos</h1>
      <form action="">
        <NovoProdutoForm />
        <NovoProdutoButton>Novo Produto</NovoProdutoButton>
      </form>
    </CadastrarProdutosContainer>
  )
}
