import styled from 'styled-components'

export function FreeShipping () {
    return (
    
    <Wrapper>
        <p className="filter-header-text">  </p>
            <label htmlFor="">Free Shipping</label>
                <input 
                    type="checkbox"
                    name="shipping"           
                />
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    label {
        margin-right: 0.5rem;
    }
`