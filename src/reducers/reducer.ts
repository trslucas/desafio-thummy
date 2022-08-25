import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Product {
  id: string
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string
  quantidadeProduto: number
  quantidadeVendida: number
  preco: number
}

interface ProductsState {
  products: Product[]
}

export function productsReducer(state: ProductsState, action: any) {
  if (ActionTypes.ADD_NEW_PRODUCT) {
    return produce(state, (draft) => {
      draft.products.push(action.payload.newProduct)
    })
  }
  return state
}
