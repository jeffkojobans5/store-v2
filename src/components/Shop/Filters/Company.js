import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { PRODUCTS_FILTER , FILTER_UPDATE} from '../../../redux/actions/actions'


export function Company () {
    const dispatch = useDispatch();
    let filters = useSelector((state)=>state.filters)
    let all_products = useSelector((state)=>state.all_products)
    
    let allCompany = all_products.map(product => product.company)
    let uniqueCat = new Set(allCompany); 
    let uniqueCompany = Array.from(uniqueCat); 
    uniqueCompany.unshift('all')   
    
    function filterCompany (e) {
        let name = e.target.name
        let value = e.target.value
        console.log(filters)
        dispatch({ type : FILTER_UPDATE , payload : { name , value  } })   
    }   
    
    useEffect(()=>{
        dispatch({ type : PRODUCTS_FILTER })           
    },[filters])
    
    
    return (
    <Wrapper>
        <p className="filter-header-text"> Company </p>
        <select name="company" value={ filters.company } onChange = { (e)=>filterCompany(e) }>
            { uniqueCompany.map((product)=>{
                return (
                    <option value={product} key={product}> { product } </option>
                )
            })}
        </select>
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    select {
        width: 50%;
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        outline: none;
        padding: 0.2rem;
        letter-spacing: 0.2rem;
        border-radius: 5px;
        color: #617D98;
    }

    select {
        text-transform: capitalize;
    }

`