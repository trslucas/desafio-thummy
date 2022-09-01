import { ChangeProductButton, ChangeProductContainer } from './styles'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ChangeProductForm } from './components/ChangeProductForm'
import { ProductsContext } from '../../contexts/ProductsContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const changeProductFormValidationSchema = zod.object({
  nomeProduto: zod.string().min(1, 'Informe o nome do produto'),
  codigoProduto: zod.number().min(1).max(100),
  descricaoProduto: zod.string().min(1, 'Informe a descrição do produto'),
})

type ChangeProductFormData = zod.infer<typeof changeProductFormValidationSchema>

export function ChangeProduct() {
  const { changeAProductInfo } = useContext(ProductsContext)

  const changeProductForm = useForm<ChangeProductFormData>({
    resolver: zodResolver(changeProductFormValidationSchema),
    defaultValues: {
      nomeProduto: '',
      codigoProduto: 0,
      descricaoProduto: '',
    },
  })

  const { handleSubmit, reset } = changeProductForm
  const navigate = useNavigate()

  function handleUpdateProduct(data: ChangeProductFormData) {
    changeAProductInfo(data)
    reset()

    setTimeout(() => {
      navigate('/')
    }, 500)
  }

  return (
    <ChangeProductContainer>
      <h1>Alterar Produtos</h1>
      <form onSubmit={handleSubmit(handleUpdateProduct)} action="">
        <FormProvider {...changeProductForm}>
          <ChangeProductForm />
        </FormProvider>
        <ChangeProductButton type="submit">
          Alterar Informações
        </ChangeProductButton>
      </form>
    </ChangeProductContainer>
  )
}
