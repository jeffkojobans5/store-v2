import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { SEARCH_FILTER } from '../../../redux/actions/actions'

export function Search () {
    const dispatch = useDispatch();
    let filters = useSelector((state)=>state.filters)
    let filtered_products = useSelector((state)=>state.filtered_products)
    let products = useSelector((state)=>state.products)
        
    const { search  } = filters
    
   // BCCNKTXE
    
   function searchFilter(e) {
            console.log('i am filtered prod' , filtered_products)
            let copy_filtered_products = [...filtered_products]
            const name = e.target.name ;
            const value = e.target.value ;
            let filterValue;
            
            if(name == "search") {
                filterValue = value
                 copy_filtered_products = copy_filtered_products.filter(item => {
                      let name = item.name.toLowerCase().trim();
                      return name.includes(e.target.value) ? item : null;
                });
                dispatch({ type : SEARCH_FILTER , payload : { name , value , copy_filtered_products } })                                
            }

            // console.log(products)
            console.log(copy_filtered_products)

        }
        
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