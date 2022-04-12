import styled from 'styled-components'

export function Price () {
    return (
    
    <Wrapper>
        <p className="filter-header-text"> Price </p>
        <input 
            type="range"            
        />
        <p className="max-price"> $120,000.00 </p>
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    .max-price {
        color: gray;
        letter-spacing: .2rem;
    }
`