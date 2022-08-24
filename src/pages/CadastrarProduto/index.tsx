import { NovoProdutoForm } from './components/NovoProdutoForm'
import { CadastrarProdutosContainer, NovoProdutoButton } from './styles'

export function CadastrarProduto() {
  return (
    <CadastrarProdutosContainer>
      <form action="">
        <NovoProdutoForm />
        <NovoProdutoButton>Novo Produto</NovoProdutoButton>
      </form>
    </CadastrarProdutosContainer>
  )
}
