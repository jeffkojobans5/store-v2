import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { PRODUCTS_FILTER , FILTER_UPDATE} from '../../../redux/actions/actions'

export function FreeShipping () {
    const dispatch = useDispatch();
    let filters = useSelector((state)=>state.filters)

    function filterFreeShipping (e) {
        let name = e.target.name
        let value = e.target.checked
        dispatch({ type : FILTER_UPDATE , payload : { name , value  } })          
    }

    // useEffect(()=>{
    //     dispatch({ type : PRODUCTS_FILTER })  
    // },[filters])

    return (
    <Wrapper>
        <p className="filter-header-text">  </p>
            <label htmlFor="">Free Shipping</label>
                <input 
                    type="checkbox"
                    name="shipping"     
                    onChange={ (e)=>filterFreeShipping(e) }      
                />
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    label {
        margin-right: 0.5rem;
    }
`