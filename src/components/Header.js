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
                        <Link to=""> Login / Register </Link>
                        <AiFillHeart />
                        <div className="cart">
                            <RiShoppingCartLine />
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
    background-color: green;
    list-style-type: none;
    
    .navbar ul {
        display: flex;

        li {
            list-style-type: none;
            flex: 1;
        }
    }

    .row {
        display: flex;

        .logo img {
            width: 50%;
            margin: 0 auto;
            display: block;
        }
        .box {
            flex: 1;
        }
    }

`