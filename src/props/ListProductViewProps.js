import styled from 'styled-components'
import { Link } from 'react-router-dom'

function ListProductViewProps ( {image , name , price , short_description } ) {
    return (
    <Wrapper>
        <div className="list-products">
            <div className="image">
                <img src={image} alt={ image } />
            </div>
            <div className="text">
                <h4> { name } </h4>
                <p className="price"> $ { price } </p>
                <p className="short-description"> { short_description.length > 200 ? short_description.substr( 0 , 150 ) + "..." : short_description} </p>
                <Link to=""> Details </Link>
            </div>
        </div>
    </Wrapper>        
    )
}

const Wrapper = styled.div`
    margin-top: 2rem;
    width: 100%;

    .list-products {
        display: flex;
        padding: 1rem;
        border-radius: 5px;
        transition: 0.2s all;
    }

    .list-products:hover {
        background-color: whitesmoke;

    }

    .image {
        height: 200px;
        width: 400px;
        margin-right: 2rem;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            border-radius: 5px;
            transition: .7s all;
        }
    }

    .image {
        flex: 4;
    }

    .text {
        flex: 8;

        h4 {
            text-transform: capitalize;
            font-weight: 600;
            color: #102A42;
            font-size: 1.2rem;
            letter-spacing: 0.1rem;            
        }

        .price {
            color: #AB7A59;
            font-weight: 600;
            font-size: 0.9rem;
            letter-spacing: 0.1rem;            

        }

        .short-description {
            margin-top: 1rem;
            font-size: 0.9rem;
            text-align: justify;
            color: #617D98;
        }

        a {
            position: relative;
            top: 10px;
            font-size: 0.8rem;
            color: white ;
            background-color: #AB7A59;
            text-decoration: none;
            padding: 0.2rem;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
            padding-left: 0.7rem;
            padding-right: 0.7rem;
        }
    }
`

export default ListProductViewProps

