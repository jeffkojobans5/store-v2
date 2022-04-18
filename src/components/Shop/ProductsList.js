import styled from 'styled-components'
import { Views , GridProductList } from '../index'

function ProductsList () {
    return (
        <Wrapper>
            <div className="ProductsList">
                <Views />
                <section>
                    <GridProductList />
                </section>
            </div>
        </Wrapper>            
    )
}

export default ProductsList 

const Wrapper = styled.div`
    flex: 9;

    .ProductsList {
        flex: 12;
    }

    section {
        display: flex;   
        justify-content: space-between;
        flex-wrap : wrap     
    }

`
