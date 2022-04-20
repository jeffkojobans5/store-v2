import { createStore } from 'redux'

import { 
    GET_FEATURED_PRODUCTS_SUCCESS, 
    GET_FEATURED_PRODUCTS_BEGIN,
    GET_SHOP_PRODUCTS_BEGIN,    
    GET_SHOP_PRODUCTS_SUCCESS,
    
    FILTER_UPDATE,
    PRODUCTS_FILTER,
    
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

    if(type === FILTER_UPDATE ) {    
        const {name , value } = payload

        if( name === "search") {
            return { ...state , filters : { ...state.filters , [name] : value } }            
        }

        if( name === "category") {
            return { ...state , filters : { ...state.filters , [name] : value } }            
        }
    }

    if(type === PRODUCTS_FILTER ) {
        const { all_products } = state
        const { search, category } = state.filters
        let tempProducts = [...all_products]
        
        if (search) {
          tempProducts = tempProducts.filter(product => {
            let name = product.name.toLowerCase().trim();
            return name.includes(search) ? product : null;
          });            
        }

        if (category !== 'all') {
          tempProducts = tempProducts.filter(
            (product) => product.category === category
          )
        }   
        
        return { ...state, products: tempProducts }        
    }

    return state;
}

export const store = createStore(productReducer)
