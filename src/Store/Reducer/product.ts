import React from 'react'
import { I_Product } from '../../Types/types'
import { products } from '../../Models/DataProduct'
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../../Actions/productActionTypes';


function productReducer(state = products, action:any) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      const deleteProduct = state.filter(
        (product: I_Product) => product.id !== action.payload
      );
      return deleteProduct;
    case UPDATE_PRODUCT:
      const updateProduct = state.map((product: I_Product) =>
        product.id === action.payload.id ? action.payload : product
      );
      return updateProduct;
    default:
      return state;
  }

}

export default productReducer



