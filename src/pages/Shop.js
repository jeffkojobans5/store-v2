import styled from 'styled-components'

import { Header , Banner , Filter , ProductsList } from '../components/index'

function Shop () {
    return (
        <Wrapper>
            <Header />
            <Banner />
            <section className="shop-section">
                <div className="products container">
                    <Filter />
                    <ProductsList />
                </div>
            </section>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    .products {
        padding-top: 2rem;
        display: flex;
        justify-content:center;
    }

    .shop-section {
        margin-bottom: 5rem;
    }
    
`
export default Shop