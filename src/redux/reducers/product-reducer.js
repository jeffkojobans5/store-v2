import { createStore } from 'redux'

import { 
    GET_FEATURED_PRODUCTS_SUCCESS, 
    GET_FEATURED_PRODUCTS_BEGIN,
    GET_SHOP_PRODUCTS_BEGIN,    
    GET_SHOP_PRODUCTS_SUCCESS,
    
    SEARCH_FILTER,
    COMPANY_FILTER,
    CATEGORY_FILTER,
    CATEGORY_FILTER_ALL
    
} from '../actions/actions'

let data = {
    featured_products : [],
    products: [],
    products_loading : 'false',
    products_error : false,
    all_products: [],

    filters : {
        search : "",
        category : "all",
        comp: "All",
        colors: "All",
        price : 310000,
        shipping: false,
    },
    
    filtered_products : [],
}

function productReducer ( state = data , { type , payload} ) {
    if(type === GET_FEATURED_PRODUCTS_BEGIN ) {
        return { ...state , products_loading : true}
    }
    
    if(type === GET_FEATURED_PRODUCTS_SUCCESS ) {
        return { ...state , featured_products : payload , products_loading : false }
    }

    if(type === GET_SHOP_PRODUCTS_BEGIN ) {
        return { ...state , products_loading : true}
    }    

    if(type === GET_SHOP_PRODUCTS_SUCCESS) {
        return { ...state , products_loading : false ,  products : payload , filtered_products : payload , all_products : payload }
    }

    // Filter Search
    if(type === SEARCH_FILTER ) {    
         const { value , copy_filtered_products } = payload
        return { ...state , filters : { ...state.filters , search : value } , products : copy_filtered_products }
    }

    // Filter Company
    if(type === CATEGORY_FILTER ) {    
        const { selectCategory , copy_filteredCategory } = payload
        return { ...state , filters : { ...state.filters , category : selectCategory } , products : copy_filteredCategory }
    }

    if(type === CATEGORY_FILTER_ALL) {
        const { selectCategory , copy_filteredCategory } = payload
        return { ...state , filters : { ...state.filters , category : selectCategory } , products : copy_filteredCategory }
    }

    return state;
}

export const store = createStore(productReducer)
