import { FormContainer, ProductInput } from './styles'

export function ChangeProductForm() {
  return (
    <FormContainer>
      <label htmlFor="nomeProduto">Nome do Produto</label>
      <ProductInput id="nomeProduto" placeholder="Digite o nome do produto" />

      <label htmlFor="codigoProduto">Código do Produto</label>
      <ProductInput
        id="codigoProduto"
        type="number"
        placeholder="Informe o código do produto"
      />

      <label htmlFor="descricaoProduto">Descrição do produto</label>
      <ProductInput id="descricaoProduto" placeholder="Descreva o Produto" />
    </FormContainer>
  )
}
