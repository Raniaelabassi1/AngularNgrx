import { Action } from "@ngrx/store";
import { ProductsComponent } from "../components/products/products.component";
import { Product } from "../model/product.model";

export enum ProductsActionsTypes{
GET_ALL_PRODUCTS="[Products] Get All products",
GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products success",
GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",

GET_SELECTED_PRODUCTS="[Products] Get Selected products",
GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected products success",
GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected products Error",

SEARCH_PRODUCTS="[Products] Search products",
SEARCH_PRODUCTS_SUCCESS="[Products] Search products success",
SEARCH_PRODUCTS_ERROR="[Products] Search products Error",

SELECT_PRODUCT="[Products] Select product",
SELECT_PRODUCT_SUCCESS="[Products] Select product success",
SELECT_PRODUCT_ERROR="[Products] Select product Error",

DELETE_PRODUCT="[Products] Select product",
DELETE_PRODUCT_SUCCESS="[Products] Select product success",
DELETE_PRODUCT_ERROR="[Products] Select product Error",



}

export class GetAllProductsAction implements Action{
type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
constructor(public payload:any) 
{
    
}}

export class GetAllProductsActionSuccess implements Action{
    type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]) 
    {
        
    }}

    export class GetAllProductsActionError implements Action{
        type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
        constructor(public payload:string) 
        {
            
        }}

/////////////////////////////////////////selected
        export class GetSelectedProductsAction implements Action{
            type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
            constructor(public payload:any) 
            {
                
            }}
            
            export class GetSelectedProductsActionSuccess implements Action{
                type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
                constructor(public payload:Product[]) 
                {
                    
                }}
            
                export class GetSelectedProductsActionError implements Action{
                    type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
                    constructor(public payload:string) 
                    {
                        
                    }}
/////////////////////////////////////////search
export class SearchProductsAction implements Action{
    type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
    constructor(public payload:string) 
    {
        
    }}
    
    export class SearchProductsActionSuccess implements Action{
        type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
        constructor(public payload:Product[]) 
        {
            
        }}
    
        export class SearchProductsActionError implements Action{
            type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
            constructor(public payload:string) 
            {
                
            }}

///////////////////////////////////////////select product
export class SelectProductAction implements Action{
    type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT;
    constructor(public payload:Product) 
    {
        
    }}
    
    export class SelectProductActionSuccess implements Action{
        type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
        constructor(public payload:Product) 
        {
            
        }}
    
        export class SelectProductActionError implements Action{
            type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_ERROR;
            constructor(public payload:string) 
            {
                
            }}

///////////////////////////////////////////delete product
export class DeleteProductAction implements Action{
    type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT;
    constructor(public payload:Product) 
    {
        
    }}
    
    export class DeleteProductActionSuccess implements Action{
        type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
        constructor(public payload:Product) 
        {
            
        }}
    
        export class DeleteProductActionError implements Action{
            type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_ERROR;
            constructor(public payload:string) 
            {
                
            }}

export type ProductsActions=
GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError |GetSelectedProductsAction 
|GetSelectedProductsActionSuccess|GetSelectedProductsActionError|SearchProductsAction|SearchProductsActionSuccess
|SearchProductsActionError|SelectProductAction|SelectProductActionSuccess|SelectProductActionError
|DeleteProductAction|DeleteProductActionSuccess|DeleteProductActionError
;



    
    


