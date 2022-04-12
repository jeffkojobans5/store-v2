import styled from 'styled-components'

export function Category () {
    return (
    <Wrapper>
        <p className="filter-header-text"> Category </p>
            <div className="category-button">
                <button type="button" name="category" className="active">all</button>
                <button type="button" name="category" className="null">office</button>
                <button type="button" name="category" className="null">living room</button>
                <button type="button" name="category" className="null">kitchen</button>
                <button type="button" name="category" className="null">bedroom</button>
                <button type="button" name="category" className="null">dining</button>
                <button type="button" name="category" className="null">kids</button>
            </div>        
    </Wrapper>        
    )
}

const Wrapper = styled.div`

    button {
        display: block;
        border: none;
        background-color: transparent;
        height: 1.5rem;
        letter-spacing: 0.2rem;
        text-transform: capitalize;
        cursor: pointer;
    }
`