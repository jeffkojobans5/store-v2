import styled from 'styled-components'

function GridProductListProps ( {image , name , price } ) {
    return (
    <Wrapper>
        <div className="grid-products">
            <div className="product-image">
                <img src= { image }  alt="" />
            </div>
            <div className="name-price">
                <div className="name">
                    <p> {name} </p>
                </div>
                <div className="price">
                    <p> $ { price} </p>
                </div>
            </div>
        </div>
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    width: 32%;
    height: auto;
    margin-top: 2rem;
    ${'' /* margin-top: 2rem; */}

    .product-image {
        height: 175px;
        overflow: hidden;
    }

    .product-image img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 5px;
        transition: .7s all;
    }

    .product-image img:hover {
        transform: scale(1.2);
    }

    .name-price {
        display: flex;
        margin-top: 0.5rem;
    }

    .name {
        color: #102A42;

        p {
            text-transform: capitalize;
            font-size: 0.9rem;
        }
    }

    .price {
        color: #AB7A59;

        p {
            float: right;
            font-size: 0.9rem;
        }        
    }

    .name , .price {
        flex: 1;
    }

    @media only screen and (max-width: 800px) {
        width: 47%;
    }

    @media only screen and (max-width: 400px) {
        width: 100%;
    }    

`

export default GridProductListProps

