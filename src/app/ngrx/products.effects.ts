import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';
import {  Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import {  DeleteProductActionError, DeleteProductActionSuccess, 
   GetAllProductsAction, GetAllProductsActionError, GetAllProductsActionSuccess,
    GetSelectedProductsActionError, GetSelectedProductsActionSuccess, 
    ProductsActions, ProductsActionsTypes, SearchProductsActionError,
     SearchProductsActionSuccess, SelectProductActionError, 
     SelectProductActionSuccess } from './products.actions';
import{catchError, map,mergeMap} from'rxjs/operators';
import {Action} from '@ngrx/store';
@Injectable()
export class ProductsEffects{
   
constructor(private productService:ProductService,private effectActions:Actions){}

 getAllProductsEffect:Observable<Action>=createEffect(
   
    ()=> this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
    mergeMap((action)=>{
       return this.productService.getProducts()
       .pipe(
           map((products)=>new GetAllProductsActionSuccess(products)),
           catchError((err)=>of(new GetAllProductsActionError(err)))
       )

        })
       ) );
   

    getSelectedProductsEffect:Observable<Action>=createEffect(
   
      ()=> this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action)=>{
         return this.productService.getSelectedProducts()
         .pipe(
             map((products)=>new GetSelectedProductsActionSuccess(products)),
             catchError((err)=>of(new GetSelectedProductsActionError(err)))
         )
  
      })
         )
      );

      SearchProductsEffect:Observable<Action>=createEffect(
   
         ()=> this.effectActions.pipe(
         ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
         mergeMap((action:ProductsActions)=>{
            return this.productService.searchProducts(action.payload)
            .pipe(
                map((products)=>new SearchProductsActionSuccess(products)),
                catchError((err)=>of(new SearchProductsActionError(err)))
            )
     
         })
            )
         );

         SelectProductEffect:Observable<Action>=createEffect(
   
            ()=> this.effectActions.pipe(
            ofType(ProductsActionsTypes.SELECT_PRODUCT),
            mergeMap((action:ProductsActions)=>{
               return this.productService.setSelected(action.payload)
               .pipe(
                   map((product)=>new SelectProductActionSuccess(product)),
                   catchError((err)=>of(new SelectProductActionError(err.message)))
               )
        
            })
               )
            );



            DeleteProductEffect:Observable<Action>=createEffect(
   
               ()=> this.effectActions.pipe(
               ofType(ProductsActionsTypes.DELETE_PRODUCT),
               mergeMap((action:ProductsActions)=>{
                  return this.productService.delete(action.payload)
                  .pipe(
                      map(()=>new DeleteProductActionSuccess(action.payload)),
                      catchError((err)=>of(new DeleteProductActionError(err.message)))
                  )
           
               })
                  ) );
              





    getAllProductsErrorEffect:Observable<Action>=createEffect(
   
        ()=> this.effectActions.pipe(
        ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
        mergeMap((action)=>{
           return this.productService.getProducts()
           .pipe(
               map((products)=>new GetAllProductsActionSuccess(products) )
              
           )
    
        })
    
           ) );
    
       

       

}
