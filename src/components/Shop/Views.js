import styled from 'styled-components'
import { useEffect } from 'react'
import { SORT_PRODUCTS , UPDATE_SORT , GRID_LIST } from '../../redux/actions/actions'
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import { useSelector , useDispatch } from 'react-redux';

export function Views () {
    const dispatch = useDispatch();
    let productsLength = useSelector((state)=>state.products.length)
    let sort = useSelector((state)=>state.sort)

    function sortProduct (e) {
        let name = e.target.name
        let value = e.target.value       
        dispatch({ type : UPDATE_SORT , payload : { name , value }   })
    }

    function checkGridList () {
        dispatch({ type : GRID_LIST   })        
    }

    useEffect(()=>{
        dispatch({ type : SORT_PRODUCTS })  
    },[sort])

    return (
        <Wrapper>
            <section>
                  <BsFillGridFill onClick={ ()=>checkGridList() }/>  
                  <AiOutlineBars onClick={ ()=>checkGridList() }/>
            </section>
            <section>
                { productsLength + " Products"}
            </section>
            <section>
                <div className="box"></div>
            </section>
            <section>
                <label> Sort By </label>
                <select name="sort" id="" onChange = { (e)=>sortProduct(e)} >
                    <option value="price-low">Price Lowest</option>
                    <option value="price-high">Price Highest</option>
                    <option value="name-asc">Name (A - Z)</option>
                    <option value="name-desc">Name (Z - A)</option>
                </select>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;    

    section:nth-child(1) {
        flex: 1;
        
        svg {
            position: relative;
            top: 0px;
            padding-right: .5rem;
            height: 25px;
            width: 25px
        }
    }

    section:nth-child(2) {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #324D67;
    }

    section:nth-child(3) {
        flex: 6;
        display: flex;
        justify-content: center;
        align-items: center;

        .box {
            height: 1px;
            width: 90%;
            background-color: #324D67;
        }
    }

    section:nth-child(4) {
        flex: 3;
        
        select {
            font-size: 1rem;
            outline: none;
            background-color: whitesmoke;
            border-radius: 5px;
            border: 1px solid gray;
        }
    }    

    @media only screen and (max-width: 800px){
        svg {
            top: 10px !important;
        }
    }


`