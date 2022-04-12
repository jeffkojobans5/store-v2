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
    ${'' /* background-color: brown; */}
    flex: 3;

    position: sticky;
    top: 10px;
    
    .filter {
        flex: 3;
    }
    
`
