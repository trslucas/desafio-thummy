import semProdutosImage from '../../../../assets/empty.svg'

import { SmileySad } from 'phosphor-react'
import { NoRegistredProductsContainer } from './styles'

export function NoRegistredProducts() {
  return (
    <NoRegistredProductsContainer>
      <h1>
        Você ainda não tem nenhum produto cadastrado <SmileySad size={60} />{' '}
      </h1>
      <img src={semProdutosImage} alt="" />
    </NoRegistredProductsContainer>
  )
}