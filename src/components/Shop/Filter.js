import styled from 'styled-components'
import { Category , ClearFilter , Colors , Company , FreeShipping , InputRange , Search } from '../index'

function Filter () {
    return (
        <Wrapper>
            <div className="filter">
                <Search />
            </div>
        </Wrapper>            
    )
}

export default Filter 

const Wrapper = styled.div`
    background-color: brown;
    flex: 3;

    .filter {
        flex: 3;
    }
    
`
