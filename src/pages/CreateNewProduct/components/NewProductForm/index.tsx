import { useFormContext } from 'react-hook-form'
import { FormContainer, ProductInput } from './styles'

export function NewProductForm() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="nomeProduto">Nome do Produto</label>
      <ProductInput
        id="nomeProduto"
        placeholder="Digite o nome do produto"
        {...register('nomeProduto')}
      />

      <label htmlFor="codigoProduto">Código do Produto</label>
      <ProductInput
        id="codigoProduto"
        type="number"
        placeholder="Informe o código do produto"
        min={0}
        max={100}
        {...register('codigoProduto', { valueAsNumber: true })}
      />

      <label htmlFor="descricaoProduto">Descrição do produto</label>
      <ProductInput
        id="descricaoProduto"
        placeholder="Descreva o Produto"
        {...register('descricaoProduto')}
      />

      <label htmlFor="quantidadeProduto">Quantidade</label>
      <ProductInput
        id="quantidadeProduto"
        type="number"
        placeholder="Quantidade Inserida"
        min={0}
        max={100}
        {...register('quantidadeProduto', { valueAsNumber: true })}
      />

      <label htmlFor="quantidadeVendida">Quantidade Vendida</label>
      <ProductInput
        id="quantidadeVendida"
        type="number"
        placeholder="Quantidade Vendida"
        min={0}
        max={100}
        {...register('quantidadeVendida', { valueAsNumber: true })}
      />

      <label htmlFor="preco">Preço</label>
      <ProductInput
        id="preco"
        type="number"
        placeholder="Preço"
        min={0}
        max={100}
        {...register('preco', { valueAsNumber: true })}
      />
    </FormContainer>
  )
}
