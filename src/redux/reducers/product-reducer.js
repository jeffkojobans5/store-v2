import { 
    GET_FEATURED_PRODUCTS_SUCCESS, 
    GET_FEATURED_PRODUCTS_BEGIN,
    GET_SHOP_PRODUCTS_BEGIN,    
    GET_SHOP_PRODUCTS_SUCCESS    
} from '../actions/actions'

import { createStore } from 'redux'

let data = {
    featured_products : [],
    products: [],
    products_loading : false,
    products_error : false,
}

function productReducer ( state = data , { type , payload} ) {
    if(type == GET_FEATURED_PRODUCTS_BEGIN ) {
        return { ...state , products_loading : true}
    }
    
    if(type == GET_FEATURED_PRODUCTS_SUCCESS ) {
        return { ...state , featured_products : payload , products_loading : false }
    }

    if(type == GET_SHOP_PRODUCTS_BEGIN ) {
        return { ...state , products_loading : true}
    }    

    if(type == GET_SHOP_PRODUCTS_SUCCESS) {
        return { ...state , products_loading : false ,  products : payload  }
    }

    return state;
}

export const store = createStore(productReducer)