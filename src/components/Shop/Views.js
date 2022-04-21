import styled from 'styled-components'
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import { useSelector , useDispatch } from 'react-redux';

export function Views () {
    const dispatch = useDispatch();
    let productsLength = useSelector((state)=>state.products.length)

    return (
        <Wrapper>
            <section>
                  <BsFillGridFill />  
                  <AiOutlineBars />
            </section>
            <section>
                { productsLength + " Products"}
            </section>
            <section>
                <div className="box"></div>
            </section>
            <section>
                <label> Sort By </label>
                <select name="" id="">
                    <option value="">Price Lowest</option>
                    <option value="">Price Highest</option>
                    <option value="">Name (A - Z)</option>
                    <option value="">Name (Z - A)</option>
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
            top: 5px;
            padding-right: .5rem;
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



`