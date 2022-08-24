import { ChangeProductForm } from './components/ProdutoAlteradoForm'
import { ChangeProductButton, ChangeProductContainer } from './styles'

export function ChangeProduct() {
  return (
    <ChangeProductContainer>
      <h1>Alterar Produtos</h1>
      <form action="">
        <ChangeProductForm />
        <ChangeProductButton>Alterar Informações</ChangeProductButton>
      </form>
    </ChangeProductContainer>
  )
}
