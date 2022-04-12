import styled from 'styled-components'

export function ClearFilter () {
    return (
    
    <Wrapper>
        <p className="filter-header-text">  </p>    
        <button type="submit" className="clear-btn"> Clear Filters </button>
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    .clear-btn {
        background-color: #BB2525;
        width: 70%;
        border: none;
        padding: 0.2rem;
        font-size: 1rem;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
`