import { Action } from '@ngrx/store';
import {Product} from '../model/product.model';
import { ProductsActions, ProductsActionsTypes } from './products.actions';
export enum ProductsStateEnum {

    LOADING = "Loading",
    SUCCESS = "Succes",
    ERROR = "Error",
    INITIAL = "Initial",
    LOADED = "LOADED"
}

export interface ProductsState{
 
    products:Product[],
    errorMessage:string,
    dataState:ProductsStateEnum
}

const initState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL


}
export function productsReducer(state=initState,action:Action):ProductsState{
switch(action.type){
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
  return {...state, dataState:ProductsStateEnum.LOADING}
case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
 return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
 case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
 return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
 case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
  return {...state, dataState:ProductsStateEnum.LOADING}
case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
 return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
 case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
 return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
 case ProductsActionsTypes.SEARCH_PRODUCTS:
  return {...state, dataState:ProductsStateEnum.LOADING}
case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
 return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsActions>action).payload}
 case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
 return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
 
 case ProductsActionsTypes.SELECT_PRODUCT:
  return {...state, dataState:ProductsStateEnum.LOADING}
case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
  let product:Product=(<ProductsActions>action).payload
  let listProducts=[...state.products];
  let data:Product[]=listProducts.map(p=>p.id==product.id?product:p);
 return {...state,dataState:ProductsStateEnum.LOADED,products:data}
 case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
 return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
 
 case ProductsActionsTypes.DELETE_PRODUCT:
  return {...state, dataState:ProductsStateEnum.LOADING}
case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
  let p:Product=(<ProductsActions>action).payload
  let index=state.products.indexOf(p);
  let productsList=[...state.products];
  productsList.splice(index,1);
 
 return {...state,dataState:ProductsStateEnum.LOADED,products:productsList}
 case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
 return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
 default : return {...state}




}

}