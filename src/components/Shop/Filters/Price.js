import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { PRODUCTS_FILTER , FILTER_UPDATE} from '../../../redux/actions/actions'

export function Price () {
    const dispatch = useDispatch();
    let filters = useSelector((state)=>state.filters)
    let max_price = useSelector((state)=>state.max_price)

    function filterPrice (e) {
        let name = e.target.name
        let value = e.target.value
        console.log( name , value )
        dispatch({ type : FILTER_UPDATE , payload : { name , value  } })          
    }

    useEffect(()=>{
        dispatch({ type : PRODUCTS_FILTER })  
    },[filters])

    let num = 8398497
    return (
    
    <Wrapper>
        <p className="filter-header-text"> Price </p>
        <input 
            type="range" 
            id="price" 
            name="price" 
            min="0" 
            max= { max_price }      
            value={ filters.price }
            onChange = { (e)=>filterPrice(e)}
        />
        <p className="max-price"> $ { filters.price.toLocaleString('en-US', {minimumFractionDigits: 2}) } </p>
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    .max-price {
        color: gray;
        letter-spacing: .2rem;
    }
`