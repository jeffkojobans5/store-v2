import styled from 'styled-components'

import { Header , Banner , Filter , ProductsList } from '../components/index'

function Shop () {
    return (
        <Wrapper>
            <Header />
            <Banner />
            <section>
                <div className="products container">
                    <Filter />
                    <ProductsList />
                </div>
            </section>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color: pink;
    .products {
        display: flex;
        justify-content:center;
        align-items:center;
    }
    
`
export default Shop