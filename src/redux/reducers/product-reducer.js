import { 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_BEGIN    
} 
from '../actions/actions'
import { createStore } from 'redux'

let data = {
    featured_products : [],
    products: [],
    products_loading : false,
    products_error : false,
}

function productReducer ( state = data , action ) {
    if(action.type == GET_PRODUCTS_BEGIN ) {
        return { ...state , products_loading : true}
    }
    
    if(action.type == GET_PRODUCTS_SUCCESS ) {
        return { ...state , featured_products : action.payload , products_loading : false }
    }

    return state;
}

export const store = createStore(productReducer)