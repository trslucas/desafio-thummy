import { Product } from './reducer'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  CHANGE_CURRENT_PRODUCT = 'CHANGE_CURRENT_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export function addNewProductAction(newProduct: Product) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

// export function changeProductAction() {
//   return {
//     type: ActionTypes.CHANGE_CURRENT_PRODUCT,
//   }
// }

// export function deleteProductAction() {
//   return {
//     type: ActionTypes.DELETE_PRODUCT,
//   }
// }