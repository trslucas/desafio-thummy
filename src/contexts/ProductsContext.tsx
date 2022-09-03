import { createContext, ReactNode, useReducer } from 'react'

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
        return {
          ...state,
          products: [...state.products, action.payload.newProduct],
        }
      }

      // const sameProduct: Product = action.payload.newProduct
      // if (sameProduct) {
      //   return {
      //     ...state,
      //     products: state.products.map((product) => {
      //       if (product.codigoProduto === state.codigoProduto) {
      //         return {
      //           ...product,
      //           quantidadeVendida: +1,
      //         }
      //       }
      //       return product
      //     }),
      //   }
      // }
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
  )

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
      type: 'DELETED_PRODUCT',
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
