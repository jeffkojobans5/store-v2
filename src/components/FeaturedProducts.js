import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import axios from 'axios';
import { products_url } from '../constants/constants';
import { GET_FEATURED_PRODUCTS } from '../redux/actions/actions'
import styled from 'styled-components'


function FeaturedProducts () {
    const dispatch = useDispatch();
    const featuredProducts = useSelector((state)=>state.featuredProducts)
    console.log(featuredProducts);
    
    function fetchProducts () {
        axios.get(products_url).then((response)=>{
            dispatch({ type : GET_FEATURED_PRODUCTS , payload : response.data})
        }).catch((error)=>{
            console.log(error.data)
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
                <section className="featured">
                    {/* <div className="product"> */}                    
                        <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/cat-23-860x860.jpg" alt="" />
                        <p> Hello </p>   <br/>                     
                        <small> price </small>                     
                    {/* </div> */}
                </section>
                <section>
                    <div className="product">
                        <div className="featured">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/cat-23-860x860.jpg" alt="" />     
                            <p> Hello </p>   <br/>                     
                            <small> price </small>
                        </div>
                        <div className="featured">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/cat-23-860x860.jpg" alt="" />                            
                            <p> Hello </p>   <br/>                     
                            <small> price </small>                          
                        </div>
                    </div>
                    <div className="product">
                        <div className="featured">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/cat-23-860x860.jpg" alt="" />                            
                            <p> Hello </p>   <br/>                     
                            <small> price </small>                       
                        </div>
                        <div className="featured">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/06/cat-23-860x860.jpg" alt="" />                            
                            <p> Hello </p>   <br/>                     
                            <small> price </small>                     
                        </div>
                    </div>
                </section>
            </div>

            
        </Wrapper>    
    )
}

const Wrapper = styled.div`
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
        ${'' /* margin: 1rem; */}
        background-color: #F8F8F8;
        border: 5px solid white;
    }

    .featured img {
        transition: 0.5s all;
    }

    .featured:hover p {
        transform: translateY(-30px)
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
        
    }

    small {
        position: absolute;
        bottom: 0px;
        padding: 1rem;        
        transform: translateY(50px);
        transition: 0.5s all;        
    }


`
export default FeaturedProducts