import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import axios from 'axios';
import { products_url } from '../../helpers/constants/constants';
import { GET_FEATURED_PRODUCTS_SUCCESS , GET_FEATURED_PRODUCTS_BEGIN } from '../../redux/actions/actions'
import styled from 'styled-components'
import FeaturedProductsBox from './FeaturedProductsBox'
import Loading from '../../media/loading.gif'

function FeaturedProducts () {
    const dispatch = useDispatch();
    const products_loading = useSelector((state)=>state.products_loading)
    const featuredProd = useSelector((state)=>state.featured_products)
    console.log(products_loading)
    function fetchProducts () {
        dispatch({ type : GET_FEATURED_PRODUCTS_BEGIN })
        axios.get(products_url).then((response)=>{
            dispatch({ type : GET_FEATURED_PRODUCTS_SUCCESS , payload : response.data.slice(0,5)})
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    useEffect(()=>{
        fetchProducts()
    },[])

    return (
        <Wrapper>
            <h1> Featured Products</h1>
            <p className="heading-p"> WoodMart is a powerful eCommerce theme for WordPress. </p>
            <div className="container">
                    { products_loading ? <img src={ Loading } className="loading" alt="loading..." />
                    :
                    <>
                        { featuredProd.length > 1  ? 
                        <section className="featured">
                                <img src={ featuredProd[0]['image'] } />
                                <p> { featuredProd[0]['name'] }</p><br/>                     
                                <small> { featuredProd[0]['price'] } </small>                     
                        </section>
                        : " "}

                        { featuredProd.length > 1  ? 
                        <section> 
                            <div className="product">
                                <FeaturedProductsBox image = { featuredProd[1]['image']} price = { featuredProd[1]['price']} name = { featuredProd[1]['name']}/>
                                <FeaturedProductsBox image = { featuredProd[2]['image']} price = { featuredProd[2]['price']} name = { featuredProd[2]['name']}/>
                            </div>
                            <div className="product">
                                <FeaturedProductsBox image = { featuredProd[3]['image']} price = { featuredProd[3]['price']} name = { featuredProd[3]['name']}/>
                                <FeaturedProductsBox image = { featuredProd[4]['image']} price = { featuredProd[4]['price']} name = { featuredProd[4]['name']}/>
                            </div>
                        </section>
                        : " "}
                    </>                    
                    }                    
            </div>
        </Wrapper>    
    )
}

const Wrapper = styled.div`
    margin-bottom: 3rem;
    .container {
        display: flex;
        margin-top: 3rem;
    }

    h1 {
        text-align: center;
        color: #AB7A5F;
    }

    .heading-p {
        text-align: center;
        color: gray;
    }

    img {
        max-width: 100%;
        height: auto;
    }
            
    .product {
        display: flex;
    }

    section {
        flex: 1;
    }

    .featured {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        background-color: #F8F8F8;
        border: 5px solid white;
    }

    .featured img {
        transition: 0.5s all;
        object-fit: cover;
        height: 100%;
        max-width: 100%;        
    }

    .featured:hover p {
        transform: translateY(-40px)
    }

    .featured:hover small {
        bottom: 0px;
        transform: translateY(-5px)
    }    

    .featured:hover img {
        transform: scale(1.1)
    }    

    section:nth-child(2) {
        display: flex;
        flex-direction: column;
    }

    .featured p {
        position: absolute;
        transform: translateY(0px);
        bottom: 0px;
        padding: 1rem;
        z-index: 20;
        transition: 0.5s all;
        background-color: white;
    }

    small {
        position: absolute;
        bottom: 0px;
        padding: 1rem;        
        transform: translateY(50px);
        transition: 0.5s all;     
        color: brown;
        background-color: white;   
        z-index: 100;
    }

    .loading{
        text-align: center;
        display: block;
        margin: 0 auto;
    }
`
export default FeaturedProducts