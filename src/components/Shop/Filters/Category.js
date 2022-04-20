import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { CATEGORY_FILTER , PRODUCTS_FILTER , FILTER_UPDATE} from '../../../redux/actions/actions'

export function Category () {
    const dispatch = useDispatch();
    let filters = useSelector((state)=>state.filters)
    let all_products = useSelector((state)=>state.all_products)
    
    let allCategory = all_products.map(product => product.category)
    let uniqueCat = new Set(allCategory); 
    let uniqueCategory = Array.from(uniqueCat); 
    uniqueCategory.unshift('all')

    function filterCategory (e) {
        let name = e.target.name
        let value = e.target.innerHTML
        dispatch({ type : FILTER_UPDATE , payload : { name , value  } })   
        console.log(filters)
    }   
    
    useEffect(()=>{
        dispatch({ type : PRODUCTS_FILTER })           
    },[filters])

    return (
    <Wrapper>
        <p className="filter-header-text"> Category </p>
            <div className="category-button">
                { uniqueCategory.map((product , index )=>{
                    return (
                        <button type="button" name="category" className={ filters.category === product ? 'active' : null}    active onClick={ (e)=>filterCategory(e) }>{product}</button>
                    )
                }) }
            </div>        
    </Wrapper>        
    )
}


const Wrapper = styled.div`
    .active {
        border-bottom: 1px solid #AB7A59;
        color: #AB7A59;
    }

    button {
        display: block;
        border: none;
        background-color: transparent;
        height: 1.5rem;
        letter-spacing: 0.2rem;
        text-transform: capitalize;
        cursor: pointer;
    }
`