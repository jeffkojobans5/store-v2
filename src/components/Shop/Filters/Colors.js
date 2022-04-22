import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import {  PRODUCTS_FILTER , FILTER_UPDATE} from '../../../redux/actions/actions'

export function Colors () {
    const dispatch = useDispatch();
    let filters = useSelector((state)=>state.filters)
    let all_products = useSelector((state)=>state.all_products)
    
    let allColors = all_products.reduce((prev , curr) => {
        return [...prev , ...curr.colors]
    },''); 
    
    let newColorSet = [ 'all' , ...new Set (allColors) ]
    console.log(newColorSet)


    function filterColors (e , color ) {
        let name = e.target.id
        let value = color
        dispatch({ type : FILTER_UPDATE , payload : { name , value  } })   
    }  
    
    
    useEffect(()=>{
        dispatch({ type : PRODUCTS_FILTER })  
        console.log(all_products)         
    },[filters])

    return (
    
    <Wrapper>
        <p className="filter-header-text"> Filter By Color </p>

        { newColorSet.map((color)=>{
            return (
                <section key={color}>
                    <div className="filter-color">
                        { color === 'all' ? <p className={ filters.colors == color ? 'active' : null} id="colors" onClick = { (e)=>filterColors(e , color ) }> All </p> : "" } { color !== 'all' ? <p style={{ backgroundColor: color }} id="colors" className={ filters.colors === color ? 'active' : null} onClick = { (e)=>filterColors(e , color ) }> <span id="colors" className={ filters.colors == color ? 'active plus-sign' : 'plus-sign'} > &#10003; </span></p>  : "" }   
                    </div>
                    <div className="filter-color-name">
                        {/* <p> { color } </p> */}
                    </div>
                    <div className="filter-color-quantity">
                        {/* <p> 2 </p> */}
                    </div>
                </section>
            )
        }) }
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    .plus-sign {
        opacity: 0;
        color: white;
    }

    .filter-color:hover .plus-sign {
        display: block !important;
    }

    section {
        display: flex;
        margin-top: 0.5rem;
        cursor: pointer;
    }

    .active {
        visibility: visible !important;
        opacity: 1 !important;
    }

    .filter-color p {
        background-color: white;
        opacity: 0.4;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem;
    }

    .filter-color-name p {
        text-align: left;
    }

    .filter-color-quantity p{
        height: 15px;
        width: 20px;
        border-radius: 40%;
        display: flex;
        justify-content: center;
        align-items: center;    
        padding: 0.2rem;
        border: 1px solid #bbb;
        color: gray;
    }

    .filter-color {
        flex: 2;
    }

    .filter-color-name , .filter-color-quantity {
        flex: 5;
    }
`