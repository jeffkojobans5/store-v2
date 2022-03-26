import { INCREASE , GET_FEATURED_PRODUCTS} from '../actions/actions'
import { createStore } from 'redux';

let counter = {
    featuredProducts : [],
    gender : 'male'
}


function productReducer ( state = counter , { type , payload}) {
    if(type == INCREASE) {
        return { ...state , number : state.number + 2  }
    }
    if(type == GET_FEATURED_PRODUCTS) {
        return { ...state , featuredProducts : payload }
    }

    return state
}

export const store = createStore(productReducer)

