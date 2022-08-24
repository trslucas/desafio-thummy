import { useFormContext } from 'react-hook-form'
import { FormContainer, ProductInput } from './styles'

export function ChangeProductForm() {
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
        min={0}
        max={100}
        placeholder="Informe o código do produto"
        {...register('codigoProduto', { valueAsNumber: true })}
      />

      <label htmlFor="descricaoProduto">Descrição do produto</label>
      <ProductInput
        id="descricaoProduto"
        placeholder="Descreva o Produto"
        {...register('descricaoProduto')}
      />
    </FormContainer>
  )
}
