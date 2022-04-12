import styled from 'styled-components'

export function Search () {
    return (
    
    <Wrapper>
        <input 
            type="text"
            placeholder="Search"            
        />
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    input {
        outline: none;
        width: 70%;
        padding: 0.3rem;
        letter-spacing: 0.2rem;
        color: gray;
        background-color: whitesmoke;
        border: none;
        border-radius: 5px;
    }

`