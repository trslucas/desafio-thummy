import { ProdutoAlteradoForm } from './components/ProdutoAlteradoForm'
import { AlterarProdutosContainer, ProdutoAlteradoButton } from './styles'

export function ChangeProduct() {
  return (
    <AlterarProdutosContainer>
      <h1>Alterar Produtos</h1>
      <form action="">
        <ProdutoAlteradoForm />
        <ProdutoAlteradoButton>Alterar Informações</ProdutoAlteradoButton>
      </form>
    </AlterarProdutosContainer>
  )
}
