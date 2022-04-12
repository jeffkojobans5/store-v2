import styled from 'styled-components'

function ProductsList () {
    return (
        <Wrapper>
            <div className="ProductsList">
                <h1> hello</h1>
            </div>
        </Wrapper>            
    )
}

export default ProductsList 

const Wrapper = styled.div`
    ${'' /* background-color: indigo; */}
    flex: 9;

    .ProductsList {
        flex: 12;
    }

`
