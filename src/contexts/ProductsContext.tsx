import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

export interface Product {
  id?: string
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string | null
  quantidadeProduto?: number
  quantidadeVendida?: number
  preco?: number
}

export interface ChangeProduct {
  id?: string
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string
}

interface CreateProductsData {
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string
  quantidadeProduto: number
  quantidadeVendida: number
  preco: number
}

interface ChangeProductsData {
  id?: string
  nomeProduto: string
  codigoProduto: number
  descricaoProduto: string
}

interface ProductsContextData {
  products: Product[]
  createANewProduct: (data: CreateProductsData) => void
  changeAProductInfo: (data: ChangeProductsData) => void
  deleteAProduct: (codigoProduto: number) => void
}

export const ProductsContext = createContext({} as ProductsContextData)

interface ProductsContextProvidersProps {
  children: ReactNode
}

export interface ProductsState {
  products: Product[]
  codigoProduto: number
  descricaoProduto: string
  nomeProduto: string
}

export function ProductsContextProvider({
  children,
}: ProductsContextProvidersProps) {
  const [productsState, dispatch] = useReducer(
    (state: ProductsState, action: any) => {
      if (action.type === 'ADD_NEW_PRODUCT') {
        const productAlreadyExists = state.products.findIndex(
          (product) =>
            product.codigoProduto === action.payload.newProduct.codigoProduto,
        )

        console.log(productAlreadyExists)

        if (productAlreadyExists !== -1) {
          const updatedProduct = [...state.products]
          updatedProduct[productAlreadyExists].quantidadeProduto +=
            action.payload.newProduct.codigoProduto

          return {
            ...state,
            products: updatedProduct,
          }
        }
        return {
          ...state,
          products: [...state.products, action.payload.newProduct],
        }
      }
      if (action.type === 'CHANGE_CURRENT_PRODUCT') {
        return {
          ...state,
          products: state.products.map((product) => {
            if (
              product.codigoProduto ===
              action.payload.updatedProduct.codigoProduto
            ) {
              return {
                ...product,
                descricaoProduto:
                  action.payload.updatedProduct.descricaoProduto,
                nomeProduto: action.payload.updatedProduct.nomeProduto,
              }
            }
            return product
          }),
        }
      }

      if (action.type === 'DELETE_PRODUCT') {
        return {
          ...state,
          products: state.products.filter(
            (product) => product.codigoProduto !== action.payload.codigoProduto,
          ),
        }
      }
      return state
    },
    {
      products: [],
      codigoProduto: 0,
      descricaoProduto: '',
      nomeProduto: '',
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@thummi-crud:products-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        products: [],
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(productsState)

    localStorage.setItem('@thummi-crud:products-state-1.0.0', stateJSON)
  }, [productsState])
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

    dispatch({
      type: 'ADD_NEW_PRODUCT',
      payload: {
        newProduct,
      },
    })
  }

  function changeAProductInfo(data: ChangeProductsData) {
    const updatedProduct: Product = {
      codigoProduto: data.codigoProduto,
      descricaoProduto: data.descricaoProduto,
      nomeProduto: data.nomeProduto,
    }
    dispatch({
      type: 'CHANGE_CURRENT_PRODUCT',
      payload: {
        updatedProduct,
      },
    })
  }

  function deleteAProduct(codigoProduto: number) {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: {
        codigoProduto,
      },
    })
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
