import { useState , useContext } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {navbar_links} from '../constants/constants'
import Logo from '../media/logo.svg'
import {AiFillHeart} from 'react-icons/ai'
import {RiShoppingCartLine} from 'react-icons/ri'

function Header () {
    return (
        <Wrapper>
            <div className="container">
                <div className="row">
                    <div className="box navbar">
                        <ul>
                            { navbar_links.map((item)=>{
                                return (
                                    <li key={item.id}> <Link to=""> {item.name} </Link> </li>  
                                )
                            }) }
                        </ul>
                    </div>
                    <div className="box logo">
                        <img src={ Logo } alt="logo" />
                    </div>
                    <div className="box social-media">
                        <div className="social-media-login-register">
                            <Link to="/"> LOGIN / REGISTER </Link>
                        </div>
                        <div className="social-media-wishlist">
                            <AiFillHeart />
                        </div> 
                        <div className="social-media-cart">
                            <RiShoppingCartLine className="social-media-cart-icon"/>
                            <p> 1 / $400.00 </p>
                        </div>
                    </div>                    
                </div>
            </div> 
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    list-style-type: none;
    background-color: whitesmoke;
    .navbar ul {
        display: flex;

        li {
            list-style-type: none;
            flex: 1;

            a {
                color: #000000;
                text-decoration: none;
            }
        }
    }

    .row {
        display: flex;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;

        .logo img {
            width: 50%;
            margin: 0 auto;
            display: block;
        }
        .box {
            flex: 1;
        }
    }

    .social-media {
        display: flex;
        justify-content: flex-end;
        a {
            color: #000000;
            text-decoration: none;            
        }
        .social-media-login-register a{
            color: gray;
        }
        .social-media-wishlist {
            margin-left: 1rem;
        }
        .social-media-cart {
            display: flex;
            margin-left: 1rem;                        
            .social-media-cart-icon {
                margin-top: 0.1rem;
                margin-right: 0.5rem;
            }
        }
    }

`