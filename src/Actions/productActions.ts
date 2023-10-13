import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./productActionTypes";
import { I_Product } from "../Types/types";

export const addProduct = (product: I_Product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product: I_Product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId: number) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});
