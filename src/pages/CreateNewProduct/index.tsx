import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CreateProductsContainer, NewProductButton } from './styles'
import { NewProductForm } from './components/NewProductForm'
import { ProductsContext } from '../../contexts/ProductsContext'
import { useContext } from 'react'

const newProductFormValidationSchema = zod.object({
  nomeProduto: zod.string().min(1, 'Informe o nome do produto'),
  codigoProduto: zod.number().min(1).max(100),
  descricaoProduto: zod.string().min(1, 'Informe a descrição do produto'),
  quantidadeProduto: zod.number().min(1).max(100),
  quantidadeVendida: zod.number().min(1).max(100),
  preco: zod.number().min(1).max(100),
})

type NewProductFormData = zod.infer<typeof newProductFormValidationSchema>

export function CreateNewProduct() {
  const { createANewProduct } = useContext(ProductsContext)
  const newProductForm = useForm<NewProductFormData>({
    resolver: zodResolver(newProductFormValidationSchema),
    defaultValues: {
      nomeProduto: '',
      codigoProduto: 0,
      descricaoProduto: '',
      quantidadeProduto: 0,
      quantidadeVendida: 0,
      preco: 0,
    },
  })

  const { handleSubmit, reset } = newProductForm

  function handleCreateNewProduct(data: NewProductFormData) {
    createANewProduct(data)
    reset()
  }
  return (
    <CreateProductsContainer>
      <h1>Cadastrar Produtos</h1>
      <form onSubmit={handleSubmit(handleCreateNewProduct)} action="">
        <FormProvider {...newProductForm}>
          <NewProductForm />
        </FormProvider>
        <NewProductButton type="submit">Novo Produto</NewProductButton>
      </form>
    </CreateProductsContainer>
  )
}
