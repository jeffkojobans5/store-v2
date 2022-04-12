import styled from 'styled-components'

export function Company () {
    return (
    
    <Wrapper>
        <p className="filter-header-text"> Company </p>
        <select name="" value="">
            <option value=""> All </option>
            <option value=""> Liddy </option>
            <option value=""> Ikea </option>
            <option value=""> Caressa </option>
        </select>
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    select {
        width: 50%;
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        outline: none;
        padding: 0.2rem;
        letter-spacing: 0.2rem;
        border-radius: 5px;
        color: #617D98;
    }

`