import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { CATEGORY_FILTER , CATEGORY_FILTER_ALL } from '../../../redux/actions/actions'

export function Category () {
    const dispatch = useDispatch();
    let filters = useSelector((state)=>state.filters)
    let filtered_products = useSelector((state)=>state.filtered_products)
    let all_products = useSelector((state)=>state.all_products)
    let products = useSelector((state)=>state.products)
    
    let allCategory = all_products.map(item => item.category)
    let uniqueCat = new Set(allCategory); 
    let uniqueCategory = Array.from(uniqueCat); 
    uniqueCategory.unshift('all')

    function filterCategory (e) {
        console.log('i am filtered prod' , filtered_products)
        let selectCategory = e.target.innerHTML
        let copy_filteredCategory = [...filtered_products].filter((item) => {
            return item.category == e.target.innerHTML
        })
        
        if(selectCategory === 'all' ) {
            copy_filteredCategory = all_products.filter(item => item.category)
            dispatch({ type : CATEGORY_FILTER_ALL , payload : { selectCategory , copy_filteredCategory } })                                
        } 
        else {
            dispatch({ type : CATEGORY_FILTER , payload : { selectCategory , copy_filteredCategory } })                                
        }

    }   
    
    return (
    <Wrapper>
        <p className="filter-header-text"> Category </p>
            <div className="category-button">
                { uniqueCategory.map((item)=>{
                    return (
                        <button type="button" name="category" className="active" onClick={ (e)=>filterCategory(e) }>{item}</button>
                    )
                }) }
            </div>        
    </Wrapper>        
    )
}

const Wrapper = styled.div`

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