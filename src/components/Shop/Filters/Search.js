import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { PRODUCTS_FILTER , FILTER_UPDATE } from '../../../redux/actions/actions'

export function Search () {
    const dispatch = useDispatch();
    let filters = useSelector((state)=>state.filters)
        
    const { search  } = filters
    
   function searchFilter(e) {
            const name = e.target.name ;
            const value = e.target.value ;
            dispatch({ type : FILTER_UPDATE , payload : { name , value }})
        }

        useEffect(()=>{
            dispatch({ type : PRODUCTS_FILTER })           
        },[filters])



    return (

    <Wrapper>
        <input 
            type="text"
            placeholder="Search"   
            name="search"         
            value={ search }
            onChange = { (e)=>searchFilter(e) }
        />
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    input {
        outline: none;
        width: 70%;
        padding: 0.3rem;
        letter-spacing: 0.2rem;
        color: gray;
        background-color: whitesmoke;
        border: none;
        border-radius: 5px;
    }

`