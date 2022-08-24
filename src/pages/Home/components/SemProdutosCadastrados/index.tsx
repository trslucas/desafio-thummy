import semProdutosImage from '../../../../assets/empty.svg'

import { SmileySad } from 'phosphor-react'
import { SemProdutosCadastradosContainer } from './styles'

export function SemProdutosCadastrados() {
  return (
    <SemProdutosCadastradosContainer>
      <h1>
        Você ainda não tem nenhum produto cadastrado <SmileySad size={60} />{' '}
      </h1>
      <img src={semProdutosImage} alt="" />
    </SemProdutosCadastradosContainer>
  )
}
