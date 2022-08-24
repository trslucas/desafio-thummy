import { FormContainer, ProductInput } from './styles'

export function NovoProdutoForm() {
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

      <label htmlFor="quantidadeProduto">Quantidade</label>
      <ProductInput
        id="quantidadeProduto"
        type="number "
        placeholder="Quantidade Inserida"
      />

      <label htmlFor="quantidadeVendida">Quantidade Vendida</label>
      <ProductInput
        id="quantidadeVendida"
        type="number"
        placeholder="Quantidade Vendida"
      />

      <label htmlFor="preco">Preço</label>
      <ProductInput id="preco" type="number " placeholder="Preço" />
    </FormContainer>
  )
}
