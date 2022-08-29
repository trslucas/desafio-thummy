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

export interface ProductsState {
  products: Product[]
  codigoProduto: number
  nomeProduto: string
  descricaoProduto: string
  quantidadeProduto: number
  quantidadeVendida: number
  preco: number
}

export interface ChangedProduct {
  id: string
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string
  quantidadeProduto?: number
  quantidadeVendida?: number
  preco?: number
}

export function productsReducer(state: ProductsState, action: any) {
  if (ActionTypes.ADD_NEW_PRODUCT) {
    return produce(state, (draft) => {
      draft.products.push(action.payload.newProduct)
    })
  }

  if (ActionTypes.CHANGE_CURRENT_PRODUCT) {
    return produce(state, (draft) => {
      draft.products.push(action.payload.changedProduct)
    })
  }

  if (ActionTypes.DELETE_PRODUCT) {
    const deletedProducts = state.products.filter((product) => {
      if (product.codigoProduto !== state.codigoProduto) {
        return produce(state, (draft) => {
          draft.products.push(action.payload.deletedProducts)
        })
      }
      return state
    })
  }
  return state
}
