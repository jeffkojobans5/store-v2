import { createStore } from 'redux'

import { 
    GET_FEATURED_PRODUCTS_SUCCESS, 
    GET_FEATURED_PRODUCTS_BEGIN,
    GET_SHOP_PRODUCTS_BEGIN,    
    GET_SHOP_PRODUCTS_SUCCESS,
    
    FILTER_UPDATE,
    PRODUCTS_FILTER,
    CLEAR_FILTERS,
    
} from '../actions/actions'

let data = {
    featured_products : [],
    products: [],
    products_loading : false,
    products_error : false,
    all_products: [],
    max_price: 0,

    filters : {
        search : "",
        category : "all",
        company: "all",
        colors: "all",
        price : 0,
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
         const { highestPrice , res  } = payload
        return { ...state , products_loading : false ,  products : res , filtered_products : res , all_products : res , filters : { ...state.filters , price : highestPrice } , max_price : highestPrice }
    }

    if(type === FILTER_UPDATE ) {    
        const {name , value } = payload

        if( name === "search") {
            return { ...state , filters : { ...state.filters , [name] : value } }            
        }

        if( name === "category") {
            return { ...state , filters : { ...state.filters , [name] : value } }            
        }

        if( name === "company" ) {
            return { ...state , filters : { ...state.filters , [name] : value } }                        
        }

        if( name === "colors") {
            return { ...state , filters : { ...state.filters , [name] : value } }                                    
        }


        if( name === "price") {
            return { ...state , filters : { ...state.filters , [name] : value } }                                    
        }        

        if( name === "shipping") {
            return { ...state , filters : { ...state.filters , [name] : value } }                                    
        }        
    }

    if(type === PRODUCTS_FILTER ) {
        const { all_products } = state
        const { search, category , company , colors , price , shipping} = state.filters
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

        if (company !== 'all') {
            tempProducts = tempProducts.filter(item => item.company === company);
        }
        
        if (colors !== 'all') {
            tempProducts = tempProducts.filter(item => item.colors.indexOf(colors) != -1);
        }

        tempProducts = tempProducts.filter((product) => product.price <= price)

        if (shipping) {
            tempProducts = tempProducts.filter((product) => product.shipping === true)
          }

        return { ...state, products: tempProducts }        
    }


        if (type === CLEAR_FILTERS) {
            return {
                ...state,
                filters: {
                  ...state.filters,
                  search: '',
                  company: 'all',
                  category: 'all',
                  colors: 'all',
                  price: state.max_price,
                  shipping: false,
                },
              }
        }

    return state;
}

export const store = createStore(productReducer)
