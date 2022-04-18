import styled from 'styled-components'
import { Category , ClearFilter , Colors , Company , FreeShipping , Price , Search } from '../index'

function Filter () {
    return (
        <Wrapper>
            <div className="filter">
                <Search />
                <Category />
                <Company />
                <Colors />
                <Price />
                <FreeShipping />
                <ClearFilter />
            </div>
        </Wrapper>            
    )
}

export default Filter 

const Wrapper = styled.div`

    flex: 3;

    .filter {
        flex: 3;
        position: -webkit-sticky;
        position: sticky;
        top: 20px;
    }
    
`
