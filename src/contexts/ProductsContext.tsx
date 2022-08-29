import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addNewProductAction,
  changeProductAction,
  deleteProductAction,
} from '../reducers/actions'

import { Product, productsReducer } from '../reducers/reducer'

interface CreateProductsData {
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string
  quantidadeProduto: number
  quantidadeVendida: number
  preco: number
}

export interface ChangeProductsData {
  id?: string
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string
}

interface ProductsContextData {
  products: Product[]
  createANewProduct: (data: CreateProductsData) => void
  changeAProductInfo: (data: ChangeProductsData) => void
  deleteAProduct: (productCode: number) => void
}

export const ProductsContext = createContext({} as ProductsContextData)

interface ProductsContextProvidersProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProvidersProps) {
  const [productsState, dispatch] = useReducer(productsReducer, {
    products: [],
    codigoProduto: 0,
    nomeProduto: '',
    descricaoProduto: '',
    quantidadeVendida: 0,
    quantidadeProduto: 0,
    preco: 0,
  })
  const { products } = productsState

  function createANewProduct(data: CreateProductsData) {
    const id = crypto.randomUUID()
    const newProduct: Product = {
      id,
      codigoProduto: data.codigoProduto,
      descricaoProduto: data.descricaoProduto,
      nomeProduto: data.nomeProduto,
      preco: data.preco,
      quantidadeProduto: data.quantidadeProduto,
      quantidadeVendida: data.quantidadeVendida,
    }
    dispatch(addNewProductAction(newProduct))
  }
  // função de alterar produto

  function changeAProductInfo(data: ChangeProductsData) {
    const id = crypto.randomUUID()

    const changedProductNewInfos: ChangeProductsData = {
      id,
      codigoProduto: data.codigoProduto,
      descricaoProduto: data.descricaoProduto,
      nomeProduto: data.descricaoProduto,
    }

    const changedProduct: any = products.filter((product) => {
      if (changedProductNewInfos.codigoProduto === product.codigoProduto) {
        changedProductNewInfos.id = product.id
        changedProductNewInfos.nomeProduto = product.nomeProduto
        changedProductNewInfos.descricaoProduto = product.descricaoProduto
        changedProductNewInfos.codigoProduto = product.codigoProduto
      }

      dispatch(changeProductAction(changedProduct))
      return changedProduct
    })
  }

  // função de deletar produto
  function deleteAProduct(productCode: number) {
    const productsWithoutDeletedProduct = products.filter(
      (product) => product.codigoProduto !== productCode,
    )
    dispatch(deleteProductAction(productsWithoutDeletedProduct))
  }
  return (
    <ProductsContext.Provider
      value={{
        products,
        createANewProduct,
        changeAProductInfo,
        deleteAProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
