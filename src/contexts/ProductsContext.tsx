import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { addNewProductAction } from '../reducers/actions'

import { Product, productsReducer } from '../reducers/reducer'

interface CreateProductsData {
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string
  quantidadeProduto: number
  quantidadeVendida: number
  preco: number
}

interface ProductsContextData {
  products: Product[]
  createANewProduct: (data: CreateProductsData) => void
}

export const ProductsContext = createContext({} as ProductsContextData)

interface ProductsContextProvidersProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProvidersProps) {
  const [productsState, dispatch] = useReducer(
    productsReducer,
    {
      products: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@thummi-crud:products-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )
  const { products } = productsState

  useEffect(() => {
    const stateJSON = JSON.stringify(productsState)

    localStorage.setItem('@thummi-crud:products-state-1.0.0', stateJSON)
  }, [productsState])

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

  return (
    <ProductsContext.Provider value={{ products, createANewProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
